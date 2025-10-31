import { sharedApiUrls } from '../constants';
import { ICustomer, QueryParams, StatusType } from '../models';
import { ApiBaseState, BaseService, buildApiUrl, ResultModel } from '../../base';
import { GetCustomerCategory, GetCustomerType } from '../../admin';

export class CustomersService extends BaseService {
  private static _instance: CustomersService;

  public static getInstance(): CustomersService {
    return this._instance || (this._instance = new this());
  }

  createCustomer(data: FormData): Promise<ResultModel> {
    const url = sharedApiUrls.CREATE_CUSTOMER;
    return this.postFormData(url, data);
  }

  getAllCustomers(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<ICustomer[]>> {
    const url = buildApiUrl(sharedApiUrls.GET_ALL_CUSTOMERS, null, queryParams, search);
    return this.get(url);
  }

  getCustomerByIdForView(id: string): Promise<ApiBaseState<ICustomer>> {
    const url = buildApiUrl(sharedApiUrls.GET_A_CUSTOMER_FOR_VIEW, id);
    return this.get(url);
  }

  getCustomerByIdForUpdate(id: string): Promise<ApiBaseState<ICustomer>> {
    const url = buildApiUrl(sharedApiUrls.GET_A_CUSTOMER_FOR_UPDATE, id);
    return this.get(url);
  }

  updateCustomer(id: string, data: FormData): Promise<ResultModel> {
    const url = buildApiUrl(sharedApiUrls.UPDATE_CUSTOMER, id);
    return this.putFormData(url, data);
  }

  deleteCustomerById(id: string): Promise<ResultModel> {
    const url = buildApiUrl(sharedApiUrls.DELETE_CUSTOMER, id);
    return this.delete(url);
  }

  changeStatusOfCustomer(id: string, status: StatusType): Promise<ResultModel> {
    const url = `${sharedApiUrls.CHANGE_STATUS_CUSTOMER}/${id}?status=${status}`;
    return this.patch(url);
  }

  getAllCustomerCategories(
    queryParams?: QueryParams,
    search?: string | null
  ): Promise<ApiBaseState<GetCustomerCategory[]>> {
    const url = buildApiUrl(sharedApiUrls.GET_ALL_CUSTOMER_CATEGORY, null, queryParams, search);
    return this.get(url);
  }

  getAllCustomerTypes(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<GetCustomerType[]>> {
    const url = buildApiUrl(sharedApiUrls.GET_ALL_CUSTOMER_TYPE, null, queryParams, search);
    return this.get(url);
  }
}
