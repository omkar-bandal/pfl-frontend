import { TooltipProps } from '@mui/material/Tooltip';
import { default as React } from 'react';

type InfoTooltipProps = Omit<TooltipProps, 'title'> & {
    info: React.ReactNode;
    children: React.ReactNode;
};
export declare const InfoTooltip: React.FC<InfoTooltipProps>;
export {};
