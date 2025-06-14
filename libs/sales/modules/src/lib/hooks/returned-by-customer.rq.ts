import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { GetReturnByCustomer, PostReturnByCustomer, ReturnedByCustomerServices } from '@prime-fresh/sales_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateReturnedByCustomer():
    UseMutationResult<ResultModel, ErrorModel, PostReturnByCustomer, unknown> {
    return useMutation<ResultModel, ErrorModel, PostReturnByCustomer, unknown>({
        mutationKey: ['create-returned-by-customer'],
        mutationFn: (data) => ReturnedByCustomerServices.getInstance().createReturnedByCustomer(data),
    });
}

export function useUpdateReturnedByCustomer(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetReturnByCustomer, unknown> {
    return useMutation<ResultModel, ErrorModel, GetReturnByCustomer, unknown>({
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

export function useGetAllReturnedByCustomers():
    UseQueryResult<ApiBaseState<GetReturnByCustomer[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetReturnByCustomer[]>, ErrorModel>({
        queryKey: ['get-all-returned-by-customers'],
        queryFn: () => ReturnedByCustomerServices.getInstance().getAllReturnedByCustomers(),
    });
}

export function useGetReturnedByCustomerById(id: string):
    UseQueryResult<ApiBaseState<GetReturnByCustomer>, ErrorModel> {
        const enable = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<GetReturnByCustomer>, ErrorModel>({
        queryKey: ['get-returned-by-customer-by-id', id],
        queryFn: () => ReturnedByCustomerServices.getInstance().getReturnedByCustomerById(id),
        enabled: enable,
    });
}
