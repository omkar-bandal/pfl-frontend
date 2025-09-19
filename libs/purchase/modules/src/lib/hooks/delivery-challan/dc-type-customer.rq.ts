import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { DCTypeCustomerServices, IDeliveryChallanTypeCustomer } from '@prime-fresh/purchase_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export const useCreateDCTypeCustomer = (): UseMutationResult<ResultModel, ErrorModel, FormData, unknown> => {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['create-dc-type-customer'],
    mutationFn: (data) => DCTypeCustomerServices.getInstance().createDCTypeCustomer(data),
  });
}

export const useUpdateDCTypeCustomerById = (id: string): UseMutationResult<ResultModel, ErrorModel, FormData, unknown> => {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['update-dc-type-customer-by-id'],
    mutationFn: (data) => DCTypeCustomerServices.getInstance().updateDCTypeCustomer(id, data),
  });
}

export const useDeleteDCTypeCustomerById = (id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown> => {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['delete-dc-type-customer-by-id'],
    mutationFn: () => DCTypeCustomerServices.getInstance().deleteDCTypeCustomerById(id),
  });
}

export function useDeleteMultipleDCTypeCustomers():
    UseMutationResult<ResultModel, ErrorModel, Array<string>, unknown> {
    return useMutation<ResultModel, ErrorModel, Array<string>, unknown>({
        mutationKey: ['delete-multiple-dc-type-customers'],
        mutationFn: (data: Array<string>) => DCTypeCustomerServices.getInstance().deleteMultipleDCTypeCustomers(data),
    });
}

export const useGetAllDCTypeCustomers = (
  queryParams?: QueryParams,
  search?: string | null
): UseQueryResult<ApiBaseState<IDeliveryChallanTypeCustomer[]>, ErrorModel> => {
  return useQuery<ApiBaseState<IDeliveryChallanTypeCustomer[]>, ErrorModel>({
    queryKey: ['get-all-dc-type-customer', queryParams, search],
    queryFn: () => DCTypeCustomerServices.getInstance().getAllDCTypeCustomer(queryParams, search),
  });
}

export const useGetDCTypeCustomerForViewById = (
  id: string
): UseQueryResult<ApiBaseState<IDeliveryChallanTypeCustomer>, ErrorModel> => {
  const enabled = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<IDeliveryChallanTypeCustomer>, ErrorModel>({
    queryKey: ['get-dc-type-for-view-by-id', id],
    queryFn: () => DCTypeCustomerServices.getInstance().getDCTypeCustomerForViewById(id),
    enabled: enabled,
  });
}

export const useGetDCTypeCustomerForUpdateById = (
  id: string
): UseQueryResult<ApiBaseState<IDeliveryChallanTypeCustomer>, ErrorModel> => {
  const enabled = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<IDeliveryChallanTypeCustomer>, ErrorModel>({
    queryKey: ['get-dc-type-for-update-by-id', id],
    queryFn: () => DCTypeCustomerServices.getInstance().getDCTypeCustomerForUpdateById(id),
    enabled: enabled,
  });
}
