import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { UOMService, PostUOM, GetUOM } from '@prime-fresh/admin_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateUOM():
    UseMutationResult<ResultModel, ErrorModel, PostUOM, unknown> {
    return useMutation<ResultModel, ErrorModel, PostUOM, unknown>({
        mutationKey: ['create-uom'],
        mutationFn: (data) => UOMService.getInstance().createUOM(data),
    });
}

export function useUpdateUOMById(id: string):
    UseMutationResult<ResultModel, ErrorModel, PostUOM, unknown> {
    return useMutation<ResultModel, ErrorModel, PostUOM, unknown>({
        mutationKey: ['update-uom-by-id'],
        mutationFn: (data) => UOMService.getInstance().updateUOM(id, data),
    });
}

export function useDeleteUOMById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-uom-by-id'],
        mutationFn: () => UOMService.getInstance().deleteUOMById(id),
    });
}

export function useGetAllUOMs(queryParams: QueryParams):
    UseQueryResult<ApiBaseState<GetUOM[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetUOM[]>, ErrorModel>({
        queryKey: ['get-all-uoms', queryParams],
        queryFn: () => UOMService.getInstance().getAllUOMs(queryParams),
    });
}

export function useGetUOMById(id: string):
    UseQueryResult<ApiBaseState<GetUOM>, ErrorModel> {
    return useQuery<ApiBaseState<GetUOM>, ErrorModel>({
        queryKey: ['get-uom-by-id'],
        queryFn: () => UOMService.getInstance().getUOMById(id),
        enabled: !!id,
    });
}
