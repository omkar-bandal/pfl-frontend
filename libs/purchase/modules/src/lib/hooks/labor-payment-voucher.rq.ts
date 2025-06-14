import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { LaborPaymentVoucherServices, ILaborPaymentVoucher } from '@prime-fresh/purchase_api';
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

export function useGetAllLaborPaymentVouchers(queryParams?: QueryParams):
    UseQueryResult<ApiBaseState<ILaborPaymentVoucher[]>, ErrorModel> {
    return useQuery<ApiBaseState<ILaborPaymentVoucher[]>, ErrorModel>({
        queryKey: ['get-all-labor-payment-vouchers', queryParams],
        queryFn: () => LaborPaymentVoucherServices.getInstance().getAllLaborPaymentVouchers(queryParams),
    });
}

export function useGetLaborPaymentVoucherById(id: string):
    UseQueryResult<ApiBaseState<ILaborPaymentVoucher>, ErrorModel> {
        const enabled = id.length > 0 ? true : false;
    return useQuery<ApiBaseState<ILaborPaymentVoucher>, ErrorModel>({
        queryKey: ['get-labor-payment-voucher-by-id', enabled],
        queryFn: () => LaborPaymentVoucherServices.getInstance().getLaborPaymentVoucherById(id),
        enabled: enabled,
    });
}

export function useGetLaborPaymentVoucherForViewById(id: string):
    UseQueryResult<ApiBaseState<ILaborPaymentVoucher>, ErrorModel> {
        const enabled = id.length > 0 ? true : false;
    return useQuery<ApiBaseState<ILaborPaymentVoucher>, ErrorModel>({
        queryKey: ['get-labor-payment-voucher-for-view-by-id', id],
        queryFn: () => LaborPaymentVoucherServices.getInstance().getLaborPaymentVoucherForViewById(id),
        enabled: enabled,
    });
}

export function useGetLaborPaymentVoucherForUpdateById(id: string):
    UseQueryResult<ApiBaseState<ILaborPaymentVoucher>, ErrorModel> {
        const enabled = id.length > 0 ? true : false;
    return useQuery<ApiBaseState<ILaborPaymentVoucher>, ErrorModel>({
        queryKey: ['get-labor-payment-voucher-for-update-by-id', id],
        queryFn: () => LaborPaymentVoucherServices.getInstance().getLaborPaymentVoucherForUpdateById(id),
        enabled: enabled,
    });
}
