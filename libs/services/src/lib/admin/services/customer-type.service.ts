import { QueryParams } from '../../shared';
import { adminApiUrlConstants } from '../constants';
import { GetCustomerType, PostCustomerType } from '../models';
import { ApiBaseState, BaseService, ResultModel, buildApiUrl } from '../../base';

export class CustomerTypeService extends BaseService {
  private static _instance: CustomerTypeService;

  public static getInstance(): CustomerTypeService {
    return this._instance || (this._instance = new this());
  }

  createCustomerType(data: PostCustomerType): Promise<ResultModel> {
    const url = adminApiUrlConstants.CREATE_CUSTOMER_TYPE;
    return this.post(url, data);
  }

  getAllCustomerTypes(
    queryParams?: QueryParams,
    search?: string | null
  ): Promise<ApiBaseState<GetCustomerType[]>> {
    const url = buildApiUrl(adminApiUrlConstants.GET_ALL_CUSTOMER_TYPE, null, queryParams, search);
    return this.get(url);
  }

  getCustomerTypeById(id: string): Promise<ApiBaseState<GetCustomerType>> {
    const url = buildApiUrl(adminApiUrlConstants.GET_A_CUSTOMER_TYPE, id);
    return this.get(url);
  }

  updateCustomerType(id: string, data: GetCustomerType): Promise<ResultModel> {
    const url = buildApiUrl(adminApiUrlConstants.UPDATE_CUSTOMER_TYPE, id);
    return this.patch(url, data);
  }

  deleteCustomerTypeById(id: string): Promise<ResultModel> {
    const url = buildApiUrl(adminApiUrlConstants.DELETE_CUSTOMER_TYPE, id);
    return this.delete(url);
  }
}
