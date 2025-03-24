import { CustomGridColDef } from './models';
import { GridPaginationModel, GridSortModel } from '@mui/x-data-grid';

export interface QueryParams {
    page: number;
    limit: number;
    sort: string;
}
interface UseDataTableProps {
    initialPageSize?: number;
    columnDef?: CustomGridColDef[];
}
export declare const useDataTable: ({ initialPageSize, columnDef }?: UseDataTableProps) => {
    paginationModel: GridPaginationModel;
    sortModel: GridSortModel;
    queryParams: QueryParams;
    displayColumnVisibilityPanel: HTMLButtonElement | null;
    handleCloseColumnVisibilityPanel: () => void;
    handleOpenColumnVisibilityPanel: (event: React.MouseEvent<HTMLButtonElement>) => void;
    setPaginationModel: import('react').Dispatch<import('react').SetStateAction<GridPaginationModel>>;
    columnVisibilityModel: {
        [field: string]: boolean;
    };
    setColumnVisibilityModel: import('react').Dispatch<import('react').SetStateAction<{
        [field: string]: boolean;
    }>>;
    handleColumnVisibilityModelChange: (field: string) => void;
    handlePaginationChange: (newPaginationModel: GridPaginationModel) => void;
    handleSortingChange: (sorting: GridSortModel) => void;
};
export {};
