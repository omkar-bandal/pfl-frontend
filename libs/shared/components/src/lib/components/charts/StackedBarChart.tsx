/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Paper } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export interface StackedBarData {
  x: string;
  y: number;
  category: string; // Category for stacking
}

export interface GroupedStackedData {
  label: string;
  categories: Record<string, number>;
}

interface StackedBarChartProps {
  data: StackedBarData[];
  groupBy: 'date' | 'month' | 'year' | 'range';
  startDate?: string;
  endDate?: string;
  title?: string;
  options?: any;
  colors?: Record<string, string>; // Colors for each category
  height?: number;
}

export const StackedBarChart: React.FC<StackedBarChartProps> = ({
  data,
  groupBy,
  startDate,
  endDate,
  title,
  options,
  height = 400,
  colors = {},
}) => {
  // Get unique categories from data
  const getCategories = (): string[] => {
    const categories = new Set<string>();
    data.forEach((d) => categories.add(d.category));
    return Array.from(categories).sort();
  };

  // Aggregate and optionally filter data
  const groupData = (): GroupedStackedData[] => {
    const grouped: Record<string, Record<string, number>> = {};
    let filtered = data;

    if (groupBy === 'range') {
      // Ensure both dates are provided
      if (!startDate || !endDate) {
        console.warn('startDate and endDate must be provided when groupBy is "range"');
        return [];
      }
      const start = new Date(startDate);
      const end = new Date(endDate);
      filtered = data.filter((d) => {
        const dt = new Date(d.x);
        return dt >= start && dt <= end;
      });
    }

    filtered.forEach((d) => {
      const dt = new Date(d.x);
      let key: string;

      switch (groupBy) {
        case 'month': {
          const month = dt.getMonth() + 1;
          const mm = month < 10 ? `0${month}` : `${month}`;
          key = `${dt.getFullYear()}-${mm}`;
          break;
        }
        case 'year':
          key = `${dt.getFullYear()}`;
          break;
        default:
          key = d.x;
      }

      if (!grouped[key]) {
        grouped[key] = {};
      }
      grouped[key][d.category] = (grouped[key][d.category] || 0) + d.y;
    });

    return Object.entries(grouped)
      .sort(([a], [b]) => (a > b ? 1 : -1))
      .map(([label, categoryValues]) => ({
        label,
        categories: categoryValues,
      }));
  };

  const chartData = groupData();
  const categories = getCategories();

  // Default colors if not provided
  const defaultColors = [
    '#4e79a7',
    '#f28e2c',
    '#e15759',
    '#76b7b2',
    '#59a14f',
    '#edc949',
    '#af7aa1',
    '#ff9da7',
    '#9c755f',
    '#bab0ab',
  ];

  const datasets = categories.map((category, index) => ({
    label: category,
    data: chartData.map((d) => d.categories[category] || 0),
    backgroundColor: colors[category] || defaultColors[index % defaultColors.length],
    borderColor: colors[category] || defaultColors[index % defaultColors.length],
    borderWidth: 1,
    barThickness: 50,
  }));

  const chartJsData = {
    labels: chartData.map((d) => d.label),
    datasets,
  };

  const defaultOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
        display: true,
      },
      datalabels: {
        display: false,
      },
      title: {
        display: !!title,
        text: title || '',
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
      ...options?.plugins,
    },
    ...options,
  };

  return (
    <Paper sx={{ width: '100%', height: height, padding: 1, background: `linear-gradient(to right,  #ece9e6, #ffffff)` }} elevation={2}>
      <Bar data={chartJsData} options={defaultOptions} />
    </Paper>
  );
};
