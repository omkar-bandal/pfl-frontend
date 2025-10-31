// DoughnutChart.tsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  Plugin
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Paper } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export interface DoughnutChartProps {
  data?: { label: string; value: number; color?: string }[];
  title?: string;
  displayPercentage?: boolean;
  cutout?: string | number;
  total?: number;
  centerText?: string;
  height?: number;
}

export const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data = [],
  title,
  displayPercentage = true,
  cutout = '70%',
  total,
  centerText,
  height = 500
}) => {
  const totalVal = total ? total : data.reduce((sum, item) => sum + item.value, 0);

  const chartData: ChartData<'doughnut'> = {
    labels: data.map((d) => d.label),
    datasets: [
      {
        data: data.map((d) => d.value),
        backgroundColor: data.map(
          (d) => d.color || `hsl(${Math.random() * 360}, 70%, 60%)`
        ),
        borderWidth: 1,
        hoverOffset: 15,
      },
    ],
  };
  const centerTextPlugin: Plugin<'doughnut'> = {
    id: 'centerTextPlugin',
    beforeDraw: (chart) => {
      if (!centerText) return;
      const { width, height, ctx } = chart;
      ctx.save();
      const fontSize = (height / 500).toFixed(2); // Adjust the denominator to scale font
      ctx.font = `700 ${fontSize}em sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#595959';

      const lines = centerText.split('\n');
      const lineHeight = 16; // You can fine-tune this
      const totalTextHeight = lines.length * lineHeight;
      lines.forEach((line, index) => {
        const textX = Math.round((width - ctx.measureText(line).width) / 2);
        const textY = height / 2 - totalTextHeight / 2 + index * lineHeight;
        ctx.fillText(line, textX, textY);
      });
      ctx.restore();
    },
  };
  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw as number;
            const percent = totalVal ? ((value / totalVal) * 100).toFixed(1) : '0';
            return `${tooltipItem.label}: ${value} (${percent}%)`;
          },
        },
      },
      datalabels: {
        color: '#fff',
        formatter: (value: number, context) => {
          if (!displayPercentage) return value;
          const percent = totalVal ? ((value / totalVal) * 100).toFixed(1) : '0';
          return `${percent}%`;
        },
      },
      title: title
        ? {
          display: true,
          text: title,
          font: {
            size: 18, // ⬅️ Increase this value for larger title text
            weight: 'bold',
          },
          color: '#333', // ⬅️ Change this to any valid CSS color (hex, rgb, named)
          padding: {
            top: 10,
            bottom: 20,
          },
        }
        : undefined,
    },
    cutout,
  };

  return (
    <Paper
      sx={{
        width: '100%',
        height: height,
        marginX: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      elevation={2}>
      <Doughnut
        data={chartData}
        options={options}
        plugins={[centerTextPlugin]}
      />
    </Paper>
  )

};

