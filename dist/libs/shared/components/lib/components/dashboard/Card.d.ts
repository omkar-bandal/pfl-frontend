import { default as React } from 'react';

interface DashboardCardProps {
    label: string;
    amountCount: number;
    amountPercent: number | string;
    quantityCount: number;
    quantityPercent: number | string;
    color?: string;
    onClickAction: any;
}
export declare const DashboardCard: React.FC<DashboardCardProps>;
export {};
