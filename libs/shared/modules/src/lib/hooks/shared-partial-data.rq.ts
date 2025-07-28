import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';
import {
  ApiBaseState,
  ErrorModel,
  SharedService,
  CompanyNamesData,
  UOMPartialData,
  FarmerPartialData,
  ProductPartialData,
  VendorPartialData,
  GetAllRFPANums,
  GetAllGRNNums,
  GetAllDealSlipNums,
  GetAllDeliveryChallanNums,
  CustomerPartialData,
  CustomerNames,
  GetDepartment,
  GetProduct,
  PackagingMaterialPartialData,
  AllCompaniesData,
  GetLevels,
  LocationPartialData,
  EmployeePartialData,
  INotification,
  ResultModel,
  ApprovalRequest,
} from '@prime-fresh/common_api';

export const useUpdateDocStatusWithThreeApproval = (id: string): UseMutationResult<ResultModel, ErrorModel, ApprovalRequest, unknown> => {
  return useMutation<ResultModel, ErrorModel, ApprovalRequest, unknown>({
    mutationKey: ['update-doc-status-with-three-approval', id],
    mutationFn: (data) => SharedService.getInstance().updateDocStatusWithThreeApproval(id, data),
  });
};

export const useUpdateDocStatusWithTwoApproval = (id: string): UseMutationResult<ResultModel, ErrorModel, ApprovalRequest, unknown> => {
  return useMutation<ResultModel, ErrorModel, ApprovalRequest, unknown>({
    mutationKey: ['update-doc-status-with-two-approval', id],
    mutationFn: (data) => SharedService.getInstance().updateDocStatusWithTwoApproval(id, data),
  });
};

export const useUpdateDocStatusWithOneApproval = (id: string): UseMutationResult<ResultModel, ErrorModel, ApprovalRequest, unknown> => {
  return useMutation<ResultModel, ErrorModel, ApprovalRequest, unknown>({
    mutationKey: ['update-doc-status-with-one-approval', id],
    mutationFn: (data) => SharedService.getInstance().updateDocStatusWithOneApproval(id, data),
  });
};

export const useGetUserNotifications = (): UseQueryResult<ApiBaseState<INotification[]>, ErrorModel> => {
  return useQuery<ApiBaseState<INotification[]>, ErrorModel>({
    queryKey: ['user-notifications'],
    queryFn: () => SharedService.getInstance().getAllUserNotifications(),
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })
}

export const useGetEmployeePartialData = (): UseQueryResult<ApiBaseState<EmployeePartialData[]>, ErrorModel> => {
  return useQuery<ApiBaseState<EmployeePartialData[]>, ErrorModel>({
    queryKey: ['get-employee-partial-data'],
    queryFn: () => SharedService.getInstance().getEmployeePartialData(),
  });
};

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

export function useGetAllLevels(): UseQueryResult<ApiBaseState<GetLevels[]>, ErrorModel> {
  return useQuery<ApiBaseState<GetLevels[]>, ErrorModel>({
    queryKey: ['get-levels'],
    queryFn: () => SharedService.getInstance().getAllLevels(),
  });
}

export function useGetDepartmentById(deptId: string): UseQueryResult<ApiBaseState<GetDepartment>, ErrorModel> {
  const enabled = deptId.length > 1 ? true : false;
  return useQuery<ApiBaseState<GetDepartment>, ErrorModel>({
    queryKey: ['get-department-by-id'],
    queryFn: () => SharedService.getInstance().getDepartmentById(deptId),
    enabled: enabled,
  });
}

//Product

export function useGetProductsPartialData(): UseQueryResult<ApiBaseState<ProductPartialData[]>, ErrorModel> {
  return useQuery<ApiBaseState<ProductPartialData[]>, ErrorModel>({
    queryKey: ['get-products-partial-data'],
    queryFn: () => SharedService.getInstance().getProductsPatrialData(),
  });
}

export function useGetProductsPartialDataById(
  id: string
): UseQueryResult<ApiBaseState<ProductPartialData>, ErrorModel> {
  const enabled = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<ProductPartialData>, ErrorModel>({
    queryKey: ['search-product', id],
    queryFn: () => SharedService.getInstance().getProductsPatrialDataById(id),
    enabled: enabled,
  });
}

export function useSearchProductData(query: string): UseQueryResult<ApiBaseState<ProductPartialData[]>, ErrorModel> {
  const enabled = query.length > 1 ? true : false;
  return useQuery<ApiBaseState<ProductPartialData[]>, ErrorModel>({
    queryKey: ['search-product', query],
    queryFn: () => SharedService.getInstance().searchProductDataByQuery(query),
    enabled: enabled,
  });
}

export function useSearchProductAllData(query: string): UseQueryResult<ApiBaseState<GetProduct[]>, ErrorModel> {
  const enabled = query.length > 1 ? true : false;
  return useQuery<ApiBaseState<GetProduct[]>, ErrorModel>({
    queryKey: ['search-product-all-data', query],
    queryFn: () => SharedService.getInstance().searchProductAllDataByQuery(query),
    enabled: enabled,
  });
}

//Packaging Material

export function useGetPackagingMaterialPartialData(): UseQueryResult<
  ApiBaseState<PackagingMaterialPartialData[]>,
  ErrorModel
> {
  return useQuery<ApiBaseState<PackagingMaterialPartialData[]>, ErrorModel>({
    queryKey: ['get-packaging-material-partial-data'],
    queryFn: () => SharedService.getInstance().getPackagingMaterialPatrialData(),
  });
}

//Farmers

export function useGetFarmersPartialData(): UseQueryResult<ApiBaseState<FarmerPartialData[]>, ErrorModel> {
  return useQuery<ApiBaseState<FarmerPartialData[]>, ErrorModel>({
    queryKey: ['get-farmers-partial-data'],
    queryFn: () => SharedService.getInstance().getFarmersPatrialData(),
  });
}

export function useGetFarmersPartialDataById(
  id: string,
  source: 'vendor' | 'farmer' | undefined
): UseQueryResult<ApiBaseState<FarmerPartialData>, ErrorModel> {
  const enabled = id.length > 1 && source === 'farmer' ? true : false;
  return useQuery<ApiBaseState<FarmerPartialData>, ErrorModel>({
    queryKey: ['search-farmer', id, source],
    queryFn: () => SharedService.getInstance().getFarmersPatrialDataById(id),
    enabled: enabled,
  });
}

export function useSearchFarmerData(query: string): UseQueryResult<ApiBaseState<FarmerPartialData[]>, ErrorModel> {
  const enabled = query.length > 1 ? true : false;
  return useQuery<ApiBaseState<FarmerPartialData[]>, ErrorModel>({
    queryKey: ['search-farmer', query],
    queryFn: () => SharedService.getInstance().searchFarmerDataByQuery(query),
    enabled: enabled,
  });
}

//Vendors

export function useGetVendorsPartialData(): UseQueryResult<ApiBaseState<VendorPartialData[]>, ErrorModel> {
  return useQuery<ApiBaseState<VendorPartialData[]>, ErrorModel>({
    queryKey: ['get-vendors-partial-data'],
    queryFn: () => SharedService.getInstance().getVendorsPatrialData(),
  });
}

export function useGetVendorsPartialDataById(
  id: string,
  source: 'vendor' | 'farmer' | undefined
): UseQueryResult<ApiBaseState<VendorPartialData>, ErrorModel> {
  const enabled = id.length > 1 && source === 'vendor' ? true : false;
  return useQuery<ApiBaseState<VendorPartialData>, ErrorModel>({
    queryKey: ['search-vendor', id, source],
    queryFn: () => SharedService.getInstance().getVendorsPatrialDataById(id),
    enabled: enabled,
  });
}

export function useSearchVendorData(query: string): UseQueryResult<ApiBaseState<VendorPartialData[]>, ErrorModel> {
  const enabled = query.length > 1 ? true : false;
  return useQuery<ApiBaseState<VendorPartialData[]>, ErrorModel>({
    queryKey: ['search-vendor', query],
    queryFn: () => SharedService.getInstance().searchVendorDataByQuery(query),
    enabled: enabled,
  });
}

//Customers

export function useGetCustomerPartialData(
  customerId: string
): UseQueryResult<ApiBaseState<CustomerPartialData>, ErrorModel> {
  return useQuery<ApiBaseState<CustomerPartialData>, ErrorModel>({
    queryKey: ['get-customers-partial-data', customerId],
    queryFn: () => SharedService.getInstance().getCustomerPatrialData(customerId),
    enabled: !!customerId,
  });
}

export function useGetCustomerNames(): UseQueryResult<ApiBaseState<CustomerNames[]>, ErrorModel> {
  return useQuery<ApiBaseState<CustomerNames[]>, ErrorModel>({
    queryKey: ['get-customer-names'],
    queryFn: () => SharedService.getInstance().getAllCustomerNames(),
  });
}

//UOMs

export function useGetUOMPartialData(): UseQueryResult<ApiBaseState<UOMPartialData[]>, ErrorModel> {
  return useQuery<ApiBaseState<UOMPartialData[]>, ErrorModel>({
    queryKey: ['get-uom-partial-data'],
    queryFn: () => SharedService.getInstance().getUOMPartialData(),
  });
}

//Locations

export function useGetBranchesPartialData(): UseQueryResult<ApiBaseState<LocationPartialData[]>, ErrorModel> {
  return useQuery<ApiBaseState<LocationPartialData[]>, ErrorModel>({
    queryKey: ['get-branches-partial-data'],
    queryFn: () => SharedService.getInstance().getBranchPartialData(),
  });
}

export function useGetOfficesPartialData(): UseQueryResult<ApiBaseState<LocationPartialData[]>, ErrorModel> {
  return useQuery<ApiBaseState<LocationPartialData[]>, ErrorModel>({
    queryKey: ['get-offices-partial-data'],
    queryFn: () => SharedService.getInstance().getOfficePartialData(),
  });
}

//Numbers

export function useGetAllRFPANums(): UseQueryResult<ApiBaseState<GetAllRFPANums[]>, ErrorModel> {
  return useQuery<ApiBaseState<GetAllRFPANums[]>, ErrorModel>({
    queryKey: ['get-rfpa-nums'],
    queryFn: () => SharedService.getInstance().getRFPANums(),
  });
}

export function useGetAllGRNNums(): UseQueryResult<ApiBaseState<GetAllGRNNums[]>, ErrorModel> {
  return useQuery<ApiBaseState<GetAllGRNNums[]>, ErrorModel>({
    queryKey: ['get-grn-nums'],
    queryFn: () => SharedService.getInstance().getGRNNums(),
  });
}

export function useGetAllDealSlipNums(): UseQueryResult<ApiBaseState<GetAllDealSlipNums[]>, ErrorModel> {
  return useQuery<ApiBaseState<GetAllDealSlipNums[]>, ErrorModel>({
    queryKey: ['get-deal-slip-nums'],
    queryFn: () => SharedService.getInstance().getDealSlipNums(),
  });
}

export function useGetAllDeliveryChallanNums(): UseQueryResult<ApiBaseState<GetAllDeliveryChallanNums[]>, ErrorModel> {
  return useQuery<ApiBaseState<GetAllDeliveryChallanNums[]>, ErrorModel>({
    queryKey: ['get-delivery-challan-nums'],
    queryFn: () => SharedService.getInstance().getDeliveryChallanNums(),
  });
}
