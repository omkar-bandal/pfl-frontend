import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { TransportPaymentVoucherServices, GetTPvoucher } from '@prime-fresh/purchase_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateTransportPaymentVoucher():
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['create-transport-payment-voucher'],
        mutationFn: (data) => TransportPaymentVoucherServices.getInstance().createTransportPaymentVoucher(data),
    });
}

export function useUpdateTransportPaymentVoucherById(id: string):
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['update-transport-payment-voucher-by-id'],
        mutationFn: (data) => TransportPaymentVoucherServices.getInstance().updateTransportPaymentVoucher(id, data),
    });
}

export function useDeleteTransportPaymentVoucherById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-transport-payment-voucher-by-id'],
        mutationFn: () => TransportPaymentVoucherServices.getInstance().deleteTransportPaymentVoucherById(id),
    });
}

export function useGetAllTransportPaymentVouchers():
    UseQueryResult<ApiBaseState<GetTPvoucher[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetTPvoucher[]>, ErrorModel>({
        queryKey: ['get-all-transport-payment-vouchers'],
        queryFn: () => TransportPaymentVoucherServices.getInstance().getAllTransportPaymentVouchers(),
    });
}

export function useGetTransportPaymentVoucherById(id: string):
    UseQueryResult<ApiBaseState<GetTPvoucher>, ErrorModel> {
    return useQuery<ApiBaseState<GetTPvoucher>, ErrorModel>({
        queryKey: ['get-transport-payment-voucher-by-id'],
        queryFn: () => TransportPaymentVoucherServices.getInstance().GetTransportPaymentVoucherById(id),
        enabled: !!id,
    });
}
