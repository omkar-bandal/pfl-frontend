import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { GRNServices, GetGRN } from '@prime-fresh/purchase_api'; 
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateGRN():
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['create-GRN'],
        mutationFn: (data) => GRNServices.getInstance().createGRN(data),
    });
}

export function useUpdateGRNById(id: string):
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['update-GRN-by-id'],
        mutationFn: (data) => GRNServices.getInstance().updateGRN(id, data),
    });
}

export function useDeleteGRNById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-GRN-by-id'],
        mutationFn: () => GRNServices.getInstance().deleteGRNById(id),
    });
}

export function useGetAllGRNs():
    UseQueryResult<ApiBaseState<GetGRN[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetGRN[]>, ErrorModel>({
        queryKey: ['get-all-GRNs'],
        queryFn: () => GRNServices.getInstance().getAllGRNs(),
    });
}

export function useGetGRNById(id: string):
    UseQueryResult<ApiBaseState<GetGRN>, ErrorModel> {
    return useQuery<ApiBaseState<GetGRN>, ErrorModel>({
        queryKey: ['get-GRN-by-id'],
        queryFn: () => GRNServices.getInstance().getGRNById(id),
        enabled: !!id,
    });
}
