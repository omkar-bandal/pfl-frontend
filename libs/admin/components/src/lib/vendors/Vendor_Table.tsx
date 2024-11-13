import { Box, Button, Snackbar, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { Add } from "@mui/icons-material";
import { VendorListCols } from "./Columns";
import { useNavigate } from "react-router-dom";
import { ADMIN_API_URL, useGetAllVendors } from "@prime-fresh/admin_api";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";

export function VendorTable() {
  const navigate = useNavigate()
  const apiRef = useGridApiRef();
  const { data: Vendors, isError, isLoading } = useGetAllVendors(ADMIN_API_URL.GET_ALL_VENDORS);

  const handleCreate = ()  => {
    navigate(ADMIN_ROUTES.CREATE_VENDOR);
  };
  console.log(Vendors);
  return (
    <>
      <Snackbar open={isError} message="Error" autoHideDuration={1200} />
      <Box sx={{ flex: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            variant="outlined"
            size="medium"
            startIcon={<Add />}
            sx={{ marginY: 2 }}
            fullWidth={false}
            onClick={() => handleCreate()}
          >
            Add Vendor
          </Button>
          <TableToolbar apiRef={apiRef} />
        </Stack>
        <DataTable
        loading={isLoading}
          apiRef={apiRef}
          rows={Vendors}
          columns={VendorListCols()}
        />
      </Box>
    </>
  );
}
