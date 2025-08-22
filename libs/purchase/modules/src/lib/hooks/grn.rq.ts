import { ApiBaseState, ApprovalRequest, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { GRNServices, IGRN } from '@prime-fresh/purchase_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export const useCreateGRN = ():
  UseMutationResult<ResultModel, ErrorModel, FormData, unknown> => {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['create-GRN'],
    mutationFn: (data) => GRNServices.getInstance().createGRN(data),
  });
};

export const useUpdateGRNById = (id: string):
  UseMutationResult<ResultModel, ErrorModel, FormData, unknown> => {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['update-GRN-by-id'],
    mutationFn: (data) => GRNServices.getInstance().updateGRN(id, data),
  });
};

export const useDeleteGRNById = (id: string):
  UseMutationResult<ResultModel, ErrorModel, unknown, unknown> => {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['delete-GRN-by-id'],
    mutationFn: () => GRNServices.getInstance().deleteGRNById(id),
  });
};

export const useGetAllGRNs = (queryParams?: QueryParams, search?: string | null):
  UseQueryResult<ApiBaseState<IGRN[]>, ErrorModel> => {
  return useQuery<ApiBaseState<IGRN[]>, ErrorModel>({
    queryKey: ['get-all-GRNs', queryParams, search],
    queryFn: () => GRNServices.getInstance().getAllGRNs(queryParams, search),
  });
};

export const useGetGRNForViewById = (id: string):
  UseQueryResult<ApiBaseState<IGRN>, ErrorModel> => {
  return useQuery<ApiBaseState<IGRN>, ErrorModel>({
    queryKey: ['get-GRN-for-view-by-id', id],
    queryFn: () => GRNServices.getInstance().getGRNForViewById(id),
    enabled: !!id,
  });
};

export const useGetGRNForUpdateById = (id: string):
  UseQueryResult<ApiBaseState<IGRN>, ErrorModel> => {
  return useQuery<ApiBaseState<IGRN>, ErrorModel>({
    queryKey: ['get-GRN-for-update-by-id', id],
    queryFn: () => GRNServices.getInstance().getGRNForUpdateById(id),
    enabled: !!id,
  });
};

export const useApproveGRN = (id: string):
  UseMutationResult<ResultModel, ErrorModel, ApprovalRequest, unknown> => {
  return useMutation<ResultModel, ErrorModel, ApprovalRequest, unknown>({
    mutationKey: ['approve-GRN', id],
    mutationFn: (data) => GRNServices.getInstance().approveGRN(id, data),
  });
};
