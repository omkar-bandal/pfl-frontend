import { useEffect, useMemo, useRef } from 'react';
import { Box, Grid2 } from '@mui/material';
import { Add, Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useGetAllProducts } from '@prime-fresh/admin/modules';
import { toast, BtnSmall, DataGridTable, ColumnVisibilityPanel, PageTitle, useDataTable } from '@prime-fresh/ui_shared';
import { useProductColumns } from './product.columns';
import { sharedRoutes } from '@prime-fresh/shared/modules';

export function ProductTable() {
  const navigate = useNavigate();
  const productColumns = useProductColumns();
  const {
    paginationModel,
    sortModel,
    handleSortingChange,
    handlePaginationChange,
    queryParams,
    columnVisibilityModel,
    displayColumnVisibilityPanel,
    handleColumnVisibilityModelChange,
    handleCloseColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel,
  } = useDataTable({ columnDef: productColumns, initialPageSize: 10 });

  const { data, isLoading, error, isError } = useGetAllProducts(queryParams);
  const allProducts = data ? data : null;
  const rowCountRef = useRef(allProducts?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (allProducts?.allRecords !== undefined) {
      rowCountRef.current = allProducts.allRecords;
    }
    return rowCountRef.current;
  }, [allProducts]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => navigate(sharedRoutes.CREATE_PRODUCT);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Products" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="products-col-def"
            columns={productColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable
        loading={isLoading}
        rows={allProducts?.data || []}
        columns={productColumns}
        mode="server"
        initialPageSize={10}
        totalRows={rowCount}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationChange}
        sortModel={sortModel}
        onSortModelChange={handleSortingChange}
        columnVisibilityModel={columnVisibilityModel}
      />
    </Box>
  );
}

// export const ProductTable = () => {
//   const [searchInput, setSearchInput] = useState<string>('');
//   const [selectedProduct, setSelectedProduct] = useState<ProductPartialData | null>(null);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

// const fetchFilteredProducts = async (query: string): Promise<ProductPartialData[]> => {
//   if (!query.trim()) return [];

//   try {
//     const response = await axiosInstance.get(`${COM_API_URL.BASE_URL}/products/productname/?search=${query}`);
//     const data = response.data.data;
//     console.log("Response: ", response.data.data);

//     if (Array.isArray(data)) {
//       return data;
//     } else {
//       return [];
//     }
//   } catch (error) {
//     setErrorMessage('Failed to fetch products. Please try again.');
//     return [];
//   }
// };

// const { data: products = [], isFetching } = useQuery({
//   queryKey: ['products', searchInput],
//   queryFn: () => fetchFilteredProducts(searchInput),
//   // enabled: !!searchInput.trim(), // Fetch only if input is non-empty
//   staleTime: 5000,
// });
// console.log("Searched Products: ", products);
// // Debounce API calls to avoid excessive requests
// const debouncedInputChange = useCallback(
//   debounce((value: string) => {
//     setSearchInput(value);
//     setErrorMessage(null);
//   }, 600),
//   []
// );
//   return (
//     <Box sx={{ flex: 1 }}>
//       <Stack direction="row" justifyContent="space-between" alignItems="center">
//         <Button
//           variant="outlined"
//           size="medium"
//           startIcon={<Add />}
//           sx={{ marginY: 2 }}
//           fullWidth={false}
//           onClick={handleCreate}
//         >
//           Add Product
//         </Button>
//         {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

//         <Autocomplete
//           size="small"
//           value={selectedProduct}
//           onChange={(event, newValue) => setSelectedProduct(newValue)}
//           onInputChange={(event, newInputValue) => debouncedInputChange(newInputValue || '')}
//           options={Array.isArray(products) ? products : []}
//           getOptionLabel={(option) => option.name || ''}
//           loading={isFetching}
//           noOptionsText={isFetching ? 'Loading...' : 'No products found'}
//           isOptionEqualToValue={(option, value) => option.id === value.id}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               label="Search Products"
//               variant="outlined"
//               fullWidth
//               error={!!errorMessage}
//               helperText={errorMessage || ''}
//               InputProps={{
//                 ...params.InputProps,
//                 endAdornment: (
//                   <>
//                     {isFetching ? <CircularProgress color="inherit" size={20} /> : null}
//                     {params.InputProps.endAdornment}
//                   </>
//                 ),
//               }}
//             />
//           )}
//           sx={{ width: 300 }}
//         />
//         <TableToolbar apiRef={apiRef} />
//       </Stack>
//       <DataTable
//         loading={isLoading}
//         rows={product}
//         columns={ProductListCols()}
//         apiRef={apiRef}
//       />
//     </Box>
//   );
// }
