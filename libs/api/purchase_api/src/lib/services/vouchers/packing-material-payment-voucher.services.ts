import { ApiBaseState, BaseService, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { purchaseApiUrl } from '../../constants';
import { IPackingMaterialPaymentVoucher } from '../../models';

export class PackingMeterialPaymentVoucherServices extends BaseService {
  private static _instance: PackingMeterialPaymentVoucherServices;

  public static getInstance(): PackingMeterialPaymentVoucherServices {
    return this._instance || (this._instance = new this());
  }

  createPackingMeterialPaymentVoucher(data: FormData): Promise<ResultModel> {
    const url = purchaseApiUrl.CREATE_PMP_VOUCHER;
    return this.postFormData(url, data);
  }

  getAllPackingMeterialPaymentVouchers(queryParams?: QueryParams): Promise<ApiBaseState<IPackingMaterialPaymentVoucher[]>> {
    const url = purchaseApiUrl.GET_ALL_PMP_VOUCHER(queryParams);
    return this.get(url);
  }

  getPackingMeterialPaymentVoucherForViewById(id: string): Promise<ApiBaseState<IPackingMaterialPaymentVoucher>> {
    const url = purchaseApiUrl.GET_PMP_VOUCHER_FOR_VIEW_BY_ID(id);
    return this.get(url);
  }

  getPackingMeterialPaymentVoucherForUpdateById(id: string): Promise<ApiBaseState<IPackingMaterialPaymentVoucher>> {
    const url = purchaseApiUrl.GET_PMP_VOUCHER_FOR_UPDATE_BY_ID(id);
    return this.get(url);
  }

  updatePackingMeterialPaymentVoucher(id: string, data: FormData): Promise<ResultModel> {
    const url = purchaseApiUrl.UPDATE_PMP_VOUCHER(id);
    return this.patchFormData(url, data);
  }

  deletePackingMeterialPaymentVoucherById(id: string): Promise<ResultModel> {
    const url = purchaseApiUrl.DELETE_PMP_VOUCHER(id);
    return this.delete(url);
  }
}
