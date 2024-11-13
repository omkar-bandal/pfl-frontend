import { GridColDef } from "@mui/x-data-grid";
import { Preview, Edit } from '@mui/icons-material';
import { IconButton } from "@mui/material";

export const ProductClassificationListCols: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Classification",
    width: 750,
    valueGetter: (value: string) => value? value : '-',
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
