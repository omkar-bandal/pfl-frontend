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

export interface BarChartData {
  x: string;
  y: number;
}

export interface GroupedData {
  label: string;
  value: number;
}

interface BarChartProps {
  data: BarChartData[];
  groupBy: 'date' | 'month' | 'year' | 'range';
  startDate?: string;
  endDate?: string;
  title?: string;
  options?: any;
  color?: string;
  height?: number;
}

export const BarChart: React.FC<BarChartProps> = ({ data, groupBy, startDate, endDate, title, options, height = 400,
  color = "#595959" }) => {
  // Aggregate and optionally filter data
  const groupData = (): GroupedData[] => {
    const grouped: Record<string, number> = {};
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

      grouped[key] = (grouped[key] || 0) + d.y;
    });

    return Object.entries(grouped)
      .sort(([a], [b]) => (a > b ? 1 : -1))
      .map(([label, value]) => ({ label, value }));
  };

  const chartData = groupData();

  const chartJsData = {
    labels: chartData.map((d) => d.label),
    datasets: [
      {
        label: title || 'Value',
        data: chartData.map((d) => d.value),
        backgroundColor: color,
        borderColor: color,
        borderWidth: 1,
      },
    ],
  };

  const defaultOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: !!title, text: title || '' },
      scales: {
        y: {
          type: 'linear',
          beginAtZero: true,
          min: 0
        },
      },
      ...options,
    },
  };

  return (
    <Paper sx={{ width: '100%', height: height, padding: 1 }} elevation={2}>
      <Bar data={chartJsData} options={defaultOptions} />;
    </Paper>
  )
};

