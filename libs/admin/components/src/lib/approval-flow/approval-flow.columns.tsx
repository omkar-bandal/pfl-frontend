import { CustomGridColDef } from '@prime-fresh/ui_shared';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { IApprovalFlow } from '@prime-fresh/admin_api';
import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { adminRoutes } from '@prime-fresh/admin/modules';
import { convertInTitleCase } from '@prime-fresh/shared/modules';

export const useApprovalFlowColumns = (): CustomGridColDef[] => {
  const navigate = useNavigate();

  return useMemo(
    () => [
      {
        field: 'creator',
        headerName: 'Creator',
        minWidth: 120,
        flex: 1,
        headerAlign: 'center',
        isMobileVisible: true,
      },
      {
        field: 'verifiers',
        headerName: 'Verifiers',
        minWidth: 250,
        flex: 1,
        headerAlign: 'center',
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams<IApprovalFlow>) =>
          convertInTitleCase((params.row.verifiers || []).join(', ')),
      },
      {
        field: 'firstApproverUsers',
        headerName: 'First Approver(s)',
        minWidth: 250,
        flex: 1,
        headerAlign: 'center',
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams<IApprovalFlow>) =>
          convertInTitleCase((params.row.approvers?.firstApprover?.users || []).join(', ')),
      },
      {
        field: 'firstApproverRange',
        headerName: 'Approval Range',
        minWidth: 220,
        flex: 1,
        headerAlign: 'center',
        renderCell: (params: GridRenderCellParams<IApprovalFlow>) => {
          const approver = params.row.approvers?.firstApprover;
          return approver?.minAmtCanApprove || approver?.maxAmtCanApprove
            ? `From Rs.${approver.minAmtCanApprove || 0} To Rs.${approver.maxAmtCanApprove || 0}`
            : '';
        },
      },
      {
        field: 'secondApproverUsers',
        headerName: 'Second Approver(s)',
        minWidth: 250,
        flex: 1,
        headerAlign: 'center',
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams<IApprovalFlow>) =>
          (params.row.approvers?.secondApprover?.users || []).join(', '),
      },
      {
        field: 'secondApproverRange',
        headerName: 'Approval Range',
        minWidth: 220,
        flex: 1,
        headerAlign: 'center',
        renderCell: (params: GridRenderCellParams<IApprovalFlow>) => {
          const approver = params.row.approvers?.secondApprover;
          return approver?.minAmtCanApprove || approver?.maxAmtCanApprove
            ? `From Rs.${approver.minAmtCanApprove || 0} To Rs.${approver.maxAmtCanApprove || 0}`
            : '';
        },
      },
      {
        field: 'thirdApproverUsers',
        headerName: 'Third Approver(s)',
        minWidth: 250,
        flex: 1,
        headerAlign: 'center',
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams<IApprovalFlow>) =>
          (params.row.approvers?.thirdApprover?.users || []).join(', '),
      },
      {
        field: 'thirdApproverRange',
        headerName: 'Approval Range',
        minWidth: 220,
        flex: 1,
        headerAlign: 'center',
        renderCell: (params: GridRenderCellParams<IApprovalFlow>) => {
          const approver = params.row.approvers?.thirdApprover;
          return approver?.minAmtCanApprove || approver?.maxAmtCanApprove
            ? `From Rs.${approver.minAmtCanApprove || 0} To Rs.${approver.maxAmtCanApprove || 0}`
            : '';
        },
      },
      {
        field: 'fourthApproverUsers',
        headerName: 'Fourth Approver(s)',
        minWidth: 250,
        flex: 1,
        headerAlign: 'center',
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams<IApprovalFlow>) =>
          (params.row.approvers?.fourthApprover?.users || []).join(', '),
      },
      {
        field: 'fourthApproverRange',
        headerName: 'Approval Range',
        minWidth: 220,
        flex: 1,
        headerAlign: 'center',
        renderCell: (params: GridRenderCellParams<IApprovalFlow>) => {
          const approver = params.row.approvers?.fourthApprover;
          return approver?.minAmtCanApprove || approver?.maxAmtCanApprove
            ? `From Rs.${approver.minAmtCanApprove || 0} To Rs.${approver.maxAmtCanApprove || 0}`
            : '';
        },
      },
      {
        field: 'fifthApproverUsers',
        headerName: 'Fifth Approver(s)',
        minWidth: 250,
        flex: 1,
        headerAlign: 'center',
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams<IApprovalFlow>) =>
          (params.row.approvers?.fifthApprover?.users || []).join(', '),
      },
      {
        field: 'fifthApproverRange',
        headerName: 'Approval Range',
        minWidth: 220,
        flex: 1,
        headerAlign: 'center',
        renderCell: (params: GridRenderCellParams<IApprovalFlow>) => {
          const approver = params.row.approvers?.fifthApprover;
          return approver?.minAmtCanApprove || approver?.maxAmtCanApprove
            ? `From Rs.${approver.minAmtCanApprove || 0} To Rs.${approver.maxAmtCanApprove || 0}`
            : '';
        },
      },
      {
        field: 'firstFinalizerUsers',
        headerName: 'First Finalizer (s)',
        minWidth: 200,
        flex: 1,
        headerAlign: 'center',
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams<IApprovalFlow>) =>
          convertInTitleCase((params.row.finalizers.firstFinalizers || []).join(', ')),
      },
      {
        field: 'secondFinalizerUsers',
        headerName: 'Second Finalizer (s)',
        minWidth: 200,
        flex: 1,
        headerAlign: 'center',
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams<IApprovalFlow>) =>
          convertInTitleCase((params.row.finalizers.secondFinalizers || []).join(', ')),
      },
      {
        field: 'edit',
        headerName: 'Edit',
        headerAlign: 'center',
        align: 'center',
        minWidth: 70,
        flex: 1,
        isMobileVisible: true,
        hideable: false,
        sortable: false,
        filterable: false,
        disableExport: true,
        disableColumnMenu: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton
            aria-label="edit"
            onClick={() => navigate(`${adminRoutes.UPDATE_APPROVAL_FLOW}/${params.row.type}/${params.row.id}`)}
          >
            <Edit color="info" />
          </IconButton>
        ),
      },
    ],
    [navigate]
  );
};
