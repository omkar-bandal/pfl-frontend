import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { InwardRegisterServices, PostInwardRegister, GetInwardRegister } from '@prime-fresh/inventory_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateInwardRegister():
    UseMutationResult<ResultModel, ErrorModel, PostInwardRegister, unknown> {
    return useMutation<ResultModel, ErrorModel, PostInwardRegister, unknown>({
        mutationKey: ['create-inward-register'],
        mutationFn: (data) => InwardRegisterServices.getInstance().createInwardRegister(data),
    });
}

export function useUpdateInwardRegister(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetInwardRegister, unknown> {
    return useMutation<ResultModel, ErrorModel, GetInwardRegister, unknown>({
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

export function useGetAllInwardRegisters():
    UseQueryResult<ApiBaseState<GetInwardRegister[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetInwardRegister[]>, ErrorModel>({
        queryKey: ['get-all-inward-registers'],
        queryFn: () => InwardRegisterServices.getInstance().getAllInwardRegisters(),
    });
}

export function useGetInwardRegisterById(id: string):
    UseQueryResult<ApiBaseState<GetInwardRegister>, ErrorModel> {
    return useQuery<ApiBaseState<GetInwardRegister>, ErrorModel>({
        queryKey: ['get-inward-register-by-id'],
        queryFn: () => InwardRegisterServices.getInstance().getInwardRegisterById(id),
        enabled: !!id,
    });
}
