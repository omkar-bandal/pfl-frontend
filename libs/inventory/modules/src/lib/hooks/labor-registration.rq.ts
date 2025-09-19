import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { LaborRegistrationServices, ILaborRegistration } from '@prime-fresh/inventory_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateLaborRegistration():
    UseMutationResult<ResultModel, ErrorModel, Omit<ILaborRegistration, 'id'>, unknown> {
    return useMutation<ResultModel, ErrorModel, Omit<ILaborRegistration, 'id'>, unknown>({
        mutationKey: ['create-labor-register'],
        mutationFn: (data) => LaborRegistrationServices.getInstance().createLaborRegistration(data),
    });
}

export function useUpdateLaborRegistration(id: string):
    UseMutationResult<ResultModel, ErrorModel, ILaborRegistration, unknown> {
    return useMutation<ResultModel, ErrorModel, ILaborRegistration, unknown>({
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

export function useGetAllLaborRegistration(queryParams?: QueryParams, search?: string | null):
    UseQueryResult<ApiBaseState<ILaborRegistration[]>, ErrorModel> {
    return useQuery<ApiBaseState<ILaborRegistration[]>, ErrorModel>({
        queryKey: ['get-all-labor-registers', queryParams, search],
        queryFn: () => LaborRegistrationServices.getInstance().getAllRegistreredLabors(queryParams, search),
    });
}

export function useGetLaborRegistrationById(id: string):
    UseQueryResult<ApiBaseState<ILaborRegistration>, ErrorModel> {
    const enabled = id.length > 0 ? true : false;
    return useQuery<ApiBaseState<ILaborRegistration>, ErrorModel>({
        queryKey: ['get-labor-register-by-id', id],
        queryFn: () => LaborRegistrationServices.getInstance().getRegistreredLaborById(id),
        enabled: enabled,
    });
}
