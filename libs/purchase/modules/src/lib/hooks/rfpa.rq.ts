import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';
import { RFPAServices, PostRFPA, GetRFPA } from '@prime-fresh/purchase_api';

export function useCreateRFPA():
    UseMutationResult<ResultModel, ErrorModel, PostRFPA, unknown> {
    return useMutation<ResultModel, ErrorModel, PostRFPA, unknown>({
        mutationKey: ['create-rfpa'],
        mutationFn: (data) => RFPAServices.getInstance().createRFPA(data),
    });
}

export function useUpdateRFPAById(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetRFPA, unknown> {
    return useMutation<ResultModel, ErrorModel, GetRFPA, unknown>({
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

export function useGetAllRFPAs():
    UseQueryResult<ApiBaseState<GetRFPA[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetRFPA[]>, ErrorModel>({
        queryKey: ['get-all-rfpas'],
        queryFn: () => RFPAServices.getInstance().getAllRFPAs(),
    });
}

export function useGetRFPAById(id: string):
    UseQueryResult<ApiBaseState<GetRFPA>, ErrorModel> {
    return useQuery<ApiBaseState<GetRFPA>, ErrorModel>({
        queryKey: ['get-rfpa-by-id'],
        queryFn: () => RFPAServices.getInstance().getRFPAById(id),
        enabled: !!id,
    });
}
