import { default as React } from 'react';

export interface DoughnutChartProps {
    data?: {
        label: string;
        value: number;
        color?: string;
    }[];
    title?: string;
    displayPercentage?: boolean;
    cutout?: string | number;
    total?: number;
    centerText?: string;
    height?: number;
}
export declare const DoughnutChart: React.FC<DoughnutChartProps>;
