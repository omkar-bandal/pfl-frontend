import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { LaborRegistrationServices, PostLaborRegistration, GetLaborRegistration } from '@prime-fresh/inventory_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateLaborRegistration():
    UseMutationResult<ResultModel, ErrorModel, PostLaborRegistration, unknown> {
    return useMutation<ResultModel, ErrorModel, PostLaborRegistration, unknown>({
        mutationKey: ['create-labor-register'],
        mutationFn: (data) => LaborRegistrationServices.getInstance().createLaborRegistration(data),
    });
}

export function useUpdateLaborRegistration(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetLaborRegistration, unknown> {
    return useMutation<ResultModel, ErrorModel, GetLaborRegistration, unknown>({
        mutationKey: ['update-labor-register'],
        mutationFn: (data) => LaborRegistrationServices.getInstance().updateRegistreredLabor(id, data),
    });
}

export function useDeleteLaborRegistrationById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-labor-register-by-id'],
        mutationFn: () => LaborRegistrationServices.getInstance().deleteRegistreredLaborById(id),
    });
}

export function useGetAllLaborRegistration(queryParams?: QueryParams):
    UseQueryResult<ApiBaseState<GetLaborRegistration[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetLaborRegistration[]>, ErrorModel>({
        queryKey: ['get-all-labor-registers', queryParams],
        queryFn: () => LaborRegistrationServices.getInstance().getAllRegistreredLabors(queryParams),
    });
}

export function useGetLaborRegistrationById(id: string):
    UseQueryResult<ApiBaseState<GetLaborRegistration>, ErrorModel> {
        const enabled = id.length > 0 ? true : false;
    return useQuery<ApiBaseState<GetLaborRegistration>, ErrorModel>({
        queryKey: ['get-labor-register-by-id', id],
        queryFn: () => LaborRegistrationServices.getInstance().getRegistreredLaborById(id),
        enabled: enabled,
    });
}
