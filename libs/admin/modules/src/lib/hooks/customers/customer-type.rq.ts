import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { CustomerTypeService, GetCustomerType, PostCustomerType } from '@prime-fresh/admin_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateCustomerType():
    UseMutationResult<ResultModel, ErrorModel, PostCustomerType, unknown> {
    return useMutation<ResultModel, ErrorModel, PostCustomerType, unknown>({
        mutationKey: ['create-customer-type'],
        mutationFn: (data) => CustomerTypeService.getInstance().createCustomerType(data),
    });
}

export function useUpdateCustomerTypeById(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetCustomerType, unknown> {
    return useMutation<ResultModel, ErrorModel, GetCustomerType, unknown>({
        mutationKey: ['update-customer-type-by-id'],
        mutationFn: (data) => CustomerTypeService.getInstance().updateCustomerType(id, data),
    });
}

export function useDeleteCustomerTypeById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-customer-type-by-id'],
        mutationFn: () => CustomerTypeService.getInstance().deleteCustomerTypeById(id),
    });
}

export function useGetAllCustomerTypes(queryParams?: QueryParams, search?: string | null):
    UseQueryResult<ApiBaseState<GetCustomerType[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetCustomerType[]>, ErrorModel>({
        queryKey: ['get-all-customer-types', queryParams, search],
        queryFn: () => CustomerTypeService.getInstance().getAllCustomerCategories(queryParams, search),
    });
}

export function useGetCustomerTypeById(id: string):
    UseQueryResult<ApiBaseState<GetCustomerType>, ErrorModel> {
    const enabled = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<GetCustomerType>, ErrorModel>({
        queryKey: ['get-customer-type-by-id', id],
        queryFn: () => CustomerTypeService.getInstance().getCustomerTypeById(id),
        enabled: enabled,
    });
}
