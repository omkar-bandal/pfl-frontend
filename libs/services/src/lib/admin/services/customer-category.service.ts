import { QueryParams } from '../../shared';
import { adminApiUrlConstants } from '../constants';
import { GetCustomerCategory, PostCustomerCategory } from '../models';
import { ApiBaseState, BaseService, ResultModel, buildApiUrl } from '../../base';

export class CustomerCategoryService extends BaseService {
  private static _instance: CustomerCategoryService;

  public static getInstance(): CustomerCategoryService {
    return this._instance || (this._instance = new this());
  }

  createCustomerCategory(data: PostCustomerCategory): Promise<ResultModel> {
    const url = adminApiUrlConstants.CREATE_CUSTOMER_CATEGORY;
    return this.post(url, data);
  }

  getAllCustomerCategories(
    queryParams?: QueryParams,
    search?: string | null
  ): Promise<ApiBaseState<GetCustomerCategory[]>> {
    const url = buildApiUrl(adminApiUrlConstants.GET_ALL_CUSTOMER_CATEGORY, null, queryParams, search);
    return this.get(url);
  }

  getCustomerCategoryById(id: string): Promise<ApiBaseState<GetCustomerCategory>> {
    const url = buildApiUrl(adminApiUrlConstants.GET_A_CUSTOMER_CATEGORY, id);
    return this.get(url);
  }

  updateCustomerCategory(id: string, data: GetCustomerCategory): Promise<ResultModel> {
    const url = buildApiUrl(adminApiUrlConstants.UPDATE_CUSTOMER_CATEGORY, id);
    return this.patch(url, data);
  }

  deleteCustomerCategoryById(id: string): Promise<ResultModel> {
    const url = buildApiUrl(adminApiUrlConstants.DELETE_CUSTOMER_CATEGORY, id);
    return this.delete(url);
  }
}
