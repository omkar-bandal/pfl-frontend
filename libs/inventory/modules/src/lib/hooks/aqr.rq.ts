import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { AQRServices, GetAQR, PostAQR } from '@prime-fresh/inventory_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateAQR():
    UseMutationResult<ResultModel, ErrorModel, PostAQR, unknown> {
    return useMutation<ResultModel, ErrorModel, PostAQR, unknown>({
        mutationKey: ['create-aqr'],
        mutationFn: (data) => AQRServices.getInstance().createAQR(data),
    });
}

export function useUpdateAQR(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetAQR, unknown> {
    return useMutation<ResultModel, ErrorModel, GetAQR, unknown>({
        mutationKey: ['update-aqr'],
        mutationFn: (data) => AQRServices.getInstance().updateAQR(id, data),
    });
}

export function useDeleteAQRById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-aqr-by-id'],
        mutationFn: () => AQRServices.getInstance().deleteAQRById(id),
    });
}

export function useGetAllAQRs():
    UseQueryResult<ApiBaseState<GetAQR[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetAQR[]>, ErrorModel>({
        queryKey: ['get-all-aqrs'],
        queryFn: () => AQRServices.getInstance().getAllAQRs(),
    });
}

export function useGetAQRById(id: string):
    UseQueryResult<ApiBaseState<GetAQR>, ErrorModel> {
    return useQuery<ApiBaseState<GetAQR>, ErrorModel>({
        queryKey: ['get-aqr-by-id'],
        queryFn: () => AQRServices.getInstance().getAQRById(id),
        enabled: !!id,
    });
}
