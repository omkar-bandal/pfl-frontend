import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';
import {
  InwardRegisterServices,
  IInwardRegister,
  ApiBaseState,
  ErrorModel,
  QueryParams,
  ResultModel,
} from '@prime-fresh/services';

export function useCreateInwardRegister(): UseMutationResult<ResultModel, ErrorModel, IInwardRegister, unknown> {
  return useMutation<ResultModel, ErrorModel, IInwardRegister, unknown>({
    mutationKey: ['create-inward-register'],
    mutationFn: (data) => InwardRegisterServices.getInstance().createInwardRegister(data),
  });
}

export function useUpdateInwardRegister(
  id: string
): UseMutationResult<ResultModel, ErrorModel, IInwardRegister, unknown> {
  return useMutation<ResultModel, ErrorModel, IInwardRegister, unknown>({
    mutationKey: ['update-inward-register'],
    mutationFn: (data) => InwardRegisterServices.getInstance().updateInwardRegister(id, data),
  });
}

export function useDeleteInwardRegisterById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['delete-inward-register-by-id'],
    mutationFn: () => InwardRegisterServices.getInstance().deleteInwardRegisterById(id),
  });
}

export function useGetAllInwardRegisters(
  queryParams?: QueryParams,
  search?: string | null
): UseQueryResult<ApiBaseState<IInwardRegister[]>, ErrorModel> {
  return useQuery<ApiBaseState<IInwardRegister[]>, ErrorModel>({
    queryKey: ['get-all-inward-registers', queryParams, search],
    queryFn: () => InwardRegisterServices.getInstance().getAllInwardRegisters(queryParams, search),
  });
}

export function useGetInwardRegisterForViewById(id: string): UseQueryResult<ApiBaseState<IInwardRegister>, ErrorModel> {
  const enabled = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<IInwardRegister>, ErrorModel>({
    queryKey: ['get-inward-register-for-view-by-id', enabled],
    queryFn: () => InwardRegisterServices.getInstance().getInwardRegisterForViewById(id),
    enabled: !!id,
  });
}

export function useGetInwardRegisterForUpdateById(
  id: string
): UseQueryResult<ApiBaseState<IInwardRegister>, ErrorModel> {
  const enabled = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<IInwardRegister>, ErrorModel>({
    queryKey: ['get-inward-register-for-update-by-id', enabled],
    queryFn: () => InwardRegisterServices.getInstance().getInwardRegisterForUpdateById(id),
    enabled: !!id,
  });
}
