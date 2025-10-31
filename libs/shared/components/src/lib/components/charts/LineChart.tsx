/* eslint-disable @typescript-eslint/no-explicit-any */
// // components/LineChart.tsx
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
import { Paper } from '@mui/material';
import { getLightColor } from '@prime-fresh/shared/modules';

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

export interface LineChartData {
  x: string;
  y: number;
}

interface GroupedData {
  label: string;
  value: number;
}

interface LineChartProps {
  data: LineChartData[];
  groupBy: 'date' | 'month' | 'year' | 'range';
  startDate?: string;
  endDate?: string;
  title?: string;
  options?: any;
  height?: number;
  color?: string;
}

export const LineChart: React.FC<LineChartProps> = ({
  title,
  data,
  groupBy,
  startDate,
  endDate,
  options,
  height = 400,
  color
}) => {
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

  const filteredData = groupData();

  const chartJsData: ChartData<'line'> = {
    labels: filteredData.map((d) => d.label),
    datasets: [
      {
        label: title || 'Value',
        data: filteredData.map((d) => d.value),
        // backgroundColor: getLightColor(color || '#000000'),
        borderColor: color,
        borderWidth: 2,
        fill: false
      },
    ],
  };

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
      datalabels: {
        display: false,
      },
    },
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        min: 0
      },
    },
    ...options,
  };


  return (
    <Paper sx={{ width:'100%', height: height }} elevation={2}>
      <Line data={chartJsData} options={defaultOptions} />
    </Paper>
  );
};

// components/LineChart.tsx
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import {
//   Box,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   SelectChangeEvent,
//   Typography,
// } from '@mui/material';
// import dayjs from 'dayjs';
// import { useMemo, useState } from 'react';

// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler
// );

// export type TimeFilter = 'dateRange' | 'month' | 'year';

// interface LineChartProps {
//   rawData: { label: string; value: number; date: string }[];
//   title?: string;
//   options?: any;
//   timeFilterEnabled?: boolean;
//   defaultTimeFilter?: TimeFilter;
//   onFilterChange?: (filter: TimeFilter) => void;
//   customColors?: string[];
// }

// export const LineChart: React.FC<LineChartProps> = ({
//   rawData,
//   title,
//   options,
//   timeFilterEnabled = true,
//   defaultTimeFilter = 'month',
//   onFilterChange,
//   customColors,
// }) => {
//   const [filter, setFilter] = useState<TimeFilter>(defaultTimeFilter);

//   const handleFilterChange = (event: SelectChangeEvent) => {
//     const value = event.target.value as TimeFilter;
//     setFilter(value);
//     onFilterChange?.(value);
//   };

//   const { labels, dataset } = useMemo(() => {
//     const grouped: Record<string, number> = {};

//     rawData.forEach(({ value, date }) => {
//       let key: string;

//       switch (filter) {
//         case 'year':
//           key = dayjs(date).format('YYYY');
//           break;
//         case 'month':
//           key = dayjs(date).format('MMM YYYY');
//           break;
//         case 'dateRange':
//         default:
//           key = dayjs(date).format('DD MMM');
//       }

//       grouped[key] = (grouped[key] || 0) + value;
//     });

//     const sortedKeys = Object.keys(grouped).sort((a, b) => {
//       const format = filter === 'year' ? 'YYYY' : filter === 'month' ? 'MMM YYYY' : 'DD MMM';
//       return dayjs(a, format).toDate().getTime() - dayjs(b, format).toDate().getTime();
//     });

//     return {
//       labels: sortedKeys,
//       dataset: sortedKeys.map((key) => grouped[key]),
//     };
//   }, [rawData, filter]);

//   const chartData = {
//     labels,
//     datasets: [
//       {
//         label: 'Quantity (kg)',
//         data: dataset,
//         borderColor: customColors?.[0] || '#1976d2',
//         backgroundColor: (customColors?.[0] || '#1976d2') + '22',
//         fill: true,
//         tension: 0.4,
//         pointRadius: 4,
//         pointHoverRadius: 6,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top' as const,
//       },
//       datalabels: {
//         display: false,
//       },
//       scales: {
//         y: {
//           type: 'linear',
//           beginAtZero: true,
//           min: 0,
//           ticks: {
//             stepSize: 10, // optional, controls increment between ticks
//           },
//         },
//       },
//       title: {
//         display: !!title,
//         text: title,
//         font: {
//           size: 18,
//           weight: 'bold',
//         },
//         color: '#333',
//       },
//     },
//     ...options,
//   };

//   return (
//     <Box width="100%">
//       {timeFilterEnabled && (
//         <FormControl size="small" sx={{ mb: 2 }}>
//           <InputLabel>View By</InputLabel>
//           <Select value={filter} label="View By" onChange={handleFilterChange}>
//             <MenuItem value="dateRange">Date</MenuItem>
//             <MenuItem value="month">Month</MenuItem>
//             <MenuItem value="year">Year</MenuItem>
//           </Select>
//         </FormControl>
//       )}
//       <Line data={chartData} options={chartOptions} />
//     </Box>
//   );
// };
