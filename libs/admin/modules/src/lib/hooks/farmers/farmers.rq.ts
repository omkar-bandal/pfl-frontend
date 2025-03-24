import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { FarmersService, GetFarmer } from '@prime-fresh/admin_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateFarmer():
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['create-farmer'],
        mutationFn: (data) => FarmersService.getInstance().createFarmer(data),
    });
}

export function useUpdateFarmerById(id: string):
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['update-farmer-by-id'],
        mutationFn: (data) => FarmersService.getInstance().updateFarmer(id, data),
    });
}

export function useDeleteFarmerById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-farmer-by-id'],
        mutationFn: () => FarmersService.getInstance().deleteFarmerById(id),
    });
}

export function useGetAllFarmers(queryParams: QueryParams):
    UseQueryResult<ApiBaseState<GetFarmer[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetFarmer[]>, ErrorModel>({
        queryKey: ['get-all-farmers', queryParams],
        queryFn: () => FarmersService.getInstance().getAllFarmers(queryParams),
    });
}

export function useGetFarmerById(id: string):
    UseQueryResult<ApiBaseState<GetFarmer>, ErrorModel> {
    return useQuery<ApiBaseState<GetFarmer>, ErrorModel>({
        queryKey: ['get-farmer-by-id'],
        queryFn: () => FarmersService.getInstance().getFarmerById(id),
        enabled: !!id,
    });
}
