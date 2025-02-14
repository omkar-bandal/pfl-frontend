import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { ProductSubcategoryService, GetProductSubcategory, PostProductSubcategory } from '@prime-fresh/admin_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateProductSubategory():
    UseMutationResult<ResultModel, ErrorModel, PostProductSubcategory, unknown> {
    return useMutation<ResultModel, ErrorModel, PostProductSubcategory, unknown>({
        mutationKey: ['create-product-subcategory'],
        mutationFn: (data) => ProductSubcategoryService.getInstance().createProductSubcategory(data),
    });
}

export function useUpdateProductSubcategoryById(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetProductSubcategory, unknown> {
    return useMutation<ResultModel, ErrorModel, GetProductSubcategory, unknown>({
        mutationKey: ['update-product-subcategory-by-id'],
        mutationFn: (data) => ProductSubcategoryService.getInstance().updateProductSubcategory(id, data),
    });
}

export function useDeleteProductSubcategoryById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-product-subcategory-by-id'],
        mutationFn: () => ProductSubcategoryService.getInstance().deleteProdctSubcategoryById(id),
    });
}

export function useGetAllProductSubcategories():
    UseQueryResult<ApiBaseState<GetProductSubcategory[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetProductSubcategory[]>, ErrorModel>({
        queryKey: ['get-all-product-subcategories'],
        queryFn: () => ProductSubcategoryService.getInstance().getAllProductSubcategories(),
    });
}

export function useGetProductSubcategoryById(id: string):
    UseQueryResult<ApiBaseState<GetProductSubcategory>, ErrorModel> {
    return useQuery<ApiBaseState<GetProductSubcategory>, ErrorModel>({
        queryKey: ['get-product-subcategory-by-id'],
        queryFn: () => ProductSubcategoryService.getInstance().getProductSubcategoryById(id),
        enabled: !!id,
    });
}
