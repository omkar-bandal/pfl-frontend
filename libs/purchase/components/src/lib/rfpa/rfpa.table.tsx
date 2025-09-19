/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useMemo } from 'react';
import { Box, DialogContentText } from '@mui/material';
import { IRFPA } from '@prime-fresh/purchase_api';
import { PURCHASE_ROUTES, useDeleteMultipleRFPA, useGetAllRFPAs } from '@prime-fresh/purchase/modules';
import { usePermission } from '@prime-fresh/modules';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { Add, Delete, DoneAll, Edit, Settings, Visibility } from '@mui/icons-material';
import {
  ColumnVisibilityPanel,
  DataGridTable,
  DialogContainer,
  TableButtonConfig,
  TableHeader,
  TableNavActionsConfig,
  toast,
  useDataTableFunctions,
  useErrorHandler,
  useTableActions,
  useTableUI,
} from '@prime-fresh/ui_shared';
import { rfpaColumns } from './rfpa.columns';
import { useGridApiRef } from '@mui/x-data-grid';

export const RFPATable = () => {
  const TABLE_ID = 'rfpa-table';
  const apiRef = useGridApiRef();
  const { canEdit, canView, canDelete } = usePermission('rfpa');
  const { isMobile } = useTableUI();
  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: TABLE_ID,
    createPath: PURCHASE_ROUTES.CREATE_RFPA,
    editPath: PURCHASE_ROUTES.UPDATE_RFPA,
    viewPath: PURCHASE_ROUTES.VIEW_RFPA,
  };
  const { handleCreate, handleEdit, handleView, handleDelete } = useTableActions(apiRef, tableNavActionConfig);
  const tableConfig = useDataTableFunctions({ columnDef: rfpaColumns, initialPageSize: 10, tableId: TABLE_ID });

  const buttonConfig: TableButtonConfig[] = useMemo(
    () => [
      {
        icon: <DoneAll />,
        label: 'Select',
        color: 'secondary',
        onClick: tableConfig.handleToggleCheckboxSelection,
        toolTipText: toolTipText.SELECT_BTN,
        visible: true,
      },
      {
        icon: <Edit />,
        label: 'Edit',
        color: 'info',
        onClick: handleEdit,
        toolTipText: toolTipText.EDIT_BTN,
        visible: canEdit,
      },
      {
        icon: <Visibility />,
        label: 'View',
        color: 'warning',
        onClick: handleView,
        toolTipText: toolTipText.VIEW_BTN,
        visible: canView,
      },
      {
        icon: <Delete />,
        label: 'Delete',
        color: 'error',
        onClick: handleDelete,
        toolTipText: toolTipText.DELETE_BTN,
        visible: canDelete,
      },
      {
        icon: <Add />,
        label: 'Add New',
        color: 'success',
        onClick: handleCreate,
        toolTipText: toolTipText.ADD_NEW_BTN,
        visible: true,
      },
      {
        icon: <Settings />,
        label: 'Column',
        color: 'primary',
        onClick: tableConfig.openColumnVisibilityPanel,
        toolTipText: toolTipText.COLUMN_BTN,
        visible: true,
      },
    ],
    []
  );

  const debouncedSearch = useDebounce(tableConfig.search, 1000);

  const { data, isLoading, error, isError, refetch } = useGetAllRFPAs(tableConfig.queryParams, debouncedSearch);
  const allRFPAs = data ? data : null;
  useErrorHandler(isError, error);

  const rowCountRef = React.useRef(allRFPAs?.allRecords || 0);

  const rowCount = React.useMemo(() => {
    if (allRFPAs?.allRecords !== undefined) {
      rowCountRef.current = allRFPAs.allRecords;
    }
    return rowCountRef.current;
  }, [allRFPAs]);

  const { mutateAsync, error: deleteError, data: deleteRes } = useDeleteMultipleRFPA();

  const handleSelectedDelete = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    mutateAsync(selectedRows as Array<string>)
      .then(() => {
        toast.success(deleteRes ? deleteRes.message : 'RFPA deleted');
        refetch();
      })
      .catch(() => {
        toast.error(deleteError ? deleteError.message : 'Error while deleting RFPA');
      });
  }, [apiRef, mutateAsync]);

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={TABLE_ID}
        isMobile={isMobile}
        pageTitle="Request For Purchase Approval"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="rfpas-col-def"
        columns={rfpaColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<IRFPA>
        apiRef={apiRef}
        loading={isLoading}
        rows={allRFPAs?.data || []}
        columns={rfpaColumns}
        mode="server"
        initialPageSize={10}
        totalRows={rowCount}
        paginationModel={tableConfig.paginationModel}
        onPaginationModelChange={tableConfig.handlePaginationChange}
        sortModel={tableConfig.sortModel}
        onSortModelChange={tableConfig.handleSortingChange}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        checkboxSelection={tableConfig.enableCheckboxSelection}
      />
      <DialogContainer
        dialogKey={TABLE_ID}
        dialogTitle="Delete RFPA"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleDelete}
      />
    </Box>
  );
};

// export const RFPATable = () => {
//   const apiRef = useGridApiRef();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();
//   const { openDialog } = useActions();
//   const { canEdit, canView } = usePermission('rfpa');
//   const rfpaColumns = useRFPAColumns(canEdit, canView);
//   const {
//     actionMenu,
//     openActionMenu,
//     handleOpenActionMenu,
//     handleCloseActionMenu,
//     enableCheckboxSelection,
//     handleEnableCheckboxSelection,
//     queryParams,
//     paginationModel,
//     handlePaginationChange,
//     sortModel,
//     handleSortingChange,
//     search,
//     setSearch,
//     columnVisibilityModel,
//     handleColumnVisibilityModelChange,
//     displayColumnVisibilityPanel,
//     handleOpenColumnVisibilityPanel,
//     handleCloseColumnVisibilityPanel,
//   } = useDataTable({ columnDef: rfpaColumns, initialPageSize: 10 });

//   const debouncedSearch = useDebounce(search, 1000);

//   const { data, isLoading, error, isError } = useGetAllRFPAs(queryParams, debouncedSearch);
//   const allRFPAs = data ? data : null;

//   const rowCountRef = React.useRef(allRFPAs?.allRecords || 0);

//   const rowCount = React.useMemo(() => {
//     if (allRFPAs?.allRecords !== undefined) {
//       rowCountRef.current = allRFPAs.allRecords;
//     }
//     return rowCountRef.current;
//   }, [allRFPAs]);

//   React.useEffect(() => {
//     if (isError) {
//       toast.error(error?.message || 'Error occured please refresh the page.');
//     }
//   }, [isError, error]);

//   const handleCreate = useCallback(() => {
//     dispatch(setPreview(false));
//     navigate(PURCHASE_ROUTES.CREATE_RFPA);
//   }, [dispatch, setPreview, navigate]);

//   const handleEdit = useCallback(() => {
//     const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
//     if (selectedRows.length === 0) {
//       toast.info('Please select a RFPA to edit.');
//     } else if (selectedRows.length > 1) {
//       toast.info('Please select only one RFPA to edit.');
//     } else {
//       const selectedId = selectedRows[0];
//       navigate(`${PURCHASE_ROUTES.UPDATE_RFPA}/${selectedId}`);
//     }
//   }, [navigate, apiRef]);

//   const { mutateAsync, error: deleteError, data: deleteRes } = useDeleteMultipleRFPA();

//   const onDelete = () => {
//     openDialog({ key: 'rfpa-table' });
//   };
//   const handleDelete = useCallback(() => {
//     const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
//     if (selectedRows.length === 0) {
//       toast.info('Please select a RFPA to edit.');
//     } else if (selectedRows.length > 0) {
//       mutateAsync(selectedRows as Array<string>)
//         .then(() => {
//           toast.success(deleteRes ? deleteRes.message : 'RFPA deleted');
//           setTimeout(() => {
//             navigate(PURCHASE_ROUTES.GET_ALL_RFPA);
//           }, 2000);
//         })
//         .catch(() => {
//           toast.error(deleteError ? deleteError.message : 'Error while deleting RFPA');
//         });
//     } else {
//       toast.info('Please select RFPA to delete.');
//     }
//   }, [apiRef, mutateAsync, navigate, toast]);

//   const buttonConfig: ButtonConfigType[] = useMemo(
//     () => [
//       {
//         icon: <DoneAll />,
//         label: 'Select',
//         color: 'secondary',
//         onClick: handleEnableCheckboxSelection,
//         toolTipText: 'Enable or disable row selection',
//       },
//       {
//         icon: <Edit />,
//         label: 'Edit',
//         color: 'info',
//         onClick: () => handleEdit(),
//         toolTipText: 'Edit selected UoM (select only one)',
//       },
//       {
//         icon: <Delete />,
//         label: 'Delete',
//         color: 'error',
//         onClick: () => onDelete(),
//         toolTipText: 'Delete selected UoMs (select multiple)',
//       },
//       {
//         icon: <Add />,
//         label: 'Add New',
//         color: 'success',
//         onClick: () => handleCreate(),
//         toolTipText: 'Create new UoM',
//       },
//       {
//         icon: <Settings />,
//         label: 'Column',
//         color: 'primary',
//         onClick: handleOpenColumnVisibilityPanel,
//         disabled: false,
//       },
//     ],
//     []
//   );

//   return (
//     <Box sx={{ flex: 1 }}>
//       <Grid2 container spacing={2} marginY={2} paddingX={1}>
//         <Grid2 size={{ xs: 8, md: 6 }}>
//           <PageTitle pagetitle="Request For Purchase Approval" />
//         </Grid2>
//         {isMobile && (
//           <Grid2 size={{ xs: 4 }}>
//             <BtnSmall label="Actions" color="info" icon={<KeyboardArrowDown />} onClick={handleOpenActionMenu} />
//             <ActionMenu
//               menuConfig={buttonConfig}
//               anchorEl={actionMenu}
//               open={openActionMenu}
//               onClose={handleCloseActionMenu}
//             />
//           </Grid2>
//         )}
//         <Grid2 size={{ xs: 12, md: 6 }}>
//           <SearchBox name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
//         </Grid2>
//         {!isMobile && (
//           <Grid2
//             size={{ xs: 12, md: 12 }}
//             sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start', alignItems: 'center' }}
//           >
//             {buttonConfig.map((button, index) => (
//               <BtnSmall
//                 key={index}
//                 label={button.label}
//                 icon={button.icon}
//                 color={button.color as any}
//                 onClick={button.onClick}
//                 toolTipText={button.toolTipText}
//                 sx={{ marginRight: 2 }}
//               />
//             ))}
//           </Grid2>
//         )}
//       </Grid2>
//       <ColumnVisibilityPanel
//         popoverId="rfpas-col-def"
//         columns={rfpaColumns}
//         columnVisibilityModel={columnVisibilityModel}
//         displayColumnVisibilityModel={displayColumnVisibilityPanel}
//         closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
//         onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
//       />
//       <DataGridTable<IRFPA>
//         apiRef={apiRef}
//         loading={isLoading}
//         rows={allRFPAs?.data || []}
//         columns={rfpaColumns}
//         mode="server"
//         initialPageSize={10}
//         totalRows={rowCount}
//         paginationModel={paginationModel}
//         onPaginationModelChange={handlePaginationChange}
//         sortModel={sortModel}
//         onSortModelChange={handleSortingChange}
//         columnVisibilityModel={columnVisibilityModel}
//         checkboxSelection={enableCheckboxSelection}
//       />
//       <DialogContainer
//         dialogKey="rfpa-table"
//         dialogTitle="Delete RFPA"
//         dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
//         dialogActionLabel="Delete"
//         dialogActionBtnColor="error"
//         dialogActionFn={handleDelete}
//       />
//     </Box>
//   );
// };
