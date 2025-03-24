import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { VendorsService, GetVendor } from '@prime-fresh/admin_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateVendor():
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['create-vendor'],
        mutationFn: (data) => VendorsService.getInstance().createVendor(data),
    });
}

export function useUpdateVendorById(id: string):
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['update-vendor-by-id'],
        mutationFn: (data) => VendorsService.getInstance().updateVendor(id, data),
    });
}

export function useDeleteVendorById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-vendor-by-id'],
        mutationFn: () => VendorsService.getInstance().deleteVendorById(id),
    });
}

export function useGetAllVendors(queryParams: QueryParams):
    UseQueryResult<ApiBaseState<GetVendor[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetVendor[]>, ErrorModel>({
        queryKey: ['get-all-vendors', queryParams],
        queryFn: () => VendorsService.getInstance().getAllVendors(queryParams),
    });
}

export function useGetVendorById(id: string):
    UseQueryResult<ApiBaseState<GetVendor>, ErrorModel> {
    return useQuery<ApiBaseState<GetVendor>, ErrorModel>({
        queryKey: ['get-vendor-by-id'],
        queryFn: () => VendorsService.getInstance().getVendorById(id),
        enabled: !!id,
    });
}
