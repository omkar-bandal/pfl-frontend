import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/services';
import { CustomersService, ICustomer } from '@prime-fresh/services';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateCustomer():
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['create-Customer'],
        mutationFn: (data) => CustomersService.getInstance().createCustomer(data),
    });
}

export function useUpdateCustomerById(id: string):
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['update-customer-by-id'],
        mutationFn: (data) => CustomersService.getInstance().updateCustomer(id, data),
    });
}

export function useDeleteCustomerById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-customer-by-id'],
        mutationFn: () => CustomersService.getInstance().deleteCustomerById(id),
    });
}

export function useGetAllCustomers(queryParams?: QueryParams, search?: string | null):
    UseQueryResult<ApiBaseState<ICustomer[]>, ErrorModel> {
    return useQuery<ApiBaseState<ICustomer[]>, ErrorModel>({
        queryKey: ['get-all-customers', queryParams, search],
        queryFn: () => CustomersService.getInstance().getAllCustomers(queryParams, search),
    });
}

export function useGetCustomerById(id: string):
    UseQueryResult<ApiBaseState<ICustomer>, ErrorModel> {
    const enabled = id.length > 0 ? true : false;
    return useQuery<ApiBaseState<ICustomer>, ErrorModel>({
        queryKey: ['get-customer-by-id', id],
        queryFn: () => CustomersService.getInstance().getCustomerById(id),
        enabled: enabled,
    });
}
