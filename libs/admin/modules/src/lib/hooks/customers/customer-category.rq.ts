import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { CustomerCategoryService, GetCustomerCategory, PostCustomerCategory } from '@prime-fresh/admin_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateCustomerCategory():
    UseMutationResult<ResultModel, ErrorModel, PostCustomerCategory, unknown> {
    return useMutation<ResultModel, ErrorModel, PostCustomerCategory, unknown>({
        mutationKey: ['create-customer-category'],
        mutationFn: (data) => CustomerCategoryService.getInstance().createCustomerCategory(data),
    });
}

export function useUpdateCustomerCategoryById(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetCustomerCategory, unknown> {
    return useMutation<ResultModel, ErrorModel, GetCustomerCategory, unknown>({
        mutationKey: ['update-customer-category-by-id'],
        mutationFn: (data) => CustomerCategoryService.getInstance().updateCustomerCategory(id, data),
    });
}

export function useDeleteCustomerCategoryById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-customer-category-by-id'],
        mutationFn: () => CustomerCategoryService.getInstance().deleteCustomerCategoryById(id),
    });
}

export function useGetAllCustomerCategories(queryParams?: QueryParams, search?: string | null):
    UseQueryResult<ApiBaseState<GetCustomerCategory[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetCustomerCategory[]>, ErrorModel>({
        queryKey: ['get-all-customer-categories', queryParams, search],
        queryFn: () => CustomerCategoryService.getInstance().getAllCustomerCategories(queryParams, search),
    });
}

export function useGetCustomerCategoryById(id: string):
    UseQueryResult<ApiBaseState<GetCustomerCategory>, ErrorModel> {
        const enabled = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<GetCustomerCategory>, ErrorModel>({
        queryKey: ['get-customer-category-by-id', id],
        queryFn: () => CustomerCategoryService.getInstance().getCustomerCategoryById(id),
        enabled: enabled,
    });
}
