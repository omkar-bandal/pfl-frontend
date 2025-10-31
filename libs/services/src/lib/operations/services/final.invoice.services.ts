import { apiUrls } from '../constants';
import { GetFinalInvoice } from '../models';
import { ApiBaseState, BaseService } from '../../base';

export class FinalInvoiceServices extends BaseService {
  private static _instance: FinalInvoiceServices;

  public static getInstance(): FinalInvoiceServices {
    return this._instance || (this._instance = new this());
  }

  createFinalInvoice(id: string): Promise<{ invoiceurl: string }> {
    const url = `${apiUrls.CREATE_FINAL_INV}/${id}`;
    return this.post(url);
  }

  getAllFinalInvoices(): Promise<ApiBaseState<GetFinalInvoice[]>> {
    const url = apiUrls.GET_ALL_FINAL_INV;
    return this.get(url);
  }
}
