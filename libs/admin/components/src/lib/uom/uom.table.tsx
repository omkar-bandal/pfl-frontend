import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Box, Grid2, useMediaQuery, useTheme } from '@mui/material';
import { useUOMColumns } from './uom.columns';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTES, useGetAllUOMs } from '@prime-fresh/admin/modules';
import { useDebounce } from '@prime-fresh/shared/modules';
import { GetUOM } from '@prime-fresh/admin_api';
import {
  Add,
  Delete,
  DoneAll,
  Edit,
  KeyboardArrowDown,
  Settings,
} from '@mui/icons-material';
import {
  ActionMenu,
  BtnSmall,
  ColumnVisibilityPanel,
  DataGridTable,
  IconButtonConfig,
  PageTitle,
  SearchBox,
  toast,
  useDataTable,
} from '@prime-fresh/ui_shared';
import { useGridApiRef } from '@mui/x-data-grid';

export const UOMTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const apiRef = useGridApiRef()
  const navigate = useNavigate();
  const uomColumns = useUOMColumns();
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
  } = useDataTable({ columnDef: uomColumns, initialPageSize: 10 });

  const debouncedSearch = useDebounce(search, 1000);

  const { data, isLoading, isError, error } = useGetAllUOMs(queryParams, debouncedSearch);
  const UOMs = data ? data : null;

  const rowCountRef = useRef(UOMs?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (UOMs?.allRecords !== undefined) {
      rowCountRef.current = UOMs.allRecords;
    }
    return rowCountRef.current;
  }, [UOMs]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = useCallback(() => navigate(ADMIN_ROUTES.CREATE_UOM), [navigate]);

  const handleEdit = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a UoM to edit.');
    } else if (selectedRows.length > 1) {
      toast.info('Please select only one UoM to edit.');
    } else {
      const selectedId = selectedRows[0];
      navigate(`${ADMIN_ROUTES.UPDATE_UOM}/${selectedId}`);
    }
  }, [navigate, apiRef]);

  const handleDelete = () => {};

  const buttonConfig: IconButtonConfig[] = useMemo(() => ([
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
      toolTipText: 'Edit selected UoM (select only one)',
    },
    {
      icon: <Delete />,
      label: 'Delete',
      color: 'error',
      onClick: () => handleDelete(),
      toolTipText: 'Delete selected UoMs (select multiple)',
    },
    { icon: <Add />, label: 'Add New', color: 'success', onClick: () => handleCreate(), toolTipText: 'Create new UoM' },
    {
      icon: <Settings />,
      label: 'Column',
      color: 'primary',
      onClick: handleOpenColumnVisibilityPanel,
      disabled: false,
    },
  ]), []);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container spacing={2} marginY={1}>
        <Grid2 size={{ xs: isMobile ? 8 : 12, md: 6 }}>
          <PageTitle pagetitle="Unit of Measures" />
        </Grid2>
        {isMobile && (
          <Grid2 size={{ xs: 4 }}>
            <BtnSmall label="Actions" color="info" icon={<KeyboardArrowDown />} onClick={handleOpenActionMenu} />
            <ActionMenu menuConfig={buttonConfig} anchorEl={actionMenu} open={openActionMenu} onClose={handleCloseActionMenu}/>
          </Grid2>
        )}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <SearchBox name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        </Grid2>
        {!isMobile && <Grid2
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
        </Grid2>}
      </Grid2>
      <ColumnVisibilityPanel
        popoverId="uom-col-def"
        columns={uomColumns}
        columnVisibilityModel={columnVisibilityModel}
        displayColumnVisibilityModel={displayColumnVisibilityPanel}
        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
      />
      <DataGridTable<GetUOM>
        apiRef={apiRef}
        loading={isLoading}
        rows={UOMs?.data || []}
        columns={uomColumns}
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
};
