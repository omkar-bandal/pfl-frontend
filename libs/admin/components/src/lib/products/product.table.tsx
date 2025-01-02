import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { Add } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADMIN_API_URL, useGetAllProducts } from "@prime-fresh/admin_api";
import { ADMIN_ROUTES, setProducts } from "@prime-fresh/admin/modules";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";
import { ProductListCols } from "./product.columns";

export function ProductTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: Products, isLoading } = useGetAllProducts(ADMIN_API_URL.GET_ALL_PRODUCTS);
  console.log(Products);
  const apiRef = useGridApiRef();
  React.useEffect(() => {
    Products ? dispatch(setProducts(Products)) : dispatch(setProducts([]));
  }, [Products, dispatch]);

  const handleCreate = () => {
    navigate(ADMIN_ROUTES.CREATE_PRODUCT);
  };

  return (
    <Box sx={{ flex: 1 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          size="medium"
          startIcon={<Add />}
          sx={{ marginY: 2 }}
          fullWidth={false}
          onClick={handleCreate}
        >
          Add Product
        </Button>
        <TableToolbar apiRef={apiRef} />
      </Stack>
      <DataTable
        loading={isLoading}
        rows={Products}
        columns={ProductListCols()}
        apiRef={apiRef}
      />
    </Box>
  );
}
