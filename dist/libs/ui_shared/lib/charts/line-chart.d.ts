import { default as React } from 'react';

export interface LineChartData {
    x: string;
    y: number;
}
export interface GroupedData {
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
export declare const LineChart: React.FC<LineChartProps>;
export {};
