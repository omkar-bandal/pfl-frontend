import { FarmersService, IFarmer, queryClient, StatusType } from '@prime-fresh/services';
import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/services';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateFarmer(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['create-farmer'],
    mutationFn: (data) => FarmersService.getInstance().createFarmer(data),
  });
}

export function useUpdateFarmerById(id: string): UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['update-farmer-by-id'],
    mutationFn: (data) => FarmersService.getInstance().updateFarmer(id, data),
  });
}

export function useDeleteFarmerById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['delete-farmer-by-id'],
    mutationFn: () => FarmersService.getInstance().deleteFarmerById(id),
  });
}

export function useGetAllFarmers(
  queryParams?: QueryParams,
  search?: string | null
): UseQueryResult<ApiBaseState<IFarmer[]>, ErrorModel> {
  return useQuery<ApiBaseState<IFarmer[]>, ErrorModel>({
    queryKey: ['farmer-get-all', queryParams, search],
    queryFn: () => FarmersService.getInstance().getAllFarmers(queryParams, search),
  });
}

export function useGetFarmerByIdForUpdate(id: string): UseQueryResult<ApiBaseState<IFarmer>, ErrorModel> {
  const enabled = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<IFarmer>, ErrorModel>({
    queryKey: ['farmer-get-by-id-for-update'],
    queryFn: () => FarmersService.getInstance().getFarmerByIdForUpdate(id),
    enabled: enabled,
  });
}

export function useGetFarmerByIdForView(id: string): UseQueryResult<ApiBaseState<IFarmer>, ErrorModel> {
  const enabled = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<IFarmer>, ErrorModel>({
    queryKey: ['farmer-get-by-id-for-view'],
    queryFn: () => FarmersService.getInstance().getFarmerByIdForView(id),
    enabled: enabled,
  });
}

export function useChangeStatusFarmer(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['change-farmer-status'],
    mutationFn: (status: StatusType) => FarmersService.getInstance().changeStatusOfFarmer(id, status),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['farmer'] }),
  });
}
