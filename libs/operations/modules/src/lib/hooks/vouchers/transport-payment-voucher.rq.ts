import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';
import {
  TransportPaymentVoucherServices,
  ITranportPaymentVoucher,
  ApiBaseState,
  ErrorModel,
  QueryParams,
  ResultModel,
} from '@prime-fresh/services';

export function useCreateTransportPaymentVoucher(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['create-transport-payment-voucher'],
    mutationFn: (data) => TransportPaymentVoucherServices.getInstance().createTransportPaymentVoucher(data),
  });
}

export function useUpdateTransportPaymentVoucherById(
  id: string
): UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['update-transport-payment-voucher-by-id'],
    mutationFn: (data) => TransportPaymentVoucherServices.getInstance().updateTransportPaymentVoucher(id, data),
  });
}

export function useDeleteTransportPaymentVoucherById(
  id: string
): UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['delete-transport-payment-voucher-by-id'],
    mutationFn: () => TransportPaymentVoucherServices.getInstance().deleteTransportPaymentVoucherById(id),
  });
}

export function useDeleteMultipleTransportPaymentVoucher(): UseMutationResult<
  ResultModel,
  ErrorModel,
  Array<string>,
  unknown
> {
  return useMutation<ResultModel, ErrorModel, Array<string>, unknown>({
    mutationKey: ['delete-multiple-transport-payment-vouchers'],
    mutationFn: (data: Array<string>) =>
      TransportPaymentVoucherServices.getInstance().deleteMultipleTransportPaymentVouchers(data),
  });
}

export function useGetAllTransportPaymentVouchers(
  queryParams?: QueryParams,
  search?: string | null
): UseQueryResult<ApiBaseState<ITranportPaymentVoucher[]>, ErrorModel> {
  return useQuery<ApiBaseState<ITranportPaymentVoucher[]>, ErrorModel>({
    queryKey: ['get-all-transport-payment-vouchers', queryParams, search],
    queryFn: () => TransportPaymentVoucherServices.getInstance().getAllTransportPaymentVouchers(queryParams, search),
  });
}

export function useGetTransportPaymentVoucherById(
  id: string
): UseQueryResult<ApiBaseState<ITranportPaymentVoucher>, ErrorModel> {
  const enabled = id.length > 0 ? true : false;
  return useQuery<ApiBaseState<ITranportPaymentVoucher>, ErrorModel>({
    queryKey: ['get-transport-payment-voucher-by-id', enabled],
    queryFn: () => TransportPaymentVoucherServices.getInstance().getTransportPaymentVoucherById(id),
    enabled: enabled,
  });
}
export function useGetTransportPaymentVoucherForViewById(
  id: string
): UseQueryResult<ApiBaseState<ITranportPaymentVoucher>, ErrorModel> {
  const enabled = id.length > 0 ? true : false;
  return useQuery<ApiBaseState<ITranportPaymentVoucher>, ErrorModel>({
    queryKey: ['get-transport-payment-voucher-for-view-by-id', id],
    queryFn: () => TransportPaymentVoucherServices.getInstance().getTransportPaymentVoucherForViewById(id),
    enabled: enabled,
  });
}
export function useGetTransportPaymentVoucherForUpdateById(
  id: string
): UseQueryResult<ApiBaseState<ITranportPaymentVoucher>, ErrorModel> {
  const enabled = id.length > 0 ? true : false;
  return useQuery<ApiBaseState<ITranportPaymentVoucher>, ErrorModel>({
    queryKey: ['get-transport-payment-voucher-for-update-by-id', id],
    queryFn: () => TransportPaymentVoucherServices.getInstance().getTransportPaymentVoucherForUpdateById(id),
    enabled: enabled,
  });
}
