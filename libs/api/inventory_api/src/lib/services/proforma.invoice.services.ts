import { ApiBaseState, BaseService } from '@prime-fresh/common_api';
import { inventoryApiUrl } from '../constants';
import { GetFinalInvoice } from '../models';

export class FinalInvoiceServices extends BaseService {
  private static _instance: FinalInvoiceServices;

  public static getInstance(): FinalInvoiceServices {
    return this._instance || (this._instance = new this());
  }

  createFinalInvoice(id: string): Promise<{ invoiceurl: string }> {
    const url = `${inventoryApiUrl.CREATE_FINAL_INV}/${id}`;
    return this.post(url);
  }

  getAllFinalInvoices(): Promise<ApiBaseState<GetFinalInvoice[]>> {
    const url = inventoryApiUrl.GET_ALL_FINAL_INV;
    return this.get(url);
  }

  // getInwardRegisterById(id: string): Promise<ApiBaseState<GetInwardRegister>> {
  //     const url = `${inventoryApiUrl.GET_INWARD_REGISTER_BY_ID}/${id}`;
  //     return this.get(url);
  // }

  // updateInwardRegister(id: string, data: GetInwardRegister): Promise<ResultModel> {
  //     const url = `${inventoryApiUrl.UPDATE_INWARD_REGISTER}/${id}`;
  //     return this.patch(url, data);
  // }

  // deleteInwardRegisterById(id: string): Promise<ResultModel> {
  //     const url = `${inventoryApiUrl.DELETE_INWARD_REGISTER}/${id}`;
  //     return this.delete(url);
  // }
}
