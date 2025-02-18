import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { PackingMeterialPaymentVoucherServices, GetPMPvoucher } from '@prime-fresh/purchase_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreatePackingMeterialPaymentVoucher():
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['create-packing-material-payment-voucher'],
        mutationFn: (data) =>
            PackingMeterialPaymentVoucherServices
                .getInstance()
                .createPackingMeterialPaymentVoucher(data),
    });
}

export function useUpdatePackingMeterialPaymentVoucherById(id: string):
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['update-packing-material-payment-voucher-by-id'],
        mutationFn: (data) =>
            PackingMeterialPaymentVoucherServices
                .getInstance()
                .updatePackingMeterialPaymentVoucher(id, data),
    });
}

export function useDeletePackingMeterialPaymentVoucherById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-packing-material-payment-voucher-by-id'],
        mutationFn: () =>
            PackingMeterialPaymentVoucherServices
                .getInstance()
                .deletePackingMeterialPaymentVoucherById(id),
    });
}

export function useGetAllPackingMeterialPaymentVouchers():
    UseQueryResult<ApiBaseState<GetPMPvoucher[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetPMPvoucher[]>, ErrorModel>({
        queryKey: ['get-all-packing-material-payment-vouchers'],
        queryFn: () =>
            PackingMeterialPaymentVoucherServices
                .getInstance()
                .getAllPackingMeterialPaymentVouchers(),
    });
}

export function useGetPackingMeterialPaymentVoucherById(id: string):
    UseQueryResult<ApiBaseState<GetPMPvoucher>, ErrorModel> {
    return useQuery<ApiBaseState<GetPMPvoucher>, ErrorModel>({
        queryKey: ['get-packing-material-payment-voucher-by-id'],
        queryFn: () =>
            PackingMeterialPaymentVoucherServices
                .getInstance()
                .GetPackingMeterialPaymentVoucherById(id),
        enabled: !!id,
    });
}
