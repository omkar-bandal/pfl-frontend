import { sharedApiUrls } from '../constants';
import { IVendor, QueryParams, StatusType } from '../models';
import { ApiBaseState, BaseService, buildApiUrl, ResultModel } from '../../base';
import { GetVendorCategory, GetVendorSubcategory } from '../../admin';

export class VendorsService extends BaseService {
  private static _instance: VendorsService;

  public static getInstance(): VendorsService {
    return this._instance || (this._instance = new this());
  }

  createVendor(data: FormData): Promise<ResultModel> {
    const url = sharedApiUrls.CREATE_VENDOR;
    return this.postFormData(url, data);
  }

  getAllVendors(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<IVendor[]>> {
    const url = buildApiUrl(sharedApiUrls.GET_ALL_VENDORS, null, queryParams, search);
    return this.get(url);
  }

  getVendorById(id: string): Promise<ApiBaseState<IVendor>> {
    const url = buildApiUrl(sharedApiUrls.GET_A_VENDOR, id);
    return this.get(url);
  }

  getVendorByIdForView(id: string): Promise<ApiBaseState<IVendor>> {
    const url = buildApiUrl(sharedApiUrls.GET_A_VENDOR_FOR_VIEW, id);
    return this.get(url);
  }

  getVendorByIdForUpdate(id: string): Promise<ApiBaseState<IVendor>> {
    const url = buildApiUrl(sharedApiUrls.GET_A_VENDOR_FOR_UPDATE, id);
    return this.get(url);
  }

  updateVendor(id: string, data: FormData): Promise<ResultModel> {
    const url = buildApiUrl(sharedApiUrls.UPDATE_VENDOR, id);
    return this.putFormData(url, data);
  }

  deleteVendorById(id: string): Promise<ResultModel> {
    const url = buildApiUrl(sharedApiUrls.DELETE_VENDOR, id);
    return this.delete(url);
  }

  changeStatusOfVendor(id: string, status: StatusType): Promise<ResultModel> {
    const url = `${sharedApiUrls.CHANGE_STATUS_VENDOR}/${id}?status=${status}`;
    return this.patch(url);
  }

  getAllVendorCategories(
    queryParams?: QueryParams,
    search?: string | null
  ): Promise<ApiBaseState<GetVendorCategory[]>> {
    const url = buildApiUrl(sharedApiUrls.GET_ALL_VENDOR_CAT, null, queryParams, search);
    return this.get(url);
  }

  getVendorSubcategoryByQuery(query: string): Promise<ApiBaseState<GetVendorSubcategory[]>> {
    const url = `${sharedApiUrls.GET_VENDOR_SUBCAT_BY_QUERY}?search=${query}`;
    return this.get(url);
  }
}
