import { CustomGridColDef } from './models/columntype.interface';
import { GridApi } from '@mui/x-data-grid';

interface DataGridProps<T> {
    columns: CustomGridColDef[];
    rows: T[] | undefined;
    loading: boolean;
    apiRef?: React.MutableRefObject<GridApi>;
    visibilityModel?: any;
    onVisibilityModelChange?: any;
}
export declare const DataTable: <T extends {
    id: string | number;
}>({ columns, rows, apiRef, loading, visibilityModel, onVisibilityModelChange, ...rest }: DataGridProps<T>) => import("react/jsx-runtime").JSX.Element;
export default DataTable;
