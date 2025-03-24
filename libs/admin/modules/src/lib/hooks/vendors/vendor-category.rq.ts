import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { VendorCategoryService, GetVendorCategory, PostVendorCategory } from '@prime-fresh/admin_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateVendorCategory():
    UseMutationResult<ResultModel, ErrorModel, PostVendorCategory, unknown> {
    return useMutation<ResultModel, ErrorModel, PostVendorCategory, unknown>({
        mutationKey: ['create-vendor-category'],
        mutationFn: (data) => VendorCategoryService.getInstance().createVendorCategory(data),
    });
}

export function useUpdateVendorCategoryById(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetVendorCategory, unknown> {
    return useMutation<ResultModel, ErrorModel, GetVendorCategory, unknown>({
        mutationKey: ['update-vendor-category-by-id'],
        mutationFn: (data) => VendorCategoryService.getInstance().updateVendorCategory(id, data),
    });
}

export function useDeleteVendorCategoryById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-vendor-category-by-id'],
        mutationFn: () => VendorCategoryService.getInstance().deleteVendorCategoryById(id),
    });
}

export function useGetAllVendorCategories(queryParams?: QueryParams):
    UseQueryResult<ApiBaseState<GetVendorCategory[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetVendorCategory[]>, ErrorModel>({
        queryKey: ['get-all-vendor-categories', queryParams],
        queryFn: () => VendorCategoryService.getInstance().getAllVendorCategories(queryParams),
    });
}

export function useGetVendorCategoryById(id: string):
    UseQueryResult<ApiBaseState<GetVendorCategory>, ErrorModel> {
    return useQuery<ApiBaseState<GetVendorCategory>, ErrorModel>({
        queryKey: ['get-vendor-category-by-id'],
        queryFn: () => VendorCategoryService.getInstance().getVendorCategoryById(id),
        enabled: !!id,
    });
}
