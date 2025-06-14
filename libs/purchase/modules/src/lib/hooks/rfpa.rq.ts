import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';
import { RFPAServices, IRFPA } from '@prime-fresh/purchase_api';

export function useCreateRFPA():
    UseMutationResult<ResultModel, ErrorModel, IRFPA, unknown> {
    return useMutation<ResultModel, ErrorModel, IRFPA, unknown>({
        mutationKey: ['create-rfpa'],
        mutationFn: (data) => RFPAServices.getInstance().createRFPA(data),
    });
}

export function useUpdateRFPAById(id: string):
    UseMutationResult<ResultModel, ErrorModel, IRFPA, unknown> {
    return useMutation<ResultModel, ErrorModel, IRFPA, unknown>({
        mutationKey: ['update-rfpa'],
        mutationFn: (data) => RFPAServices.getInstance().updateRFPA(id, data),
    });
}

export function useDeleteRFPAById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-rfpa-by-id'],
        mutationFn: () => RFPAServices.getInstance().deleteRFPAById(id),
    });
}

export function useGetAllRFPAs(queryParams?: QueryParams):
    UseQueryResult<ApiBaseState<IRFPA[]>, ErrorModel> {
    return useQuery<ApiBaseState<IRFPA[]>, ErrorModel>({
        queryKey: ['get-all-rfpas', queryParams],
        queryFn: () => RFPAServices.getInstance().getAllRFPAs(queryParams),
    });
}

export function useGetRFPAForViewById(id: string):
    UseQueryResult<ApiBaseState<IRFPA>, ErrorModel> {
        const enabled = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<IRFPA>, ErrorModel>({
        queryKey: ['get-rfpa-for-view-by-id', id],
        queryFn: () => RFPAServices.getInstance().getRFPAForViewById(id),
        enabled: enabled,
    });
}

export function useGetRFPAForUpdateById(id: string):
    UseQueryResult<ApiBaseState<IRFPA>, ErrorModel> {
        const enabled = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<IRFPA>, ErrorModel>({
        queryKey: ['get-rfpa-for-update-by-id', id],
        queryFn: () => RFPAServices.getInstance().getRFPAForUpdateById(id),
        enabled: enabled,
    });
}

