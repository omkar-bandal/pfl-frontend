import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { MultiCashVoucherServices, IMultiCashVoucher } from '@prime-fresh/purchase_api';
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

export function useGetAllMultiCashVouchers(queryParams? : QueryParams):
    UseQueryResult<ApiBaseState<IMultiCashVoucher[]>, ErrorModel> {
    return useQuery<ApiBaseState<IMultiCashVoucher[]>, ErrorModel>({
        queryKey: ['get-all-multi-cash-vouchers', queryParams],
        queryFn: () => MultiCashVoucherServices.getInstance().getAllMultiCashVouchers(queryParams),
    });
}

export function useGetMultiCashVoucherForViewById(id: string):
    UseQueryResult<ApiBaseState<IMultiCashVoucher>, ErrorModel> {
        const enabled = id.length > 0 ? true : false;
    return useQuery<ApiBaseState<IMultiCashVoucher>, ErrorModel>({
        queryKey: ['get-multi-cash-voucher-for-view-by-id', id],
        queryFn: () => MultiCashVoucherServices.getInstance().getMultiCashVoucherForViewById(id),
        enabled: enabled,
    });
}

export function useGetMultiCashVoucherForUpdateById(id: string):
    UseQueryResult<ApiBaseState<IMultiCashVoucher>, ErrorModel> {
        const enabled = id.length > 0 ? true : false;
    return useQuery<ApiBaseState<IMultiCashVoucher>, ErrorModel>({
        queryKey: ['get-multi-cash-voucher-for-update-by-id', id],
        queryFn: () => MultiCashVoucherServices.getInstance().getMultiCashVoucherForUpdateById(id),
        enabled: enabled,
    });
}
