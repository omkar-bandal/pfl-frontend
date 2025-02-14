import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { VendorSubcategoryService, GetVendorSubcategory, PostVendorSubcategory } from '@prime-fresh/admin_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateVendorSubategory():
    UseMutationResult<ResultModel, ErrorModel, PostVendorSubcategory, unknown> {
    return useMutation<ResultModel, ErrorModel, PostVendorSubcategory, unknown>({
        mutationKey: ['create-vendor-subcategory'],
        mutationFn: (data) => VendorSubcategoryService.getInstance().createVendorSubcategory(data),
    });
}

export function useUpdateVendorSubcategoryById(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetVendorSubcategory, unknown> {
    return useMutation<ResultModel, ErrorModel, GetVendorSubcategory, unknown>({
        mutationKey: ['update-vendor-subcategory-by-id'],
        mutationFn: (data) => VendorSubcategoryService.getInstance().updateVendorSubcategory(id, data),
    });
}

export function useDeleteVendorSubcategoryById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-vendor-subcategory-by-id'],
        mutationFn: () => VendorSubcategoryService.getInstance().deleteProdctSubcategoryById(id),
    });
}

export function useGetAllVendorSubcategories():
    UseQueryResult<ApiBaseState<GetVendorSubcategory[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetVendorSubcategory[]>, ErrorModel>({
        queryKey: ['get-all-vendor-subcategories'],
        queryFn: () => VendorSubcategoryService.getInstance().getAllVendorSubcategories(),
    });
}

export function useGetVendorSubcategoryById(id: string):
    UseQueryResult<ApiBaseState<GetVendorSubcategory>, ErrorModel> {
    return useQuery<ApiBaseState<GetVendorSubcategory>, ErrorModel>({
        queryKey: ['get-vendor-subcategory-by-id'],
        queryFn: () => VendorSubcategoryService.getInstance().getVendorSubcategoryById(id),
        enabled: !!id,
    });
}
