import { Box, Grid2 } from '@mui/material';
import {
  adminRoutes,
  approvalFlowStates,
  setShowReplaceForm,
  useGetAllApprovalFlows,
} from '@prime-fresh/admin/modules';
import { BtnSmall, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from '@prime-fresh/ui_shared';
import { useEffect, useMemo, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApprovalFlowColumns } from './approval-flow.columns';
import { EmployeeReplacementForm } from './employee-replacement.form';
import { Add, FindReplace, Settings } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '@prime-fresh/modules';
import { IDocumentType } from '@prime-fresh/admin_api';

export function ApprovalFlowTable() {
  const navigate = useNavigate();
  const { documentType } = useParams<{ documentType: IDocumentType }>();
  const docType = documentType ? documentType : null;
  const { showReplaceForm } = useAppSelector(approvalFlowStates);
  const dispatch = useAppDispatch();
  const approvalFlowColumns = useApprovalFlowColumns();
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
  } = useDataTable({ columnDef: approvalFlowColumns, initialPageSize: 10 });

  const { data, isLoading, isError, error } = useGetAllApprovalFlows(docType, queryParams);
  const allApprovalFlows = data ? data : null;
  console.log('All Approval Flow: ', allApprovalFlows);
  const rowCountRef = useRef(allApprovalFlows?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (allApprovalFlows?.allRecords !== undefined) {
      rowCountRef.current = allApprovalFlows.allRecords;
    }
    return rowCountRef.current;
  }, [allApprovalFlows]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => {
    navigate(`${adminRoutes.CREATE_APPROVAL_FLOW}/${docType}`);
  };

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <PageTitle pagetitle={`${docType} Approval Flows`} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          {/* <AddNewButton handleClick={handleCreate} /> */}
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall
            label="Replace"
            icon={<FindReplace />}
            color="warning"
            onClick={() => dispatch(setShowReplaceForm())}
          />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          {/* <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} /> */}
          <ColumnVisibilityPanel
            popoverId="approval-flow-col-def"
            columns={approvalFlowColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      {showReplaceForm ? <EmployeeReplacementForm docType={docType ? docType : 'Procurement'} /> : null}
      <DataGridTable
        loading={isLoading}
        rows={allApprovalFlows?.data || []}
        columns={approvalFlowColumns}
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
