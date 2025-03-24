import { CustomGridColDef } from '../models/columntype.interface';
import { default as React } from 'react';

export interface ColumnVisibilityPanelProps {
    popoverId: string;
    columns: CustomGridColDef[];
    columnVisibilityModel: {
        [field: string]: boolean;
    };
    displayColumnVisibilityModel: HTMLButtonElement | null;
    closeColumnVisibilityModel: () => void;
    onColumnVisibilityModelChange: (field: string) => void;
}
export declare const ColumnVisibilityPanel: React.FC<ColumnVisibilityPanelProps>;
