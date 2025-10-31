import {
  VendorsService,
  IVendor,
  StatusType,
  queryClient,
  GetVendorCategory,
  GetVendorSubcategory,
} from '@prime-fresh/services';
import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/services';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateVendor(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['create-vendor'],
    mutationFn: (data) => VendorsService.getInstance().createVendor(data),
  });
}

export function useUpdateVendorById(id: string): UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['update-vendor-by-id'],
    mutationFn: (data) => VendorsService.getInstance().updateVendor(id, data),
  });
}

export function useDeleteVendorById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['delete-vendor-by-id'],
    mutationFn: () => VendorsService.getInstance().deleteVendorById(id),
  });
}

export function useGetAllVendors(
  queryParams?: QueryParams,
  search?: string | null
): UseQueryResult<ApiBaseState<IVendor[]>, ErrorModel> {
  return useQuery<ApiBaseState<IVendor[]>, ErrorModel>({
    queryKey: ['vendor-get-all', queryParams, search],
    queryFn: () => VendorsService.getInstance().getAllVendors(queryParams, search),
  });
}

export function useGetVendorById(id: string): UseQueryResult<ApiBaseState<IVendor>, ErrorModel> {
  return useQuery<ApiBaseState<IVendor>, ErrorModel>({
    queryKey: ['vendor-get-by-id'],
    queryFn: () => VendorsService.getInstance().getVendorById(id),
    enabled: !!id,
  });
}

export function useGetVendorByIdForView(id: string): UseQueryResult<ApiBaseState<IVendor>, ErrorModel> {
  return useQuery<ApiBaseState<IVendor>, ErrorModel>({
    queryKey: ['vendor-get-by-id'],
    queryFn: () => VendorsService.getInstance().getVendorByIdForView(id),
    enabled: !!id,
  });
}

export function useGetVendorByIdForUpdate(id: string): UseQueryResult<ApiBaseState<IVendor>, ErrorModel> {
  return useQuery<ApiBaseState<IVendor>, ErrorModel>({
    queryKey: ['vendor-get-by-id'],
    queryFn: () => VendorsService.getInstance().getVendorByIdForUpdate(id),
    enabled: !!id,
  });
}

export function useChangeStatusVendor(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['change-vendor-status'],
    mutationFn: (status: StatusType) => VendorsService.getInstance().changeStatusOfVendor(id, status),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['vendor'], exact: false }),
  });
}

export function useGetAllVendorCategories(
  queryParams?: QueryParams,
  search?: string | null
): UseQueryResult<ApiBaseState<GetVendorCategory[]>, ErrorModel> {
  return useQuery<ApiBaseState<GetVendorCategory[]>, ErrorModel>({
    queryKey: ['get-all-vendor-categories', queryParams, search],
    queryFn: () => VendorsService.getInstance().getAllVendorCategories(queryParams, search),
  });
}

export function useGetVendorSubcategoriesByQuery(
  query: string
): UseQueryResult<ApiBaseState<GetVendorSubcategory[]>, ErrorModel> {
  const enabled = query.length > 1 ? true : false;
  return useQuery<ApiBaseState<GetVendorSubcategory[]>, ErrorModel>({
    queryKey: ['get-vendor-subcategories-by-query', query],
    queryFn: () => VendorsService.getInstance().getVendorSubcategoryByQuery(query),
    enabled: enabled,
  });
}
