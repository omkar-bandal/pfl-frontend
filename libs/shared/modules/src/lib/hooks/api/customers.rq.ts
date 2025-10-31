import { CustomersService, GetCustomerCategory, GetCustomerType, ICustomer, queryClient, StatusType } from '@prime-fresh/services';
import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/services';
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
        queryKey: ['customer-get-all', queryParams, search],
        queryFn: () => CustomersService.getInstance().getAllCustomers(queryParams, search),
    });
}

export function useGetCustomerByIdForView(id: string):
    UseQueryResult<ApiBaseState<ICustomer>, ErrorModel> {
    const enabled = id.length > 0 ? true : false;
    return useQuery<ApiBaseState<ICustomer>, ErrorModel>({
        queryKey: ['customer-get-by-id-for-view', id],
        queryFn: () => CustomersService.getInstance().getCustomerByIdForView(id),
        enabled: enabled,
    });
}

export function useGetCustomerByIdForUpdate(id: string):
    UseQueryResult<ApiBaseState<ICustomer>, ErrorModel> {
    const enabled = id.length > 0 ? true : false;
    return useQuery<ApiBaseState<ICustomer>, ErrorModel>({
        queryKey: ['customer-get-by-id-update', id],
        queryFn: () => CustomersService.getInstance().getCustomerByIdForUpdate(id),
        enabled: enabled,
    });
}

export function useChangeStatusCustomer(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['change-customer-status'],
        mutationFn: (status: StatusType) => CustomersService.getInstance().changeStatusOfCustomer(id, status),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['customer'] })
    });
}

export function useGetAllCustomerTypes(queryParams?: QueryParams, search?: string | null):
    UseQueryResult<ApiBaseState<GetCustomerType[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetCustomerType[]>, ErrorModel>({
        queryKey: ['get-all-customer-types', queryParams, search],
        queryFn: () => CustomersService.getInstance().getAllCustomerTypes(queryParams, search),
    });
}

export function useGetAllCustomerCategories(queryParams?: QueryParams, search?: string | null):
    UseQueryResult<ApiBaseState<GetCustomerCategory[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetCustomerCategory[]>, ErrorModel>({
        queryKey: ['get-all-customer-categories', queryParams, search],
        queryFn: () => CustomersService.getInstance().getAllCustomerCategories(queryParams, search),
    });
}
