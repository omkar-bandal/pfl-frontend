import { CustomGridColDef } from './models/columntype.interface';
import { GridApi, GridFilterModel, GridPaginationModel, GridSortModel } from '@mui/x-data-grid';

interface DataGridProps<T> {
    columns: CustomGridColDef[];
    rows: T[] | undefined;
    mode: "server" | "client";
    initialPageSize?: number;
    totalRows?: number;
    paginationModel?: GridPaginationModel;
    onPaginationModelChange?: (newPaginationModel: GridPaginationModel) => void;
    sortModel?: GridSortModel;
    onSortModelChange?: (newSortModel: GridSortModel) => void;
    filterModel?: GridFilterModel;
    onFilterModelChange?: (newFilterModel: GridFilterModel) => void;
    loading: boolean;
    apiRef?: React.MutableRefObject<GridApi>;
}
export declare const DataGridTable: <T extends {
    id: string | number;
}>(props: DataGridProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
