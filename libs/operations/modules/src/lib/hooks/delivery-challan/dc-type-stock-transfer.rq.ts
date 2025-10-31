import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';
import {
  DCTypeStockTransferServices,
  IDeliveryChallanTypeStockTransfer,
  ApiBaseState,
  ErrorModel,
  QueryParams,
  ResultModel,
} from '@prime-fresh/services';

export const useCreateDCTypeStockTransfer = (): UseMutationResult<ResultModel, ErrorModel, FormData, unknown> => {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['create-dc-type-stock-transfer'],
    mutationFn: (data) => DCTypeStockTransferServices.getInstance().createDCTypeStockTransfer(data),
  });
};

export const useUpdateDCTypeStockTransferById = (
  id: string
): UseMutationResult<ResultModel, ErrorModel, FormData, unknown> => {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['update-dc-type-stock-transfer-by-id'],
    mutationFn: (data) => DCTypeStockTransferServices.getInstance().updateDCTypeStockTransfer(id, data),
  });
};

export const useDeleteDCTypeStockTransferById = (
  id: string
): UseMutationResult<ResultModel, ErrorModel, unknown, unknown> => {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['delete-dc-type-stock-transfer-by-id'],
    mutationFn: () => DCTypeStockTransferServices.getInstance().deleteDCTypeStockTransferById(id),
  });
};

export function useDeleteMultipleDCTypeStockTransfer(): UseMutationResult<
  ResultModel,
  ErrorModel,
  Array<string>,
  unknown
> {
  return useMutation<ResultModel, ErrorModel, Array<string>, unknown>({
    mutationKey: ['delete-multiple-dc-type-stock-transfer'],
    mutationFn: (data: Array<string>) =>
      DCTypeStockTransferServices.getInstance().deleteMultipleDCTypeStockTransfers(data),
  });
}

export const useGetAllDCTypeStockTransfers = (
  queryParams?: QueryParams,
  search?: string | null
): UseQueryResult<ApiBaseState<IDeliveryChallanTypeStockTransfer[]>, ErrorModel> => {
  return useQuery<ApiBaseState<IDeliveryChallanTypeStockTransfer[]>, ErrorModel>({
    queryKey: ['get-all-dc-type-stock-transfer', queryParams, search],
    queryFn: () => DCTypeStockTransferServices.getInstance().getAllDCTypeStockTransfer(queryParams, search),
  });
};

export const useGetDCTypeStockTransferForViewById = (
  id: string
): UseQueryResult<ApiBaseState<IDeliveryChallanTypeStockTransfer>, ErrorModel> => {
  const enabled = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<IDeliveryChallanTypeStockTransfer>, ErrorModel>({
    queryKey: ['get-dc-type-stock-transfer-for-view-by-id', id],
    queryFn: () => DCTypeStockTransferServices.getInstance().getDCTypeStockTransferForViewById(id),
    enabled: enabled,
  });
};

export const useGetDCTypeStockTransferForUpdateById = (
  id: string
): UseQueryResult<ApiBaseState<IDeliveryChallanTypeStockTransfer>, ErrorModel> => {
  const enabled = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<IDeliveryChallanTypeStockTransfer>, ErrorModel>({
    queryKey: ['get-dc-type-stock-transfer-for-update-by-id', id],
    queryFn: () => DCTypeStockTransferServices.getInstance().getDCTypeStockTransferForUpdateById(id),
    enabled: enabled,
  });
};
