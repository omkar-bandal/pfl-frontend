import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';
import { DealSlipServices, IDealSlip } from '@prime-fresh/purchase_api';

export function useCreateDealSlip():
    UseMutationResult<ResultModel, ErrorModel, IDealSlip, unknown> {
    return useMutation<ResultModel, ErrorModel, IDealSlip, unknown>({
        mutationKey: ['create-deal-slip'],
        mutationFn: (data) => DealSlipServices.getInstance().createDealSlip(data),
    });
}

export function useUpdateDealSlipById(id: string):
    UseMutationResult<ResultModel, ErrorModel, IDealSlip, unknown> {
    return useMutation<ResultModel, ErrorModel, IDealSlip, unknown>({
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

export function useGetAllDealSlips(queryParams?: QueryParams, search?: string | null):
    UseQueryResult<ApiBaseState<IDealSlip[]>, ErrorModel> {
    return useQuery<ApiBaseState<IDealSlip[]>, ErrorModel>({
        queryKey: ['get-all-deal-slips', queryParams, search],
        queryFn: () => DealSlipServices.getInstance().getAllDealSlips(queryParams, search),
    });
}

export function useGetDealSlipForViewById(id: string):
    UseQueryResult<ApiBaseState<IDealSlip>, ErrorModel> {
        const enabled = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<IDealSlip>, ErrorModel>({
        queryKey: ['get-deal-slip-for-view-by-id', id],
        queryFn: () => DealSlipServices.getInstance().getDealSlipForViewById(id),
        enabled: enabled,
    });
}

export function useGetDealSlipForUpdateById(id: string):
    UseQueryResult<ApiBaseState<IDealSlip>, ErrorModel> {
        const enabled = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<IDealSlip>, ErrorModel>({
        queryKey: ['get-deal-slip-for-update-by-id', id],
        queryFn: () => DealSlipServices.getInstance().getDealSlipForUpdateById(id),
        enabled: enabled,
    });
}
