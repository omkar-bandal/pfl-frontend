import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Box, Grid2, useMediaQuery, useTheme } from '@mui/material';
import { Add, Delete, DoneAll, Edit, KeyboardArrowDown, Preview, Settings } from '@mui/icons-material';
import { ADMIN_ROUTES, useGetAllOffices } from '@prime-fresh/admin/modules';
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
import { useNavigate, useParams } from 'react-router-dom';
import { useOfficeColumns } from './office.columns';
import { useDebounce } from '@prime-fresh/shared/modules';
import { useGridApiRef } from '@mui/x-data-grid';

export function OfficeTable() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const apiRef = useGridApiRef();
  const navigate = useNavigate();
  const { officeType } = useParams<{ officeType: string }>();
  const type = officeType ? officeType : '';

  const OfficeTypeLabel = React.useMemo(
    () =>
      type
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    [type]
  );
  const officeColumns = useOfficeColumns();
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
  } = useDataTable({ columnDef: officeColumns, initialPageSize: 10 });

  const debouncedSearch = useDebounce(search, 1000);

  const { data, isLoading, isError, error } = useGetAllOffices(type, queryParams, debouncedSearch);
  const offices = data ? data : null;

  const rowCountRef = useRef(offices?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (offices?.allRecords !== undefined) {
      rowCountRef.current = offices.allRecords;
    }
    return rowCountRef.current;
  }, [offices]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => navigate(`${ADMIN_ROUTES.CREATE_OFFICE}/${type}`);

  const handleEdit = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a office to edit.');
    } else if (selectedRows.length > 1) {
      toast.info('Please select only one office to edit.');
    } else {
      const selectedId = selectedRows[0];
      navigate(`${ADMIN_ROUTES.EDIT_OFFICE}/${officeType}/${selectedId}`);
    }
  }, [navigate, apiRef, officeType]);

  const handleView = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a office to view.');
    } else if (selectedRows.length > 1) {
      toast.info('Please select only one office to view.');
    } else {
      const selectedId = selectedRows[0];
      navigate(`${ADMIN_ROUTES.VIEW_OFFICE}/${officeType}/${selectedId}`);
    }
  }, [navigate, apiRef, officeType]);

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
        toolTipText: 'Edit selected office (select only one)',
      },
      {
        icon: <Preview />,
        label: 'View',
        color: 'warning',
        onClick: () => handleView(),
        toolTipText: 'View selected office (select only one)',
      },
      {
        icon: <Delete />,
        label: 'Delete',
        color: 'error',
        onClick: () => handleDelete(),
        toolTipText: 'Delete selected offices (select multiple)',
      },
      {
        icon: <Add />,
        label: 'Add New',
        color: 'success',
        onClick: () => handleCreate(),
        toolTipText: 'Create new office',
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
          <PageTitle pagetitle={OfficeTypeLabel} />
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
        popoverId="office-col-def"
        columns={officeColumns}
        columnVisibilityModel={columnVisibilityModel}
        displayColumnVisibilityModel={displayColumnVisibilityPanel}
        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
      />
      <DataGridTable
        apiRef={apiRef}
        checkboxSelection={enableCheckboxSelection}
        loading={isLoading}
        rows={offices?.data || []}
        columns={officeColumns}
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
