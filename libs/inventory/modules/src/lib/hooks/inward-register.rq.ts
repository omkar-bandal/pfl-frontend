import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { InwardRegisterServices, IInwardRegister } from '@prime-fresh/inventory_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateInwardRegister():
    UseMutationResult<ResultModel, ErrorModel, IInwardRegister, unknown> {
    return useMutation<ResultModel, ErrorModel, IInwardRegister, unknown>({
        mutationKey: ['create-inward-register'],
        mutationFn: (data) => InwardRegisterServices.getInstance().createInwardRegister(data),
    });
}

export function useUpdateInwardRegister(id: string):
    UseMutationResult<ResultModel, ErrorModel, IInwardRegister, unknown> {
    return useMutation<ResultModel, ErrorModel, IInwardRegister, unknown>({
        mutationKey: ['update-inward-register'],
        mutationFn: (data) => InwardRegisterServices.getInstance().updateInwardRegister(id, data),
    });
}

export function useDeleteInwardRegisterById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-inward-register-by-id'],
        mutationFn: () => InwardRegisterServices.getInstance().deleteInwardRegisterById(id),
    });
}

export function useGetAllInwardRegisters(queryParams?: QueryParams):
    UseQueryResult<ApiBaseState<IInwardRegister[]>, ErrorModel> {
    return useQuery<ApiBaseState<IInwardRegister[]>, ErrorModel>({
        queryKey: ['get-all-inward-registers', queryParams],
        queryFn: () => InwardRegisterServices.getInstance().getAllInwardRegisters(queryParams),
    });
}

export function useGetInwardRegisterForViewById(id: string):
    UseQueryResult<ApiBaseState<IInwardRegister>, ErrorModel> {
    return useQuery<ApiBaseState<IInwardRegister>, ErrorModel>({
        queryKey: ['get-inward-register-for-view-by-id'],
        queryFn: () => InwardRegisterServices.getInstance().getInwardRegisterForViewById(id),
        enabled: !!id,
    });
}

export function useGetInwardRegisterForUpdateById(id: string):
    UseQueryResult<ApiBaseState<IInwardRegister>, ErrorModel> {
    return useQuery<ApiBaseState<IInwardRegister>, ErrorModel>({
        queryKey: ['get-inward-register-for-update-by-id'],
        queryFn: () => InwardRegisterServices.getInstance().getInwardRegisterForUpdateById(id),
        enabled: !!id,
    });
}
