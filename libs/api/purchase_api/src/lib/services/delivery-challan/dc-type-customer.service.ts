import { ApiBaseState, BaseService, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { purchaseApiUrl } from '../../constants';
import { IDeliveryChallanTypeCustomer } from '../../models';
import { buildApiUrl } from '@prime-fresh/shared/modules';

export class DCTypeCustomerServices extends BaseService {
  private static _instance: DCTypeCustomerServices;

  public static getInstance(): DCTypeCustomerServices {
    return this._instance || (this._instance = new this());
  }

  createDCTypeCustomer(data: FormData): Promise<ResultModel> {
    const url = purchaseApiUrl.CREATE_DC_TYPE_CUSTOMER;
    return this.postFormData(url, data);
  }

  getAllDCTypeCustomer(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<IDeliveryChallanTypeCustomer[]>> {
    const url = buildApiUrl(purchaseApiUrl.GET_ALL_DC_TYPE_CUSTOMER, null, queryParams, search);
    return this.get(url);
  }

  getDCTypeCustomerForViewById(id: string): Promise<ApiBaseState<IDeliveryChallanTypeCustomer>> {
    const url = `${purchaseApiUrl.GET_DC_TYPE_CUSTOMER_FOR_VIEW_BY_ID}/${id}`;
    return this.get(url);
  }

  getDCTypeCustomerForUpdateById(id: string): Promise<ApiBaseState<IDeliveryChallanTypeCustomer>> {
    const url = `${purchaseApiUrl.GET_DC_TYPE_CUSTOMER_FOR_UPDATE_BY_ID}/${id}`;
    return this.get(url);
  }

  updateDCTypeCustomer(id: string, data: FormData): Promise<ResultModel> {
    const url = `${purchaseApiUrl.UPDATE_DC_TYPE_CUSTOMER}/${id}`;
    return this.patchFormData(url, data);
  }

  deleteDCTypeCustomerById(id: string): Promise<ResultModel> {
    const url = `${purchaseApiUrl.DELETE_DC_TYPE_CUSTOMER}/${id}`;
    return this.delete(url);
  }

  deleteMultipleDCTypeCustomers(data: Array<string>): Promise<ResultModel> {
        const url = purchaseApiUrl.DELETE_MULTIPLE_DC_TYPE_CUSTOMER;
        return this.deleteMultiple(url, data);
    }
}
