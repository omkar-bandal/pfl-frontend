import { GridColDef } from '@mui/x-data-grid';

//Custom column defination type for datagrid table columns
export type CustomGridColDef = GridColDef & {
  isMobileVisible?: boolean;
}
