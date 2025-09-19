import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Box, Grid2, useMediaQuery, useTheme } from '@mui/material';
import { Add, Delete, DoneAll, Edit, KeyboardArrowDown, Preview, Settings, Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTES, useGetAllProducts } from '@prime-fresh/admin/modules';
import {
  toast,
  BtnSmall,
  DataGridTable,
  ColumnVisibilityPanel,
  PageTitle,
  useDataTable,
  SearchBox,
  IconButtonConfig,
  IconButtonGroup,
  ActionMenu,
} from '@prime-fresh/ui_shared';
import { useProductColumns } from './product.columns';
import { sharedRoutes, useDebounce } from '@prime-fresh/shared/modules';
import { GetProduct } from '@prime-fresh/common_api';
import { useGridApiRef } from '@mui/x-data-grid';

export function ProductTable() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const apiRef = useGridApiRef();

  const navigate = useNavigate();
  const productColumns = useProductColumns();
  const {
    actionMenu,
    openActionMenu,
    handleOpenActionMenu,
    handleCloseActionMenu,
    enableCheckboxSelection,
    handleEnableCheckboxSelection,
    queryParams,
    paginationModel,
    handlePaginationChange,
    sortModel,
    handleSortingChange,
    search,
    setSearch,
    columnVisibilityModel,
    handleColumnVisibilityModelChange,
    displayColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel,
    handleCloseColumnVisibilityPanel,
  } = useDataTable({ columnDef: productColumns, initialPageSize: 10 });

  const debouncedSearch = useDebounce(search, 1000);

  const { data, isLoading, error, isError } = useGetAllProducts(queryParams, debouncedSearch);
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

  const handleCreate = useCallback(() => navigate(sharedRoutes.CREATE_PRODUCT), [navigate]);

  const handleEdit = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a product to edit.');
    } else if (selectedRows.length > 1) {
      toast.info('Please select only one product to edit.');
    } else {
      const selectedId = selectedRows[0];
      navigate(`${ADMIN_ROUTES.UPDATE_PRODUCT}/${selectedId}`);
    }
  }, [navigate, apiRef]);

  const handleView = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a product to view.');
    } else if (selectedRows.length > 1) {
      toast.info('Please select only one product to view.');
    } else {
      const selectedId = selectedRows[0];
      navigate(`${ADMIN_ROUTES.GET_A_PRODUCT}/${selectedId}`);
    }
  }, [navigate, apiRef]);

  const handleDelete = () => {};

  const buttonConfig: IconButtonConfig[] = useMemo(
    () => [
      {
        icon: <DoneAll />,
        label: 'Select',
        color: 'secondary',
        onClick: handleEnableCheckboxSelection,
        toolTipText: 'Enable or disable row selection',
      },
      {
        icon: <Edit />,
        label: 'Edit',
        color: 'info',
        onClick: () => handleEdit(),
        toolTipText: 'Edit selected product (select only one)',
      },
      {
        icon: <Preview />,
        label: 'View',
        color: 'warning',
        onClick: () => handleView(),
        toolTipText: 'VIew selected farmer (select only one)',
      },
      {
        icon: <Delete />,
        label: 'Delete',
        color: 'error',
        onClick: () => handleDelete(),
        toolTipText: 'Delete selected product (select multiple)',
      },
      {
        icon: <Add />,
        label: 'Add New',
        color: 'success',
        onClick: () => handleCreate(),
        toolTipText: 'Create new product',
      },
      {
        icon: <Settings />,
        label: 'Column',
        color: 'primary',
        onClick: handleOpenColumnVisibilityPanel,
        disabled: false,
      },
    ],
    []
  );
  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container spacing={2} marginY={1}>
        <Grid2 size={{ xs: isMobile ? 8 : 12, md: 6 }}>
          <PageTitle pagetitle="Products" />
        </Grid2>
        {isMobile && (
          <Grid2 size={{ xs: 4 }}>
            <BtnSmall label="Actions" color="info" icon={<KeyboardArrowDown />} onClick={handleOpenActionMenu} />
            <ActionMenu
              menuConfig={buttonConfig}
              anchorEl={actionMenu}
              open={openActionMenu}
              onClose={handleCloseActionMenu}
            />
          </Grid2>
        )}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <SearchBox name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        </Grid2>
        {!isMobile && (
          <Grid2
            size={{ xs: 12, md: 12 }}
            sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start', alignItems: 'center' }}
          >
            {buttonConfig.map((button, index) => (
              <BtnSmall
                key={index}
                label={button.label}
                icon={button.icon}
                color={button.color as any}
                onClick={button.onClick}
                toolTipText={button.toolTipText}
                sx={{ marginRight: 2 }}
              />
            ))}
          </Grid2>
        )}
      </Grid2>
      <ColumnVisibilityPanel
        popoverId="products-col-def"
        columns={productColumns}
        columnVisibilityModel={columnVisibilityModel}
        displayColumnVisibilityModel={displayColumnVisibilityPanel}
        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
      />
      <DataGridTable<GetProduct>
        apiRef={apiRef}
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
        checkboxSelection={enableCheckboxSelection}
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
