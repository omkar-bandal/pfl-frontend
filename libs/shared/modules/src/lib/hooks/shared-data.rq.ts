import {
  GetPackagingMaterial,
  GetUOM,
  PackagingMaterialService,
  QueryParams,
  SharedService,
  UOMService,
} from '@prime-fresh/services';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { ApiBaseState, ErrorModel } from '@prime-fresh/services';
import { CompanyNamesData, AllCompaniesData, INotification, GetAddressByPincode } from '../models';

//Address by pincode
export const useGetAddressByPincode = (pincode: string | null): UseQueryResult<GetAddressByPincode, ErrorModel> => {
  return useQuery<GetAddressByPincode, ErrorModel>({
    queryKey: ['get-address-by-pincode', pincode],
    queryFn: () => SharedService.getInstance().getAddressByPincode(pincode),
    enabled: pincode !== null ? true : false,
  });
};

//All Notifications
export const useGetUserNotifications = (): UseQueryResult<ApiBaseState<INotification[]>, ErrorModel> => {
  return useQuery<ApiBaseState<INotification[]>, ErrorModel>({
    queryKey: ['user-notifications'],
    queryFn: () => SharedService.getInstance().getAllUserNotifications(),
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
};

//Company Details
export function useGetAllCompaniesData(): UseQueryResult<ApiBaseState<AllCompaniesData[]>, ErrorModel> {
  return useQuery<ApiBaseState<AllCompaniesData[]>, ErrorModel>({
    queryKey: ['get-all-companies-data'],
    queryFn: () => SharedService.getInstance().getAllCompaniesData(),
  });
}

export function useGetCompanyNames(): UseQueryResult<ApiBaseState<CompanyNamesData[]>, ErrorModel> {
  return useQuery<ApiBaseState<CompanyNamesData[]>, ErrorModel>({
    queryKey: ['get-company-names'],
    queryFn: () => SharedService.getInstance().getCompanyNames(),
  });
}

//UOM
export function useGetUOMById(id: string): UseQueryResult<ApiBaseState<GetUOM>, ErrorModel> {
  return useQuery<ApiBaseState<GetUOM>, ErrorModel>({
    queryKey: ['get-uom-by-id'],
    queryFn: () => UOMService.getInstance().getUOMById(id),
    enabled: !!id,
  });
}

//Packing Material
export function useGetAllPackagingMaterials(
  queryParams?: QueryParams,
  search?: string | null
): UseQueryResult<ApiBaseState<GetPackagingMaterial[]>, ErrorModel> {
  return useQuery<ApiBaseState<GetPackagingMaterial[]>, ErrorModel>({
    queryKey: ['get-all-packaging-materials', queryParams, search],
    queryFn: () => PackagingMaterialService.getInstance().getAllPackagingMaterials(queryParams, search),
  });
}
