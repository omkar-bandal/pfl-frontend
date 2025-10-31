import { useMemo, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Grid2 } from '@mui/material';
import { useApprovalFlowColumns } from './approval-flow.columns';
import { EmployeeReplacementForm } from './employee-replacement.form';
import { Add, FindReplace, Settings } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '@prime-fresh/modules';
import { IDocumentType } from '@prime-fresh/services';
import {
  adminRoutes,
  adminTableIds,
  approvalFlowStates,
  setShowReplaceForm,
  useGetAllApprovalFlows,
} from '@prime-fresh/admin/modules';
import {
  BtnSmall,
  ColumnVisibilityPanel,
  DataGridTable,
  PageTitle,
  useDataTableFunctions,
  useErrorHandler,
} from '@prime-fresh/shared/components';

export function ApprovalFlowTable() {
  const navigate = useNavigate();
  const { documentType } = useParams<{ documentType: IDocumentType }>();
  const docType = documentType ? documentType : null;
  const { showReplaceForm } = useAppSelector(approvalFlowStates);
  const dispatch = useAppDispatch();
  const approvalFlowColumns = useApprovalFlowColumns(docType || 'Procurement');

  const tableConfig = useDataTableFunctions({
    columnDef: approvalFlowColumns,
    initialPageSize: 10,
    tableId: adminTableIds.APPROVAL_FLOW_TABLE_ID,
  });

  const { data, isLoading, isError, error } = useGetAllApprovalFlows(docType, tableConfig.queryParams);
  const allApprovalFlows = data ? data : null;
  console.log('All Approval Flow: ', allApprovalFlows);
  const rowCountRef = useRef(allApprovalFlows?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (allApprovalFlows?.allRecords !== undefined) {
      rowCountRef.current = allApprovalFlows.allRecords;
    }
    return rowCountRef.current;
  }, [allApprovalFlows]);

  useErrorHandler(isError, error);

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
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={tableConfig.openColumnVisibilityPanel} />
          {/* <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} /> */}
          <ColumnVisibilityPanel
            popoverId="approval-flow-col-def"
            columns={approvalFlowColumns}
            columnVisibilityModel={tableConfig.columnVisibilityModel}
            displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
            closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
            onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
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
        paginationModel={tableConfig.paginationModel}
        onPaginationModelChange={tableConfig.handlePaginationChange}
        sortModel={tableConfig.sortModel}
        onSortModelChange={tableConfig.handleSortingChange}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
      />
    </Box>
  );
}
