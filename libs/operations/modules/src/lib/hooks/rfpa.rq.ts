import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';
import {
  RFPAServices,
  GetAllRFPAnumbers,
  IRFPA,
  ApiBaseState,
  ErrorModel,
  QueryParams,
  ResultModel,
} from '@prime-fresh/services';

export function useCreateRFPA(): UseMutationResult<ResultModel, ErrorModel, IRFPA, unknown> {
  return useMutation<ResultModel, ErrorModel, IRFPA, unknown>({
    mutationKey: ['create-rfpa'],
    mutationFn: (data) => RFPAServices.getInstance().createRFPA(data),
  });
}

export function useUpdateRFPAById(id: string): UseMutationResult<ResultModel, ErrorModel, IRFPA, unknown> {
  return useMutation<ResultModel, ErrorModel, IRFPA, unknown>({
    mutationKey: ['update-rfpa'],
    mutationFn: (data) => RFPAServices.getInstance().updateRFPA(id, data),
  });
}

export function useDeleteRFPAById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['delete-rfpa-by-id'],
    mutationFn: () => RFPAServices.getInstance().deleteRFPAById(id),
  });
}

export function useDeleteMultipleRFPA(): UseMutationResult<ResultModel, ErrorModel, Array<string>, unknown> {
  return useMutation<ResultModel, ErrorModel, Array<string>, unknown>({
    mutationKey: ['delete-rfpa-by-id'],
    mutationFn: (data: Array<string>) => RFPAServices.getInstance().deleteMultipleRFPAs(data),
  });
}

export function useGetAllRFPAs(
  queryParams?: QueryParams,
  search?: string | null
): UseQueryResult<ApiBaseState<IRFPA[]>, ErrorModel> {
  return useQuery<ApiBaseState<IRFPA[]>, ErrorModel>({
    queryKey: ['get-all-rfpas', queryParams, search],
    queryFn: () => RFPAServices.getInstance().getAllRFPAs(queryParams, search),
  });
}

export function useGetRFPAForViewById(id: string): UseQueryResult<ApiBaseState<IRFPA>, ErrorModel> {
  const enabled = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<IRFPA>, ErrorModel>({
    queryKey: ['get-rfpa-for-view-by-id', id],
    queryFn: () => RFPAServices.getInstance().getRFPAForViewById(id),
    enabled: enabled,
  });
}

export function useGetRFPAForUpdateById(id: string): UseQueryResult<ApiBaseState<IRFPA>, ErrorModel> {
  const enabled = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<IRFPA>, ErrorModel>({
    queryKey: ['get-rfpa-for-update-by-id', id],
    queryFn: () => RFPAServices.getInstance().getRFPAForUpdateById(id),
    enabled: enabled,
  });
}

export function useGetAllRFPANums(): UseQueryResult<ApiBaseState<GetAllRFPAnumbers[]>, ErrorModel> {
  return useQuery<ApiBaseState<GetAllRFPAnumbers[]>, ErrorModel>({
    queryKey: ['get-rfpa-nums'],
    queryFn: () => RFPAServices.getInstance().getRFPANums(),
  });
}
