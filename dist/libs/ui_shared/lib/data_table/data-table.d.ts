import { CustomGridColDef } from './models/columntype.interface';
import { GridApi, GridPaginationModel, GridSortModel } from '@mui/x-data-grid';
import { default as React } from 'react';

export interface DataGridProps<T> {
    columns: CustomGridColDef[];
    columnVisibilityModel?: {
        [field: string]: boolean;
    };
    rows: T[] | undefined;
    mode: 'server' | 'client';
    initialPageSize?: number;
    totalRows?: number;
    paginationModel?: GridPaginationModel;
    onPaginationModelChange?: (newPaginationModel: GridPaginationModel) => void;
    sortModel?: GridSortModel;
    onSortModelChange?: (newSortModel: GridSortModel) => void;
    loading: boolean;
    apiRef?: React.MutableRefObject<GridApi>;
}
export declare const DataGridTable: <T extends {
    id: string | number;
}>(props: DataGridProps<T>) => import("react/jsx-runtime").JSX.Element;
