import { useCallback, useEffect, useState } from "react";
import { Alert, Autocomplete, Box, Button, CircularProgress, Stack, TextField } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllProducts } from "@prime-fresh/admin/modules";
import { DataTable, TableToolbar, toast } from "@prime-fresh/ui_shared";
import { ProductListCols } from "./product.columns";
import { GetProduct, ProductPartialData } from "@prime-fresh/admin_api";
import { axiosInstance, COM_API_URL } from "@prime-fresh/common_api";
import { useQuery } from "@tanstack/react-query";
import { debounce } from "@prime-fresh/shared/modules";

export function ProductTable() {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { data, isLoading, error, isError } = useGetAllProducts();
  const product = data !== null && data?.data ? data.data : [];

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => {
    navigate(ADMIN_ROUTES.CREATE_PRODUCT);
  };

  const [searchInput, setSearchInput] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<ProductPartialData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchFilteredProducts = async (query: string): Promise<ProductPartialData[]> => {
    if (!query.trim()) return []; 

    try {
      const response = await axiosInstance.get(`${COM_API_URL.BASE_URL}/products/productname/?search=${query}`);
      const data = response.data.data;
      console.log("Response: ", response.data.data);

      if (Array.isArray(data)) {
        return data; 
      } else {
        return []; 
      }
    } catch (error) {
      setErrorMessage('Failed to fetch products. Please try again.');
      return [];
    }
  };

  const { data: products = [], isFetching } = useQuery({
    queryKey: ['products', searchInput],
    queryFn: () => fetchFilteredProducts(searchInput),
    // enabled: !!searchInput.trim(), // Fetch only if input is non-empty
    staleTime: 5000,
  });
  console.log("Searched Products: ", products);
  // Debounce API calls to avoid excessive requests
  const debouncedInputChange = useCallback(
    debounce((value: string) => {
      setSearchInput(value);
      setErrorMessage(null); 
    }, 600),
    []
  );


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
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

        <Autocomplete
          size="small"
          value={selectedProduct}
          onChange={(event, newValue) => setSelectedProduct(newValue)}
          onInputChange={(event, newInputValue) => debouncedInputChange(newInputValue || '')}
          options={Array.isArray(products) ? products : []} 
          getOptionLabel={(option) => option.name || ''}
          loading={isFetching}
          noOptionsText={isFetching ? 'Loading...' : 'No products found'}
          isOptionEqualToValue={(option, value) => option.id === value.id} 
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Products"
              variant="outlined"
              fullWidth
              error={!!errorMessage}
              helperText={errorMessage || ''}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isFetching ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
          sx={{ width: 300 }}
        />
        <TableToolbar apiRef={apiRef} />
      </Stack>
      <DataTable
        loading={isLoading}
        rows={products.length > 0 ? products : product}
        columns={ProductListCols()}
        apiRef={apiRef}
      />
    </Box>
  );
}
