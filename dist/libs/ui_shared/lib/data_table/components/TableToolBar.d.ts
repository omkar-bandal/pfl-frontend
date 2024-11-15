import { default as React } from 'react';
import { GridApi } from '@mui/x-data-grid';

interface DataTableProps {
    apiRef: React.MutableRefObject<GridApi>;
}
export declare const TableToolbar: React.FC<DataTableProps>;
export default TableToolbar;
