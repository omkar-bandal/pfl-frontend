// components/LineChart.tsx
import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register required chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LineChartProps {
  title?: string;
  labels: string[];
  datasets: ChartData<'line'>['datasets'];
  options?: ChartOptions<'line'>;
  height?: number;
  width?: number;
}

export const LineChart: React.FC<LineChartProps> = ({
  title,
  labels,
  datasets,
  options,
  height,
  width,
}) => {
  const defaultOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: !!title,
        text: title,
      },
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    ...options,
  };

  const chartData: ChartData<'line'> = {
    labels,
    datasets,
  };

  return (
    <div style={{ width: width ?? '100%', height: height ?? 400 }}>
      <Line data={chartData} options={defaultOptions} />
    </div>
  );
};

