import { ApprovalRequest } from '../models';
import { DocumentApprovalService, ErrorModel, ResultModel } from '@prime-fresh/services';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

//Document Approval Hooks
export const useUpdateDocStatusWithThreeApproval = (
  id: string
): UseMutationResult<ResultModel, ErrorModel, ApprovalRequest, unknown> => {
  return useMutation<ResultModel, ErrorModel, ApprovalRequest, unknown>({
    mutationKey: ['update-doc-status-with-three-approval', id],
    mutationFn: (data) => DocumentApprovalService.getInstance().updateDocStatusWithThreeApproval(id, data),
  });
};

export const useUpdateDocStatusWithTwoApproval = (
  id: string
): UseMutationResult<ResultModel, ErrorModel, ApprovalRequest, unknown> => {
  return useMutation<ResultModel, ErrorModel, ApprovalRequest, unknown>({
    mutationKey: ['update-doc-status-with-two-approval', id],
    mutationFn: (data) => DocumentApprovalService.getInstance().updateDocStatusWithTwoApproval(id, data),
  });
};

export const useUpdateDocStatusWithOneApproval = (
  id: string
): UseMutationResult<ResultModel, ErrorModel, ApprovalRequest, unknown> => {
  return useMutation<ResultModel, ErrorModel, ApprovalRequest, unknown>({
    mutationKey: ['update-doc-status-with-one-approval', id],
    mutationFn: (data) => DocumentApprovalService.getInstance().updateDocStatusWithOneApproval(id, data),
  });
};
