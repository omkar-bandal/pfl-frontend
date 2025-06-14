import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { CustomersService, GetCustomer } from '@prime-fresh/admin_api';
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

export function useGetAllCustomers(queryParams?: QueryParams):
    UseQueryResult<ApiBaseState<GetCustomer[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetCustomer[]>, ErrorModel>({
        queryKey: ['get-all-customers',queryParams],
        queryFn: () => CustomersService.getInstance().getAllCustomers(queryParams),
    });
}

export function useGetCustomerById(id: string):
    UseQueryResult<ApiBaseState<GetCustomer>, ErrorModel> {
        const enabled = id.length > 0 ? true : false;
    return useQuery<ApiBaseState<GetCustomer>, ErrorModel>({
        queryKey: ['get-customer-by-id', id],
        queryFn: () => CustomersService.getInstance().getCustomerById(id),
        enabled: enabled,
    });
}
