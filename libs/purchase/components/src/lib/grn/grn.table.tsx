import React from 'react';
import { Box, Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useGRNColumns } from './grn.columns';
import { IGRN } from '@prime-fresh/purchase_api';
import { grnInitialValue, grnInitValForFilter, PURCHASE_ROUTES, useGetAllGRNs } from '@prime-fresh/purchase/modules';
import {
  BtnSmall,
  ColumnVisibilityPanel,
  DataGridTable,
  DialogBox,
  PageTitle,
  toast,
  useDataTable,
} from '@prime-fresh/ui_shared';
import { inventoryRouteConstants } from '@prime-fresh/inventory/modules';
import { useActions, usePermission } from '@prime-fresh/modules';
import { Add, Filter, Settings } from '@mui/icons-material';
import { FormikProvider, useFormik } from 'formik';
import { GRNFilterPanel } from './grn.filter-panel';

export const GRNTable = () => {
  const navigate = useNavigate();
  const { canEdit, canView } = usePermission('grn');
  const grnColumns = useGRNColumns(canEdit, canView);
  const { openDialogBox } = useActions();
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
    handleFilterParamsChange,
  } = useDataTable({ columnDef: grnColumns, initialPageSize: 10 });
  // console.log('QueryParams: ', queryParams);
  const { data, isLoading, isError, error } = useGetAllGRNs(queryParams);
  const allGRN = data ? data : null;
  const rowCountRef = React.useRef(allGRN?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allGRN?.allRecords !== undefined) {
      rowCountRef.current = allGRN.allRecords;
    }
    return rowCountRef.current;
  }, [allGRN]);
  console.log('All GRNs :', allGRN);
  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = async () => {
    const route =
      localStorage.getItem('department') === 'Inventory'
        ? inventoryRouteConstants.CREATE_GRN
        : PURCHASE_ROUTES.CREATE_GRN;
    await navigate(route);
  };
  const formik = useFormik({
    initialValues: grnInitValForFilter,
    onSubmit: (values) => handleFilterParamsChange(values),
  });
  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={2}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Goods Received Note" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Filter" icon={<Filter />} color="secondary" onClick={() => openDialogBox()} />
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="grns-col-def"
            columns={grnColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DialogBox title="Filter Panel" handleSubmit={formik.handleSubmit} handleReset={formik.handleReset}>
        <FormikProvider value={formik}>
          <GRNFilterPanel formikInstance={formik} />
        </FormikProvider>
        {/* <div>Filter Panel</div> */}
      </DialogBox>
      <DataGridTable<IGRN>
        loading={isLoading}
        rows={allGRN?.data || []}
        columns={grnColumns}
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
};
