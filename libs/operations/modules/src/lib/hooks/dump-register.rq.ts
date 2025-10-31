import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';
import {
  DumpRegisterServices,
  IDumpRegister,
  ApiBaseState,
  ErrorModel,
  QueryParams,
  ResultModel,
} from '@prime-fresh/services';

export function useCreateDumpRegister(): UseMutationResult<ResultModel, ErrorModel, IDumpRegister, unknown> {
  return useMutation<ResultModel, ErrorModel, IDumpRegister, unknown>({
    mutationKey: ['create-dump-register'],
    mutationFn: (data) => DumpRegisterServices.getInstance().createDumpRegister(data),
  });
}

export function useUpdateDumpRegister(id: string): UseMutationResult<ResultModel, ErrorModel, IDumpRegister, unknown> {
  return useMutation<ResultModel, ErrorModel, IDumpRegister, unknown>({
    mutationKey: ['update-dump-register'],
    mutationFn: (data) => DumpRegisterServices.getInstance().updateDumpRegister(id, data),
  });
}

export function useDeleteDumpRegisterById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['delete-dump-register-by-id'],
    mutationFn: () => DumpRegisterServices.getInstance().deleteDumpRegisterById(id),
  });
}

export function useGetAllDumpRegisters(
  queryParams?: QueryParams,
  search?: string | null
): UseQueryResult<ApiBaseState<IDumpRegister[]>, ErrorModel> {
  return useQuery<ApiBaseState<IDumpRegister[]>, ErrorModel>({
    queryKey: ['get-all-dump-registers', queryParams, search],
    queryFn: () => DumpRegisterServices.getInstance().getAllDumpRegisters(queryParams, search),
  });
}

export function useGetDumpRegisterForViewById(id: string): UseQueryResult<ApiBaseState<IDumpRegister>, ErrorModel> {
  const enable = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<IDumpRegister>, ErrorModel>({
    queryKey: ['get-dump-register-for-view-by-id', enable],
    queryFn: () => DumpRegisterServices.getInstance().getDumpRegisterForViewById(id),
    enabled: enable,
  });
}

export function useGetDumpRegisterForUpdateById(id: string): UseQueryResult<ApiBaseState<IDumpRegister>, ErrorModel> {
  const enable = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<IDumpRegister>, ErrorModel>({
    queryKey: ['get-dump-register-for-update-by-id', enable],
    queryFn: () => DumpRegisterServices.getInstance().getDumpRegisterForUpdateById(id),
    enabled: enable,
  });
}
