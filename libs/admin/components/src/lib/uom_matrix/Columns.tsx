import { GridColDef } from "@mui/x-data-grid";
import { Preview, Edit } from '@mui/icons-material';
import { IconButton } from "@mui/material";
import { GetUOM } from "@prime-fresh/admin_api";

export const UOMMatrixListCols: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "conversionFactor",
    headerName: "Conversion Factor",
    width: 250,
    align: "center",
    headerAlign: "center"
  },
  {
    field: "fromUOM",
    headerName: "From UOM",
    width: 250,
    align: "center",
    headerAlign: "center",
    valueGetter: (value: GetUOM) => value ? value.unit : '-',
  },
  {
    field: "toUOM",
    headerName: "To UOM",
    width: 250,
    align: "center",
    headerAlign: "center",
    valueGetter: (value: GetUOM) => value ? value.unit : '-',
  },
  {
    field: 'edit',
    headerName: 'Edit',
    width: 50,
    sortable: false,
    filterable: false,
    renderCell: () => (
        <IconButton aria-label="edit">
          <Edit color="secondary" />
        </IconButton>
    ),
  },
  {
    field: 'view',
    headerName: 'View',
    width: 50,
    sortable: false,
    filterable: false,
    renderCell: () => (
        <IconButton aria-label="edit">
          <Preview color="primary" />
        </IconButton>
    ),
  },
];
