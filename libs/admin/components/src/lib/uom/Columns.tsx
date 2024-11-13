import { GridColDef } from "@mui/x-data-grid";
import { Preview, Edit } from '@mui/icons-material';
import { IconButton } from "@mui/material";
export const UOMListCols: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "unit",
    headerName: "UOM Name",
    width: 150,
  },
  {
    field: "abbreviation",
    headerName: "Abbreviation",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "description",
    headerName: "Description",
    width: 470,
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
