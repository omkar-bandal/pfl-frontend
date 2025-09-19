import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { ProductClassificationService, GetProductClassification, PostProductClassification } from '@prime-fresh/admin_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateProductClassification():
    UseMutationResult<ResultModel, ErrorModel, PostProductClassification, unknown> {
    return useMutation<ResultModel, ErrorModel, PostProductClassification, unknown>({
        mutationKey: ['create-product-classification'],
        mutationFn: (data) => ProductClassificationService.getInstance().createProductClassification(data),
    });
}

export function useUpdateProductClassification(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetProductClassification, unknown> {
    return useMutation<ResultModel, ErrorModel, GetProductClassification, unknown>({
        mutationKey: ['update-product-classification-by-id'],
        mutationFn: (data) => ProductClassificationService.getInstance().updateProductClassification(id, data),
    });
}

export function useDeleteProductClassificationById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-product-classification-by-id'],
        mutationFn: () => ProductClassificationService.getInstance().deleteProductClassificationById(id),
    });
}

export function useGetAllProductClassifications(queryParams?: QueryParams, search?: string | null):
    UseQueryResult<ApiBaseState<GetProductClassification[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetProductClassification[]>, ErrorModel>({
        queryKey: ['get-all-product-classifications',queryParams, search],
        queryFn: () => ProductClassificationService.getInstance().getAllProductClassifications(queryParams, search),
    });
}

export function useGetProductClassificationById(id: string):
    UseQueryResult<ApiBaseState<GetProductClassification>, ErrorModel> {
        const enabled = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<GetProductClassification>, ErrorModel>({
        queryKey: ['get-product-classification-by-id'],
        queryFn: () => ProductClassificationService.getInstance().getProductClassificationById(id),
        enabled: enabled,
    });
}
