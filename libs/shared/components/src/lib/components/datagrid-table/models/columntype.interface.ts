import { GridColDef } from "@mui/x-data-grid";

export type CustomGridColDef = GridColDef & {
  hide?: boolean;
  isMobileVisible?: boolean;
}