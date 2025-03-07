import { GridFilterModel, GridPaginationModel, GridSortModel } from '@mui/x-data-grid';

interface QueryParams {
    page: number;
    limit: number;
    filter: Record<string, any>;
    sort: string;
}
interface UseDataTableProps {
    initialPageSize?: number;
}
export declare const useDataTable: ({ initialPageSize }?: UseDataTableProps) => {
    paginationModel: GridPaginationModel;
    filterModel: GridFilterModel;
    sortModel: GridSortModel;
    queryParams: QueryParams;
    setPaginationModel: import('react').Dispatch<import('react').SetStateAction<GridPaginationModel>>;
    handlePaginationChange: (newPaginationModel: GridPaginationModel) => void;
    handleSortingChange: (sorting: GridSortModel) => void;
    handleFiltersChange: (filters: GridFilterModel) => void;
};
export {};
