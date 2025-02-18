import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { LaborPaymentVoucherServices, GetLPvoucher } from '@prime-fresh/purchase_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateLaborPaymentVoucher():
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['create-labor-payment-voucher'],
        mutationFn: (data) => LaborPaymentVoucherServices.getInstance().createLaborPaymentVoucher(data),
    });
}

export function useUpdateLaborPaymentVoucherById(id: string):
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['update-labor-payment-voucher-by-id'],
        mutationFn: (data) => LaborPaymentVoucherServices.getInstance().updateLaborPaymentVoucher(id, data),
    });
}

export function useDeleteLaborPaymentVoucherById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-labor-payment-voucher-by-id'],
        mutationFn: () => LaborPaymentVoucherServices.getInstance().deleteLaborPaymentVoucherById(id),
    });
}

export function useGetAllLaborPaymentVouchers():
    UseQueryResult<ApiBaseState<GetLPvoucher[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetLPvoucher[]>, ErrorModel>({
        queryKey: ['get-all-labor-payment-vouchers'],
        queryFn: () => LaborPaymentVoucherServices.getInstance().getAllLaborPaymentVouchers(),
    });
}

export function useGetLaborPaymentVoucherById(id: string):
    UseQueryResult<ApiBaseState<GetLPvoucher>, ErrorModel> {
    return useQuery<ApiBaseState<GetLPvoucher>, ErrorModel>({
        queryKey: ['get-labor-payment-voucher-by-id'],
        queryFn: () => LaborPaymentVoucherServices.getInstance().GetLaborPaymentVoucherById(id),
        enabled: !!id,
    });
}
