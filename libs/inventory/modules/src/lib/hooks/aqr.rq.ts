import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { AQRServices, IAQR } from '@prime-fresh/inventory_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateAQR():
  UseMutationResult<ResultModel, ErrorModel, Partial<IAQR>, unknown> {
  return useMutation<ResultModel, ErrorModel, Partial<IAQR>, unknown>({
    mutationKey: ['create-aqr'],
    mutationFn: (data) => AQRServices.getInstance().createAQR(data),
  });
}

export function useUpdateAQR(id: string):
  UseMutationResult<ResultModel, ErrorModel, IAQR, unknown> {
  return useMutation<ResultModel, ErrorModel, IAQR, unknown>({
    mutationKey: ['update-aqr'],
    mutationFn: (data) => AQRServices.getInstance().updateAQR(id, data),
  });
}

export function useDeleteAQRById(id: string):
  UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['delete-aqr-by-id'],
    mutationFn: () => AQRServices.getInstance().deleteAQRById(id),
  });
}

export function useGetAllAQRs(queryParams?: QueryParams, search?: string | null):
  UseQueryResult<ApiBaseState<IAQR[]>, ErrorModel> {
  return useQuery<ApiBaseState<IAQR[]>, ErrorModel>({
    queryKey: ['get-all-aqrs', queryParams, search],
    queryFn: () => AQRServices.getInstance().getAllAQRs(queryParams, search),
  });
}

export function useGetAQRForUpdateById(id: string):
  UseQueryResult<ApiBaseState<IAQR>, ErrorModel> {
  const enabled = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<IAQR>, ErrorModel>({
    queryKey: ['get-aqr-for-update-by-id', enabled],
    queryFn: () => AQRServices.getInstance().getAQRForUpdateById(id),
    enabled: enabled,
  });
}

export function useGetAQRForViewById(id: string):
  UseQueryResult<ApiBaseState<IAQR>, ErrorModel> {
  const enabled = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<IAQR>, ErrorModel>({
    queryKey: ['get-aqr-for-view-by-id', enabled],
    queryFn: () => AQRServices.getInstance().getAQRForViewById(id),
    enabled: enabled,
  });
}
