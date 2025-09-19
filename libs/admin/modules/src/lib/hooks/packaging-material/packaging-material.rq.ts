import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { PackagingMaterialService, GetPackagingMaterial, PostPackagingMaterial } from '@prime-fresh/admin_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreatePackagingMaterial():
    UseMutationResult<ResultModel, ErrorModel, PostPackagingMaterial, unknown> {
    return useMutation<ResultModel, ErrorModel, PostPackagingMaterial, unknown>({
        mutationKey: ['create-packaging-material'],
        mutationFn: (data) => PackagingMaterialService.getInstance().createPackagingMaterial(data),
    });
}

export function useUpdatePackagingMaterialById(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetPackagingMaterial, unknown> {
    return useMutation<ResultModel, ErrorModel, GetPackagingMaterial, unknown>({
        mutationKey: ['update-packaging-material-by-id'],
        mutationFn: (data) => PackagingMaterialService.getInstance().updatePackagingMaterial(id, data),
    });
}

export function useDeletePackagingMaterialById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-packaging-material-by-id'],
        mutationFn: () => PackagingMaterialService.getInstance().deletePackagingMaterialById(id),
    });
}

export function useGetAllPackagingMaterials(queryParams?: QueryParams, search?: string | null):
    UseQueryResult<ApiBaseState<GetPackagingMaterial[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetPackagingMaterial[]>, ErrorModel>({
        queryKey: ['get-all-packaging-materials', queryParams, search],
        queryFn: () => PackagingMaterialService.getInstance().getAllPackagingMaterials(queryParams, search),
    });
}

export function useGetPackagingMaterialById(id: string):
    UseQueryResult<ApiBaseState<GetPackagingMaterial>, ErrorModel> {
        const enabled = id.length > 0 ? true : false;
    return useQuery<ApiBaseState<GetPackagingMaterial>, ErrorModel>({
        queryKey: ['get-packaging-material-by-id', id],
        queryFn: () => PackagingMaterialService.getInstance().getPackagingMaterialById(id),
        enabled: enabled,
    });
}
