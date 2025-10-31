import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';
import {
  MultiCashVoucherServices,
  IMultiCashVoucher,
  ApiBaseState,
  ErrorModel,
  QueryParams,
  ResultModel,
} from '@prime-fresh/services';

export function useCreateMultiCashVoucher(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['create-multi-cash-voucher'],
    mutationFn: (data) => MultiCashVoucherServices.getInstance().createMultiCashVoucher(data),
  });
}

export function useUpdateMultiCashVoucherById(
  id: string
): UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['update-multi-cash-voucher-by-id'],
    mutationFn: (data) => MultiCashVoucherServices.getInstance().updateMultiCashVoucher(id, data),
  });
}

export function useDeleteMultiCashVoucherById(
  id: string
): UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['delete-multi-cash-voucher-by-id'],
    mutationFn: () => MultiCashVoucherServices.getInstance().deleteMultiCashVoucherById(id),
  });
}

export function useDeleteMultipleMultiCashVouchers(): UseMutationResult<
  ResultModel,
  ErrorModel,
  Array<string>,
  unknown
> {
  return useMutation<ResultModel, ErrorModel, Array<string>, unknown>({
    mutationKey: ['delete-multiple-multi-cash-vouchers'],
    mutationFn: (data: Array<string>) => MultiCashVoucherServices.getInstance().deleteMultipleMultiCashVouchers(data),
  });
}

export function useGetAllMultiCashVouchers(
  queryParams?: QueryParams,
  search?: string | null
): UseQueryResult<ApiBaseState<IMultiCashVoucher[]>, ErrorModel> {
  return useQuery<ApiBaseState<IMultiCashVoucher[]>, ErrorModel>({
    queryKey: ['get-all-multi-cash-vouchers', queryParams, search],
    queryFn: () => MultiCashVoucherServices.getInstance().getAllMultiCashVouchers(queryParams, search),
  });
}

export function useGetMultiCashVoucherForViewById(
  id: string
): UseQueryResult<ApiBaseState<IMultiCashVoucher>, ErrorModel> {
  const enabled = id.length > 0 ? true : false;
  return useQuery<ApiBaseState<IMultiCashVoucher>, ErrorModel>({
    queryKey: ['get-multi-cash-voucher-for-view-by-id', id],
    queryFn: () => MultiCashVoucherServices.getInstance().getMultiCashVoucherForViewById(id),
    enabled: enabled,
  });
}

export function useGetMultiCashVoucherForUpdateById(
  id: string
): UseQueryResult<ApiBaseState<IMultiCashVoucher>, ErrorModel> {
  const enabled = id.length > 0 ? true : false;
  return useQuery<ApiBaseState<IMultiCashVoucher>, ErrorModel>({
    queryKey: ['get-multi-cash-voucher-for-update-by-id', id],
    queryFn: () => MultiCashVoucherServices.getInstance().getMultiCashVoucherForUpdateById(id),
    enabled: enabled,
  });
}
