import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { MultiCashVoucherServices, GetMCvoucher } from '@prime-fresh/purchase_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateMultiCashVoucher():
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['create-multi-cash-voucher'],
        mutationFn: (data) => MultiCashVoucherServices.getInstance().createMultiCashVoucher(data),
    });
}

export function useUpdateMultiCashVoucherById(id: string):
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['update-multi-cash-voucher-by-id'],
        mutationFn: (data) => MultiCashVoucherServices.getInstance().updateMultiCashVoucher(id, data),
    });
}

export function useDeleteMultiCashVoucherById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-multi-cash-voucher-by-id'],
        mutationFn: () => MultiCashVoucherServices.getInstance().deleteMultiCashVoucherById(id),
    });
}

export function useGetAllMultiCashVouchers():
    UseQueryResult<ApiBaseState<GetMCvoucher[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetMCvoucher[]>, ErrorModel>({
        queryKey: ['get-all-multi-cash-vouchers'],
        queryFn: () => MultiCashVoucherServices.getInstance().getAllMultiCashVouchers(),
    });
}

export function useGetMultiCashVoucherById(id: string):
    UseQueryResult<ApiBaseState<GetMCvoucher>, ErrorModel> {
    return useQuery<ApiBaseState<GetMCvoucher>, ErrorModel>({
        queryKey: ['get-multi-cash-voucher-by-id'],
        queryFn: () => MultiCashVoucherServices.getInstance().getMultiCashVoucherById(id),
        enabled: !!id,
    });
}
