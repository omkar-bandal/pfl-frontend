// components/BarChart.tsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export interface ProcurementData {
  date: string; // ISO date string 'YYYY-MM-DD'
  totalAmount: number;
}

export interface GroupedData {
  label: string;
  value: number;
}

interface BarChartProps {
  data: ProcurementData[];
  groupBy: 'date' | 'month' | 'year' | 'range';
  startDate?: string;
  endDate?: string;
  title?: string;
}

export const BarChart: React.FC<BarChartProps> = ({ data, groupBy, startDate, endDate, title }) => {
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
        const dt = new Date(d.date);
        return dt >= start && dt <= end;
      });
    }

    filtered.forEach((d) => {
      const dt = new Date(d.date);
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
          key = d.date;
      }

      grouped[key] = (grouped[key] || 0) + d.totalAmount;
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
        label: title || 'Procurement Amount',
        data: chartData.map((d) => d.value),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: !!title, text: title || '' },
    },
  };

  return <Bar data={chartJsData} options={options} />;
};

