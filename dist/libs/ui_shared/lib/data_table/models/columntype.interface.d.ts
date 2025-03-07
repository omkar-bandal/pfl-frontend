import { GridColDef } from '@mui/x-data-grid';

export type CustomGridColDef = GridColDef & {
    isMobileVisible?: boolean;
};
