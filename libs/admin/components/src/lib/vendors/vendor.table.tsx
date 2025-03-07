import { Box, Grid2 } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { VendorListCols } from "./vendor.columns";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllVendors } from "@prime-fresh/admin/modules";
import { AddNewButton, DataTable, PageTitle, toast } from "@prime-fresh/ui_shared";
import { useEffect } from "react";

export function VendorTable() {
  const navigate = useNavigate()
  const apiRef = useGridApiRef();
  const { data, isError, isLoading, error } = useGetAllVendors();
  const Vendors = data?.data ? data.data : [];

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.')
    }
  }, [isError, error])

  const handleCreate = () => {
    navigate(ADMIN_ROUTES.CREATE_VENDOR);
  };
  console.log(Vendors);
  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle='Vendors' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
          <AddNewButton handleClick={handleCreate} />
        </Grid2>
      </Grid2>
      <DataTable
        loading={isLoading}
        apiRef={apiRef}
        rows={Vendors}
        columns={VendorListCols()}
      />
    </Box>
  );
}
