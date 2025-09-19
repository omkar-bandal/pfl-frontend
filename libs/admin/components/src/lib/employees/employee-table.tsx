import React, { useCallback, useMemo, useRef } from 'react';
import { Box, Grid2, useMediaQuery, useTheme } from '@mui/material';
import { useEmployeeColumns } from './employee.columns';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTES, useGetAllEmployees } from '@prime-fresh/admin/modules';
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
import { Add, Delete, DoneAll, Edit, KeyboardArrowDown, Preview, Settings } from '@mui/icons-material';
import { useDebounce } from '@prime-fresh/shared/modules';
import { useGridApiRef } from '@mui/x-data-grid';

export function EmployeeTable() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const apiRef = useGridApiRef();

  const navigate = useNavigate();
  const employeeColumns = useEmployeeColumns();
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
  } = useDataTable({ columnDef: employeeColumns, initialPageSize: 10 });

  const debouncedSearch = useDebounce(search, 1000);

  const { data, isLoading, isError, error } = useGetAllEmployees(queryParams, debouncedSearch);
  const allEmployees = data ? data : null;

  const rowCountRef = useRef(allEmployees?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (allEmployees?.allRecords !== undefined) {
      rowCountRef.current = allEmployees.allRecords;
    }
    return rowCountRef.current;
  }, [allEmployees]);

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = useCallback(() => navigate(ADMIN_ROUTES.CREATE_EMPLOYEE), [navigate]);

  const handleEdit = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a record to edit.');
    } else if (selectedRows.length > 1) {
      toast.info('Please select only one record to edit.');
    } else {
      const selectedId = selectedRows[0];
      navigate(`${ADMIN_ROUTES.EDIT_EMPLOYEE}/${selectedId}`);
    }
  }, [navigate, apiRef]);

  const handleView = useCallback(() => {
      const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
      if (selectedRows.length === 0) {
        toast.info('Please select a employee to view.');
      } else if (selectedRows.length > 1) {
        toast.info('Please select only one employee to view.');
      } else {
        const selectedId = selectedRows[0];
        navigate(`${ADMIN_ROUTES.VIEW_EMPLOYEE}/${selectedId}`);
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
        toolTipText: 'Edit selected UoM (select only one)',
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
        toolTipText: 'Delete selected UoMs (select multiple)',
      },
      {
        icon: <Add />,
        label: 'Add New',
        color: 'success',
        onClick: () => handleCreate(),
        toolTipText: 'Create new UoM',
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
          <PageTitle pagetitle="Employees" />
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
        popoverId="employees-col-def"
        columns={employeeColumns}
        columnVisibilityModel={columnVisibilityModel}
        displayColumnVisibilityModel={displayColumnVisibilityPanel}
        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
      />
      <DataGridTable
        apiRef={apiRef}
        checkboxSelection={enableCheckboxSelection}
        loading={isLoading}
        rows={allEmployees?.data || []}
        columns={employeeColumns}
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
