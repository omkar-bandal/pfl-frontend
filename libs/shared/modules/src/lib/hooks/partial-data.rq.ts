import { useQuery, UseQueryResult } from '@tanstack/react-query';
import {
  ApiBaseState,
  QueryParams,
  ErrorModel,
  PartialDataService,
  IProduct,
  UOMPartialData,
  FarmerPartialData,
  ProductPartialData,
  VendorPartialData,
  CustomerPartialData,
  CustomerNames,
  PackagingMaterialPartialData,
  LocationPartialData,
  EmployeePartialData,
  VariantPartialData,
} from '@prime-fresh/services';

//Employees
export const useGetEmployeePartialData = (
  queryParams?: Partial<QueryParams>,
  search?: string | null
): UseQueryResult<ApiBaseState<EmployeePartialData[]>, ErrorModel> => {
  return useQuery<ApiBaseState<EmployeePartialData[]>, ErrorModel>({
    queryKey: ['get-employee-partial-data', queryParams, search],
    queryFn: () => PartialDataService.getInstance().getEmployeePartialData(queryParams, search),
  });
};

//Product
export function useGetProductsPartialData(
  queryParams?: Partial<QueryParams>,
  search?: string | null
): UseQueryResult<ApiBaseState<ProductPartialData[]>, ErrorModel> {
  return useQuery<ApiBaseState<ProductPartialData[]>, ErrorModel>({
    queryKey: ['get-products-partial-data', queryParams, search],
    queryFn: () => PartialDataService.getInstance().getProductsPatrialData(queryParams, search),
  });
}

export function useGetProductsPartialDataById(
  id: string
): UseQueryResult<ApiBaseState<ProductPartialData>, ErrorModel> {
  const enabled = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<ProductPartialData>, ErrorModel>({
    queryKey: ['search-product', id],
    queryFn: () => PartialDataService.getInstance().getProductsPatrialDataById(id),
    enabled: enabled,
  });
}

export function useSearchProductData(query: string): UseQueryResult<ApiBaseState<ProductPartialData[]>, ErrorModel> {
  const enabled = query.length > 1 ? true : false;
  return useQuery<ApiBaseState<ProductPartialData[]>, ErrorModel>({
    queryKey: ['search-product', query],
    queryFn: () => PartialDataService.getInstance().searchProductDataByQuery(query),
    enabled: enabled,
  });
}

export function useSearchProductAllData(query: string): UseQueryResult<ApiBaseState<IProduct[]>, ErrorModel> {
  const enabled = query.length > 1 ? true : false;
  return useQuery<ApiBaseState<IProduct[]>, ErrorModel>({
    queryKey: ['search-product-all-data', query],
    queryFn: () => PartialDataService.getInstance().searchProductAllDataByQuery(query),
    enabled: enabled,
  });
}

//Variant

export function useGetVariantsByProductId(
  productId: string | null
): UseQueryResult<ApiBaseState<{ variants: VariantPartialData[] }>, ErrorModel> {
  return useQuery<ApiBaseState<{ variants: VariantPartialData[] }>, ErrorModel>({
    queryKey: ['get-variants-by-product-id', productId],
    queryFn: () => PartialDataService.getInstance().getVariantsByProductId(productId),
    enabled: productId !== null ? true : false,
  });
}

//Packaging Material

export function useGetPackagingMaterialPartialData(): UseQueryResult<
  ApiBaseState<PackagingMaterialPartialData[]>,
  ErrorModel
> {
  return useQuery<ApiBaseState<PackagingMaterialPartialData[]>, ErrorModel>({
    queryKey: ['get-packaging-material-partial-data'],
    queryFn: () => PartialDataService.getInstance().getPackagingMaterialPatrialData(),
  });
}

//Farmers

export function useGetFarmersPartialData(
  queryParams?: Partial<QueryParams>,
  search?: string | null
): UseQueryResult<ApiBaseState<FarmerPartialData[]>, ErrorModel> {
  return useQuery<ApiBaseState<FarmerPartialData[]>, ErrorModel>({
    queryKey: ['get-farmers-partial-data', queryParams, search],
    queryFn: () => PartialDataService.getInstance().getFarmersPatrialData(queryParams, search),
  });
}

export function useGetFarmersPartialDataById(
  id: string,
  source: 'vendor' | 'farmer' | undefined
): UseQueryResult<ApiBaseState<FarmerPartialData>, ErrorModel> {
  const enabled = id.length > 1 && source === 'farmer' ? true : false;
  return useQuery<ApiBaseState<FarmerPartialData>, ErrorModel>({
    queryKey: ['search-farmer', id, source],
    queryFn: () => PartialDataService.getInstance().getFarmersPatrialDataById(id),
    enabled: enabled,
  });
}

export function useSearchFarmerData(query: string): UseQueryResult<ApiBaseState<FarmerPartialData[]>, ErrorModel> {
  const enabled = query.length > 1 ? true : false;
  return useQuery<ApiBaseState<FarmerPartialData[]>, ErrorModel>({
    queryKey: ['search-farmer', query],
    queryFn: () => PartialDataService.getInstance().searchFarmerDataByQuery(query),
    enabled: enabled,
  });
}

//Vendors

export function useGetVendorsPartialData(
  queryParams?: Partial<QueryParams>,
  search?: string | null
): UseQueryResult<ApiBaseState<VendorPartialData[]>, ErrorModel> {
  return useQuery<ApiBaseState<VendorPartialData[]>, ErrorModel>({
    queryKey: ['get-vendors-partial-data', queryParams, search],
    queryFn: () => PartialDataService.getInstance().getVendorsPatrialData(queryParams, search),
  });
}

export function useGetVendorsPartialDataById(
  id: string,
  source: 'vendor' | 'farmer' | undefined
): UseQueryResult<ApiBaseState<VendorPartialData>, ErrorModel> {
  const enabled = id.length > 1 && source === 'vendor' ? true : false;
  return useQuery<ApiBaseState<VendorPartialData>, ErrorModel>({
    queryKey: ['search-vendor', id, source],
    queryFn: () => PartialDataService.getInstance().getVendorsPatrialDataById(id),
    enabled: enabled,
  });
}

export function useSearchVendorData(query: string): UseQueryResult<ApiBaseState<VendorPartialData[]>, ErrorModel> {
  const enabled = query.length > 1 ? true : false;
  return useQuery<ApiBaseState<VendorPartialData[]>, ErrorModel>({
    queryKey: ['search-vendor', query],
    queryFn: () => PartialDataService.getInstance().searchVendorDataByQuery(query),
    enabled: enabled,
  });
}

//Customers

export function useGetCustomerPartialData(
  customerId: string
): UseQueryResult<ApiBaseState<CustomerPartialData>, ErrorModel> {
  return useQuery<ApiBaseState<CustomerPartialData>, ErrorModel>({
    queryKey: ['get-customers-partial-data', customerId],
    queryFn: () => PartialDataService.getInstance().getCustomerPatrialData(customerId),
    enabled: !!customerId,
  });
}

export function useGetCustomerNames(): UseQueryResult<ApiBaseState<CustomerNames[]>, ErrorModel> {
  return useQuery<ApiBaseState<CustomerNames[]>, ErrorModel>({
    queryKey: ['get-customer-names'],
    queryFn: () => PartialDataService.getInstance().getAllCustomerNames(),
  });
}

//UOMs

export function useGetUOMPartialData(): UseQueryResult<ApiBaseState<UOMPartialData[]>, ErrorModel> {
  return useQuery<ApiBaseState<UOMPartialData[]>, ErrorModel>({
    queryKey: ['get-uom-partial-data'],
    queryFn: () => PartialDataService.getInstance().getUOMPartialData(),
  });
}

//Locations

export function useGetBranchesPartialData(): UseQueryResult<ApiBaseState<LocationPartialData[]>, ErrorModel> {
  return useQuery<ApiBaseState<LocationPartialData[]>, ErrorModel>({
    queryKey: ['get-branches-partial-data'],
    queryFn: () => PartialDataService.getInstance().getBranchPartialData(),
  });
}

export function useGetOfficesPartialData(): UseQueryResult<ApiBaseState<LocationPartialData[]>, ErrorModel> {
  return useQuery<ApiBaseState<LocationPartialData[]>, ErrorModel>({
    queryKey: ['get-offices-partial-data'],
    queryFn: () => PartialDataService.getInstance().getOfficePartialData(),
  });
}
