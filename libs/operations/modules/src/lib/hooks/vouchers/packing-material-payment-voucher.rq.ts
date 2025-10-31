import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';
import {
  PackingMeterialPaymentVoucherServices,
  IPackingMaterialPaymentVoucher,
  ApiBaseState,
  ErrorModel,
  QueryParams,
  ResultModel,
} from '@prime-fresh/services';

export function useCreatePackingMeterialPaymentVoucher(): UseMutationResult<
  ResultModel,
  ErrorModel,
  FormData,
  unknown
> {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['create-packing-material-payment-voucher'],
    mutationFn: (data) => PackingMeterialPaymentVoucherServices.getInstance().createPackingMeterialPaymentVoucher(data),
  });
}

export function useUpdatePackingMeterialPaymentVoucherById(
  id: string
): UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['update-packing-material-payment-voucher-by-id'],
    mutationFn: (data) =>
      PackingMeterialPaymentVoucherServices.getInstance().updatePackingMeterialPaymentVoucher(id, data),
  });
}

export function useDeletePackingMeterialPaymentVoucherById(
  id: string
): UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['delete-packing-material-payment-voucher-by-id'],
    mutationFn: () => PackingMeterialPaymentVoucherServices.getInstance().deletePackingMeterialPaymentVoucherById(id),
  });
}

export function useDeleteMultiplePackingMeterialPaymentVouchers(): UseMutationResult<
  ResultModel,
  ErrorModel,
  Array<string>,
  unknown
> {
  return useMutation<ResultModel, ErrorModel, Array<string>, unknown>({
    mutationKey: ['delete-multiple-packing-material-payment-vouchers'],
    mutationFn: (data: Array<string>) =>
      PackingMeterialPaymentVoucherServices.getInstance().deleteMultiplePackingMeterialPaymentVouchers(data),
  });
}

export function useGetAllPackingMeterialPaymentVouchers(
  queryParams?: QueryParams,
  search?: string | null
): UseQueryResult<ApiBaseState<IPackingMaterialPaymentVoucher[]>, ErrorModel> {
  return useQuery<ApiBaseState<IPackingMaterialPaymentVoucher[]>, ErrorModel>({
    queryKey: ['get-all-packing-material-payment-vouchers', queryParams, search],
    queryFn: () =>
      PackingMeterialPaymentVoucherServices.getInstance().getAllPackingMeterialPaymentVouchers(queryParams, search),
  });
}

export function useGetPackingMeterialPaymentVoucherForViewById(
  id: string
): UseQueryResult<ApiBaseState<IPackingMaterialPaymentVoucher>, ErrorModel> {
  const enabled = id.length > 0 ? true : false;
  return useQuery<ApiBaseState<IPackingMaterialPaymentVoucher>, ErrorModel>({
    queryKey: ['get-packing-material-payment-voucher-for-view-by-id', id],
    queryFn: () => PackingMeterialPaymentVoucherServices.getInstance().getPackingMeterialPaymentVoucherForViewById(id),
    enabled: enabled,
  });
}

export function useGetPackingMeterialPaymentVoucherForUpdateById(
  id: string
): UseQueryResult<ApiBaseState<IPackingMaterialPaymentVoucher>, ErrorModel> {
  const enabled = id.length > 0 ? true : false;
  return useQuery<ApiBaseState<IPackingMaterialPaymentVoucher>, ErrorModel>({
    queryKey: ['get-packing-material-payment-voucher-for-update-by-id', id],
    queryFn: () =>
      PackingMeterialPaymentVoucherServices.getInstance().getPackingMeterialPaymentVoucherForUpdateById(id),
    enabled: enabled,
  });
}
