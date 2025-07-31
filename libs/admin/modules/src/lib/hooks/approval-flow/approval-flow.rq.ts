/* eslint-disable @nx/enforce-module-boundaries */
import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { ApprovalFlowService, IApprovalFlow, IDocumentType, IEmployeeReplacementReq } from '@prime-fresh/admin_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateApprovalFlow(): UseMutationResult<ResultModel, ErrorModel, IApprovalFlow, unknown> {
  return useMutation<ResultModel, ErrorModel, IApprovalFlow, unknown>({
    mutationKey: ['create-approval-flow'],
    mutationFn: (data) => ApprovalFlowService.getInstance().createApprovalFlow(data),
  });
}

export function useUpdateApprovalFlow(id: string): UseMutationResult<ResultModel, ErrorModel, IApprovalFlow, unknown> {
  return useMutation<ResultModel, ErrorModel, IApprovalFlow, unknown>({
    mutationKey: ['update-approval-flow'],
    mutationFn: (data) => ApprovalFlowService.getInstance().updateApprovalFlow(id, data),
  });
}

export function useDeleteApprovalFlow(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['delete-approval-flow'],
    mutationFn: () => ApprovalFlowService.getInstance().deleteApprovalFlow(id),
  });
}

export function useGetAllApprovalFlows(
  documentType: IDocumentType | null,
  queryParams?: QueryParams
): UseQueryResult<ApiBaseState<IApprovalFlow[]>, ErrorModel> {
  return useQuery<ApiBaseState<IApprovalFlow[]>, ErrorModel>({
    queryKey: ['get-all-approval-flows',documentType, queryParams],
    queryFn: () => ApprovalFlowService.getInstance().getAllApprovalFlows(documentType, queryParams),
  });
}

export function useGetApprovalFlowById(id: string): UseQueryResult<ApiBaseState<IApprovalFlow>, ErrorModel> {
  const enable = id.length > 1 ? id : null;
  return useQuery<ApiBaseState<IApprovalFlow>, ErrorModel>({
    queryKey: ['get-approval-flow-by-id', id],
    queryFn: () => ApprovalFlowService.getInstance().getApprovalFlowById(id),
    enabled: !!enable,
  });
}

export function useReplaceEmployee(): UseMutationResult<ResultModel, ErrorModel, IEmployeeReplacementReq, unknown> {
  return useMutation<ResultModel, ErrorModel, IEmployeeReplacementReq, unknown>({
    mutationKey: ['replace-employee'],
    mutationFn: (data) => ApprovalFlowService.getInstance().replaceEmployee(data),
  });
}