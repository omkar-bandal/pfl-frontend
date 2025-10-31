import { ProductsService, IProduct, GetProductClassification, ProductClassificationService, GetProductCategory, ProductCategoryService, GetProductSubcategory, ProductSubcategoryService } from '@prime-fresh/services';
import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/services';
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

export function useGetAllProducts(queryParams?: QueryParams, search?: string | null):
    UseQueryResult<ApiBaseState<IProduct[]>, ErrorModel> {
    return useQuery<ApiBaseState<IProduct[]>, ErrorModel>({
        queryKey: ['get-all-products', queryParams, search],
        queryFn: () => ProductsService.getInstance().getAllProducts(queryParams, search),
    });
}

export function useGetProductById(id: string):
    UseQueryResult<ApiBaseState<IProduct>, ErrorModel> {
    const enabled = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<IProduct>, ErrorModel>({
        queryKey: ['get-product-by-id', id],
        queryFn: () => ProductsService.getInstance().getProductById(id),
        enabled: enabled,
    });
}

export function useGetAllProductVariants(productId: string | null):
    UseQueryResult<ApiBaseState<Pick<IProduct, 'id' | 'name' | 'variant'>>, ErrorModel> {
    return useQuery<ApiBaseState<Pick<IProduct, 'id' | 'name' | 'variant'>>, ErrorModel>({
        queryKey: ['get-all-products', productId],
        queryFn: () => ProductsService.getInstance().getAllProductVariants(productId),
        enabled: productId ? true : false
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

export function useGetAllProductCategories(queryParams?: QueryParams, search?: string | null):
    UseQueryResult<ApiBaseState<GetProductCategory[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetProductCategory[]>, ErrorModel>({
        queryKey: ['get-all-product-categories', queryParams, search],
        queryFn: () => ProductCategoryService.getInstance().getAllProductCategories(queryParams, search),
    });
}

export function useGetProductCategoryById(id: string):
    UseQueryResult<ApiBaseState<GetProductCategory>, ErrorModel> {
    const enabled = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<GetProductCategory>, ErrorModel>({
        queryKey: ['get-product-category-by-id'],
        queryFn: () => ProductCategoryService.getInstance().getProductCategoryById(id),
        enabled: enabled,
    });
}

export function useGetAllProductSubcategories(queryParams?: QueryParams, search?: string | null):
    UseQueryResult<ApiBaseState<GetProductSubcategory[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetProductSubcategory[]>, ErrorModel>({
        queryKey: ['get-all-product-subcategories', queryParams, search],
        queryFn: () => ProductSubcategoryService.getInstance().getAllProductSubcategories(queryParams, search),
    });
}

export function useGetProductSubcategoryById(id: string):
    UseQueryResult<ApiBaseState<GetProductSubcategory>, ErrorModel> {
        const enabled = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<GetProductSubcategory>, ErrorModel>({
        queryKey: ['get-product-subcategory-by-id'],
        queryFn: () => ProductSubcategoryService.getInstance().getProductSubcategoryById(id),
        enabled: enabled,
    });
}
