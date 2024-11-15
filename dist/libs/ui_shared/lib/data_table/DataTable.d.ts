import { GridApi, GridColDef } from '@mui/x-data-grid';

interface DataGridProps<T> {
    columns: GridColDef[];
    rows: T[] | undefined;
    loading: boolean;
    apiRef: React.MutableRefObject<GridApi>;
}
export declare const DataTable: <T extends {
    id: string | number;
}>({ columns, rows, apiRef, loading, ...rest }: DataGridProps<T>) => import("react/jsx-runtime").JSX.Element;
export default DataTable;
