import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { ProductCategoryService, GetProductCategory, PostProductCategory } from '@prime-fresh/admin_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateProductCategory():
    UseMutationResult<ResultModel, ErrorModel, PostProductCategory, unknown> {
    return useMutation<ResultModel, ErrorModel, PostProductCategory, unknown>({
        mutationKey: ['create-product-category'],
        mutationFn: (data) => ProductCategoryService.getInstance().createProductCategory(data),
    });
}

export function useUpdateProductCategoryById(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetProductCategory, unknown> {
    return useMutation<ResultModel, ErrorModel, GetProductCategory, unknown>({
        mutationKey: ['update-product-category-by-id'],
        mutationFn: (data) => ProductCategoryService.getInstance().updateProductCategory(id, data),
    });
}

export function useDeleteProductCategoryById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-product-category-by-id'],
        mutationFn: () => ProductCategoryService.getInstance().deleteProductCategoryById(id),
    });
}

export function useGetAllProductCategories():
    UseQueryResult<ApiBaseState<GetProductCategory[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetProductCategory[]>, ErrorModel>({
        queryKey: ['get-all-product-categories'],
        queryFn: () => ProductCategoryService.getInstance().getAllProductCategories(),
    });
}

export function useGetProductCategoryById(id: string):
    UseQueryResult<ApiBaseState<GetProductCategory>, ErrorModel> {
    return useQuery<ApiBaseState<GetProductCategory>, ErrorModel>({
        queryKey: ['get-product-category-by-id'],
        queryFn: () => ProductCategoryService.getInstance().getProductCategoryById(id),
        enabled: !!id,
    });
}
