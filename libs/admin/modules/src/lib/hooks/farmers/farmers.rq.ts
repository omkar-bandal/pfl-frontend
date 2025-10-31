import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/services';
import { FarmersService, IFarmer } from '@prime-fresh/services';
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

export function useGetAllFarmers(queryParams?: QueryParams, search?: string | null):
    UseQueryResult<ApiBaseState<IFarmer[]>, ErrorModel> {
    return useQuery<ApiBaseState<IFarmer[]>, ErrorModel>({
        queryKey: ['get-all-farmers', queryParams, search],
        queryFn: () => FarmersService.getInstance().getAllFarmers(queryParams, search),
    });
}

export function useGetFarmerById(id: string):
    UseQueryResult<ApiBaseState<IFarmer>, ErrorModel> {
    const enabled = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<IFarmer>, ErrorModel>({
        queryKey: ['get-farmer-by-id'],
        queryFn: () => FarmersService.getInstance().getFarmerById(id),
        enabled: enabled,
    });
}
