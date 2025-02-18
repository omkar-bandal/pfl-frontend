import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { DumpRegisterServices, PostDumpRegister, GetDumpRegister } from '@prime-fresh/inventory_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateDumpRegister():
    UseMutationResult<ResultModel, ErrorModel, PostDumpRegister, unknown> {
    return useMutation<ResultModel, ErrorModel, PostDumpRegister, unknown>({
        mutationKey: ['create-dump-register'],
        mutationFn: (data) => DumpRegisterServices.getInstance().createDumpRegister(data),
    });
}

export function useUpdateDumpRegister(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetDumpRegister, unknown> {
    return useMutation<ResultModel, ErrorModel, GetDumpRegister, unknown>({
        mutationKey: ['update-dump-register'],
        mutationFn: (data) => DumpRegisterServices.getInstance().updateDumpRegister(id, data),
    });
}

export function useDeleteDumpRegisterById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-dump-register-by-id'],
        mutationFn: () => DumpRegisterServices.getInstance().deleteDumpRegisterById(id),
    });
}

export function useGetAllDumpRegisters():
    UseQueryResult<ApiBaseState<GetDumpRegister[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetDumpRegister[]>, ErrorModel>({
        queryKey: ['get-all-dump-registers'],
        queryFn: () => DumpRegisterServices.getInstance().getAllDumpRegisters(),
    });
}

export function useGetDumpRegisterById(id: string):
    UseQueryResult<ApiBaseState<GetDumpRegister>, ErrorModel> {
    return useQuery<ApiBaseState<GetDumpRegister>, ErrorModel>({
        queryKey: ['get-dump-register-by-id'],
        queryFn: () => DumpRegisterServices.getInstance().getDumpRegisterById(id),
        enabled: !!id,
    });
}
