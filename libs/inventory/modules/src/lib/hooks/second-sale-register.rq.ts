import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { SecondSaleRegisterServices, PostSecondSaleRegister, GetSecondSaleRegister } from '@prime-fresh/inventory_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateSecondSaleRegister():
    UseMutationResult<ResultModel, ErrorModel, PostSecondSaleRegister, unknown> {
    return useMutation<ResultModel, ErrorModel, PostSecondSaleRegister, unknown>({
        mutationKey: ['create-second-sale-register'],
        mutationFn: (data) => SecondSaleRegisterServices.getInstance().createSecondSaleRegister(data),
    });
}

export function useUpdateSecondSaleRegister(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetSecondSaleRegister, unknown> {
    return useMutation<ResultModel, ErrorModel, GetSecondSaleRegister, unknown>({
        mutationKey: ['update-second-sale-register'],
        mutationFn: (data) => SecondSaleRegisterServices.getInstance().updateSecondSaleRegister(id, data),
    });
}

export function useDeleteSecondSaleRegisterById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-second-sale-register-by-id'],
        mutationFn: () => SecondSaleRegisterServices.getInstance().deleteSecondSaleRegisterById(id),
    });
}

export function useGetAllSecondSaleRegisters():
    UseQueryResult<ApiBaseState<GetSecondSaleRegister[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetSecondSaleRegister[]>, ErrorModel>({
        queryKey: ['get-all-second-sale-registers'],
        queryFn: () => SecondSaleRegisterServices.getInstance().getAllSecondSaleRegisters(),
    });
}

export function useGetSecondSaleRegisterById(id: string):
    UseQueryResult<ApiBaseState<GetSecondSaleRegister>, ErrorModel> {
    return useQuery<ApiBaseState<GetSecondSaleRegister>, ErrorModel>({
        queryKey: ['get-second-sale-register-by-id'],
        queryFn: () => SecondSaleRegisterServices.getInstance().getSecondSaleRegisterById(id),
        enabled: !!id,
    });
}
