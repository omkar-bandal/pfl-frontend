import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { SecondSaleRegisterServices, ISecondSaleRegister } from '@prime-fresh/inventory_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateSecondSaleRegister():
    UseMutationResult<ResultModel, ErrorModel, Omit<ISecondSaleRegister, 'id'>, unknown> {
    return useMutation<ResultModel, ErrorModel, Omit<ISecondSaleRegister, 'id'>, unknown>({
        mutationKey: ['create-second-sale-register'],
        mutationFn: (data) => SecondSaleRegisterServices.getInstance().createSecondSaleRegister(data),
    });
}

export function useUpdateSecondSaleRegister(id: string):
    UseMutationResult<ResultModel, ErrorModel, ISecondSaleRegister, unknown> {
    return useMutation<ResultModel, ErrorModel, ISecondSaleRegister, unknown>({
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

export function useGetAllSecondSaleRegisters(queryParams?: QueryParams):
    UseQueryResult<ApiBaseState<ISecondSaleRegister[]>, ErrorModel> {
    return useQuery<ApiBaseState<ISecondSaleRegister[]>, ErrorModel>({
        queryKey: ['get-all-second-sale-registers', queryParams],
        queryFn: () => SecondSaleRegisterServices.getInstance().getAllSecondSaleRegisters(queryParams),
    });
}

export function useGetSecondSaleRegisterForViewById(id: string):
    UseQueryResult<ApiBaseState<ISecondSaleRegister>, ErrorModel> {
    const enabled = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<ISecondSaleRegister>, ErrorModel>({
        queryKey: ['get-second-sale-register-for-view', enabled],
        queryFn: () => SecondSaleRegisterServices.getInstance().getSecondSaleRegisterForViewById(id),
        enabled: enabled,
    });
}

export function useGetSecondSaleRegisterForUpdateById(id: string):
    UseQueryResult<ApiBaseState<ISecondSaleRegister>, ErrorModel> {
    const enabled = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<ISecondSaleRegister>, ErrorModel>({
        queryKey: ['get-second-sale-register-for-update', enabled],
        queryFn: () => SecondSaleRegisterServices.getInstance().getSecondSaleRegisterForUpdateById(id),
        enabled: enabled,
    });
}
