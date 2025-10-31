import React from "react";
import { Pie } from "react-chartjs-2";
import { Box, SxProps, Theme } from "@mui/material";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export interface PieChartData {
  labels: string[];
  values: number[];
  colors?: string[];
}

export interface PieChartProps {
  data: PieChartData;
  options?: ChartOptions<"pie">;
  title?: string;
  showLegend?: boolean;
  sx?: SxProps<Theme>;
  height?: string | number;
  width?: string | number;
}

export const PieChart: React.FC<PieChartProps> = ({
  data,
  options,
  title,
  showLegend = true,
  sx,
  height = 300,
  width = "100%",
}) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor:
          data.colors ??
          [
            "#42A5F5",
            "#66BB6A",
            "#FFA726",
            "#AB47BC",
            "#EF5350",
            "#29B6F6",
          ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: { display: showLegend, position: "bottom" },
      title: title
        ? {
            display: true,
            text: title,
            font: { size: 16 },
          }
        : undefined,
      tooltip: { enabled: true },
    },
    ...options,
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height,
        width,
        p: 1,
        ...sx,
      }}
    >
      <Pie data={chartData} options={chartOptions} />
    </Box>
  );
};

