import { default as React } from 'react';

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
export declare const BarChart: React.FC<BarChartProps>;
export {};
