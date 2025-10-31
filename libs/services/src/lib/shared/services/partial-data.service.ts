import { sharedApiUrls } from '../constants';
import { buildApiUrl, BaseService, ApiBaseState } from '../../base';
import {
  CustomerNames,
  CustomerPartialData,
  EmployeePartialData,
  FarmerPartialData,
  PackagingMaterialPartialData,
  UOMPartialData,
  VariantPartialData,
  VendorPartialData,
  LocationPartialData,
  QueryParams,
  ProductPartialData,
  IProduct,
} from '../models';

export class PartialDataService extends BaseService {
  public static _instance: PartialDataService;

  public static getInstance(): PartialDataService {
    return this._instance || (this._instance = new this());
  }

  //Employee Partial Data
  getEmployeePartialData(
    queryParams?: Partial<QueryParams>,
    search?: string | null
  ): Promise<ApiBaseState<EmployeePartialData[]>> {
    const url = buildApiUrl(sharedApiUrls.GET_EMPLOYEE_PARTIAL_DATA, null, queryParams, search);
    return this.get(url);
  }

  //Product Partial Data
  getProductsPatrialData(
    queryParams?: Partial<QueryParams>,
    search?: string | null
  ): Promise<ApiBaseState<ProductPartialData[]>> {
    const url = buildApiUrl(sharedApiUrls.GET_PRODUCTS_PARTIAL, null, queryParams, search);
    return this.get(url);
  }

  getProductsPatrialDataById(id: string): Promise<ApiBaseState<ProductPartialData>> {
    const url = `${sharedApiUrls.GET_PRODUCTS_PARTIAL_BY_ID}/${id}`;
    return this.get(url);
  }

  searchProductDataByQuery(query: string): Promise<ApiBaseState<ProductPartialData[]>> {
    const url = `${sharedApiUrls.SEARCH_PRODUCT}${query}`;
    return this.get(url);
  }

  searchProductAllDataByQuery(query: string): Promise<ApiBaseState<IProduct[]>> {
    const url = `${sharedApiUrls.SEARCH_PRODUCT_ALL_DATA}${query}`;
    return this.get(url);
  }

  //Variant Partial Data
  getVariantPartialData(
    queryParams?: Partial<QueryParams>,
    search?: string
  ): Promise<ApiBaseState<VariantPartialData[]>> {
    const url = buildApiUrl(sharedApiUrls.GET_VARIANTS_PARTIAL, null, queryParams, search);
    return this.get(url);
  }

  getVariantsByProductId(productId?: string | null): Promise<ApiBaseState<{ variants: VariantPartialData[] }>> {
    const url = buildApiUrl(sharedApiUrls.GET_VARIANTS_BY_PRODUCT_ID, productId);
    return this.get(url);
  }

  //Packaging Material
  getPackagingMaterialPatrialData(): Promise<ApiBaseState<PackagingMaterialPartialData[]>> {
    const url = sharedApiUrls.GET_PACKAGING_MATERIAL_PARTIAL;
    return this.get(url);
  }

  //Vendor Partial Data
  getVendorsPatrialData(
    queryParams?: Partial<QueryParams>,
    search?: string | null
  ): Promise<ApiBaseState<VendorPartialData[]>> {
    const url = buildApiUrl(sharedApiUrls.GET_VENDORS_PARTIAL, null, queryParams, search);
    return this.get(url);
  }

  getVendorsPatrialDataById(id: string): Promise<ApiBaseState<VendorPartialData>> {
    const url = `${sharedApiUrls.GET_VENDORS_PARTIAL_BY_ID}/${id}`;
    return this.get(url);
  }

  searchVendorDataByQuery(query: string): Promise<ApiBaseState<VendorPartialData[]>> {
    const url = `${sharedApiUrls.SEARCH_VENDOR}${query}`;
    return this.get(url);
  }

  //Farmer Partial Data
  getFarmersPatrialData(
    queryParams?: Partial<QueryParams>,
    search?: string | null
  ): Promise<ApiBaseState<FarmerPartialData[]>> {
    const url = buildApiUrl(sharedApiUrls.GET_FARMERS_PARTIAL, null, queryParams, search);
    return this.get(url);
  }

  getFarmersPatrialDataById(id: string): Promise<ApiBaseState<FarmerPartialData>> {
    const url = `${sharedApiUrls.GET_FARMERS_PARTIAL_BY_ID}/${id}`;
    return this.get(url);
  }

  searchFarmerDataByQuery(query: string): Promise<ApiBaseState<FarmerPartialData[]>> {
    const url = `${sharedApiUrls.SEARCH_FARMER}${query}`;
    return this.get(url);
  }

  //Customer Partial Data
  getCustomerPatrialData(customerId: string): Promise<ApiBaseState<CustomerPartialData>> {
    const url = `${sharedApiUrls.GET_CUSTOMERS_PARTIAL}/${customerId}`;
    return this.get(url);
  }

  getAllCustomerNames(): Promise<ApiBaseState<CustomerNames[]>> {
    const url = sharedApiUrls.GET_CUSTOMER_NAMESL;
    return this.get(url);
  }

  //UoM Partial Data
  getUOMPartialData(): Promise<ApiBaseState<UOMPartialData[]>> {
    const url = sharedApiUrls.GET_UOM_PARTIAL;
    return this.get(url);
  }

  //Location Partial Data
  getBranchPartialData(): Promise<ApiBaseState<LocationPartialData[]>> {
    const url = sharedApiUrls.GET_BRANCHES_PARTIAL;
    return this.get(url);
  }

  getOfficePartialData(): Promise<ApiBaseState<LocationPartialData[]>> {
    const url = sharedApiUrls.GET_OFFICES_PARTIAL;
    return this.get(url);
  }
}
