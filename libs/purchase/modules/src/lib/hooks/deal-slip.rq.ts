import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';
import { DealSlipServices, PostDealSlip, GetDealSlip } from '@prime-fresh/purchase_api';

export function useCreateDealSlip():
    UseMutationResult<ResultModel, ErrorModel, PostDealSlip, unknown> {
    return useMutation<ResultModel, ErrorModel, PostDealSlip, unknown>({
        mutationKey: ['create-deal-slip'],
        mutationFn: (data) => DealSlipServices.getInstance().createDealSlip(data),
    });
}

export function useUpdateDealSlipById(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetDealSlip, unknown> {
    return useMutation<ResultModel, ErrorModel, GetDealSlip, unknown>({
        mutationKey: ['update-deal-slip'],
        mutationFn: (data) => DealSlipServices.getInstance().updateDealSlip(id, data),
    });
}

export function useDeleteDealSlipById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-deal-slip-by-id'],
        mutationFn: () => DealSlipServices.getInstance().deleteDealSlipById(id),
    });
}

export function useGetAllDealSlips():
    UseQueryResult<ApiBaseState<GetDealSlip[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetDealSlip[]>, ErrorModel>({
        queryKey: ['get-all-deal-slips'],
        queryFn: () => DealSlipServices.getInstance().getAllDealSlips(),
    });
}

export function useGetDealSlipById(id: string):
    UseQueryResult<ApiBaseState<GetDealSlip>, ErrorModel> {
    return useQuery<ApiBaseState<GetDealSlip>, ErrorModel>({
        queryKey: ['get-deal-slip-by-id'],
        queryFn: () => DealSlipServices.getInstance().getDealSlipById(id),
        enabled: !!id,
    });
}
