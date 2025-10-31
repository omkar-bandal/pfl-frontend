import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/services';
import { PostUOMConversionMatrix, GetUOMConversionMatrix, UOMConversionMatrixService } from '@prime-fresh/services';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateUOMConversionMatrix():
    UseMutationResult<ResultModel, ErrorModel, PostUOMConversionMatrix, unknown> {
    return useMutation<ResultModel, ErrorModel, PostUOMConversionMatrix, unknown>({
        mutationKey: ['create-uom-conversion-matrix'],
        mutationFn: (data) => UOMConversionMatrixService.getInstance().createUOMConversionMatrix(data),
    });
}

export function useUpdateUOMConversionMatrixById(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetUOMConversionMatrix, unknown> {
    return useMutation<ResultModel, ErrorModel, GetUOMConversionMatrix, unknown>({
        mutationKey: ['update-uom-conversion-matrix-by-id'],
        mutationFn: (data) => UOMConversionMatrixService.getInstance().updateUOMConversionMatrix(id, data),
    });
}

export function useDeleteUOMConversionMatrixById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-uom-conversion-matrix-by-id'],
        mutationFn: () => UOMConversionMatrixService.getInstance().deleteUOMConversionMatrixById(id),
    });
}

export function useGetAllUOMConversionMatrix(queryParams?: QueryParams, search?: string | null ):
    UseQueryResult<ApiBaseState<GetUOMConversionMatrix[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetUOMConversionMatrix[]>, ErrorModel>({
        queryKey: ['get-all-uom-conversion-matrix', queryParams, search],
        queryFn: () => UOMConversionMatrixService.getInstance().getAllUOMConversionMatrix(queryParams, search),
    });
}

export function useGetUOMConversionMatrixById(id: string):
    UseQueryResult<ApiBaseState<GetUOMConversionMatrix>, ErrorModel> {
    return useQuery<ApiBaseState<GetUOMConversionMatrix>, ErrorModel>({
        queryKey: ['get-uom-conversion-matrix-by-id'],
        queryFn: () => UOMConversionMatrixService.getInstance().getUOMConversionMatrixById(id),
        enabled: !!id,
    });
}
