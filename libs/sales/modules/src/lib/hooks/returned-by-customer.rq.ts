import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { IReturnByCustomer, ReturnedByCustomerServices } from '@prime-fresh/sales_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateReturnedByCustomer():
    UseMutationResult<ResultModel, ErrorModel, Omit<IReturnByCustomer, 'id'>, unknown> {
    return useMutation<ResultModel, ErrorModel, Omit<IReturnByCustomer, 'id'>, unknown>({
        mutationKey: ['create-returned-by-customer'],
        mutationFn: (data) => ReturnedByCustomerServices.getInstance().createReturnedByCustomer(data),
    });
}

export function useUpdateReturnedByCustomer(id: string):
    UseMutationResult<ResultModel, ErrorModel, IReturnByCustomer, unknown> {
    return useMutation<ResultModel, ErrorModel, IReturnByCustomer, unknown>({
        mutationKey: ['update-returned-by-customer'],
        mutationFn: (data) => ReturnedByCustomerServices.getInstance().updateReturnedByCustomer(id, data),
    });
}

export function useDeleteReturnedByCustomerById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-returned-by-customer-by-id'],
        mutationFn: () => ReturnedByCustomerServices.getInstance().deleteReturnedByCustomerById(id),
    });
}

export function useGetAllReturnedByCustomers(queryParams?: QueryParams):
    UseQueryResult<ApiBaseState<IReturnByCustomer[]>, ErrorModel> {
    return useQuery<ApiBaseState<IReturnByCustomer[]>, ErrorModel>({
        queryKey: ['get-all-returned-by-customers', queryParams],
        queryFn: () => ReturnedByCustomerServices.getInstance().getAllReturnedByCustomers(queryParams),
    });
}

export function useGetReturnedByCustomerById(id: string):
    UseQueryResult<ApiBaseState<IReturnByCustomer>, ErrorModel> {
    const enable = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<IReturnByCustomer>, ErrorModel>({
        queryKey: ['get-returned-by-customer-by-id', id],
        queryFn: () => ReturnedByCustomerServices.getInstance().getReturnedByCustomerById(id),
        enabled: enable,
    });
}
