import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { ProductsService, GetProduct} from '@prime-fresh/admin_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateProduct():
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['create-product'],
        mutationFn: (data) => ProductsService.getInstance().createProduct(data),
    });
}

export function useUpdateProductById(id: string):
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['update-product-by-id'],
        mutationFn: (data) => ProductsService.getInstance().updateProduct(id, data),
    });
}

export function useDeleteProductById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-product-by-id'],
        mutationFn: () => ProductsService.getInstance().deleteProductById(id),
    });
}

export function useGetAllProducts(queryParams?: QueryParams):
    UseQueryResult<ApiBaseState<GetProduct[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetProduct[]>, ErrorModel>({
        queryKey: ['get-all-products', queryParams],
        queryFn: () => ProductsService.getInstance().getAllProducts(queryParams),
    });
}

export function useGetProductById(id: string):
    UseQueryResult<ApiBaseState<GetProduct>, ErrorModel> {
        const enabled = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<GetProduct>, ErrorModel>({
        queryKey: ['get-product-by-id', id],
        queryFn: () => ProductsService.getInstance().getProductById(id),
        enabled: enabled,
    });
}
