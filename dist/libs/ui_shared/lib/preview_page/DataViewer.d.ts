import { SxProps, Theme } from '@mui/material';
import { default as React } from 'react';

export interface FieldConfig {
    key: string;
    label?: string;
    render?: (value: any, data?: any) => React.ReactNode;
    icon?: React.ReactNode;
    hidden?: boolean;
    width?: number | string;
}
export interface SectionConfig {
    title?: string;
    icon?: React.ReactNode;
    sectionType: "object" | "array";
    keyField?: string;
    fieldArrayName?: string;
    fields: FieldConfig[];
    layout?: "grid" | "list" | "table";
    gridColumns?: number;
    tableHeadings?: string[];
}
export interface ObjectViewerConfig {
    sections?: SectionConfig[];
}
interface GenericObjectViewerProps {
    data: Record<string, any>;
    config: ObjectViewerConfig;
    sx?: SxProps<Theme>;
}
export declare const DataViewer: React.FC<GenericObjectViewerProps>;
export {};
