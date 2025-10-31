import { apiUrls } from '../../constants';
import { IPackingMaterialPaymentVoucher } from '../../models';
import { QueryParams } from '../../../shared';
import { ApiBaseState, BaseService, ResultModel, buildApiUrl } from '../../../base';

export class PackingMeterialPaymentVoucherServices extends BaseService {
  private static _instance: PackingMeterialPaymentVoucherServices;

  public static getInstance(): PackingMeterialPaymentVoucherServices {
    return this._instance || (this._instance = new this());
  }

  createPackingMeterialPaymentVoucher(data: FormData): Promise<ResultModel> {
    const url = apiUrls.CREATE_PMP_VOUCHER;
    return this.postFormData(url, data);
  }

  getAllPackingMeterialPaymentVouchers(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<IPackingMaterialPaymentVoucher[]>> {
    const url = buildApiUrl(apiUrls.GET_ALL_PMP_VOUCHER, null, queryParams, search);
    return this.get(url);
  }

  getPackingMeterialPaymentVoucherForViewById(id: string): Promise<ApiBaseState<IPackingMaterialPaymentVoucher>> {
    const url = apiUrls.GET_PMP_VOUCHER_FOR_VIEW_BY_ID(id);
    return this.get(url);
  }

  getPackingMeterialPaymentVoucherForUpdateById(id: string): Promise<ApiBaseState<IPackingMaterialPaymentVoucher>> {
    const url = apiUrls.GET_PMP_VOUCHER_FOR_UPDATE_BY_ID(id);
    return this.get(url);
  }

  updatePackingMeterialPaymentVoucher(id: string, data: FormData): Promise<ResultModel> {
    const url = apiUrls.UPDATE_PMP_VOUCHER(id);
    return this.patchFormData(url, data);
  }

  deletePackingMeterialPaymentVoucherById(id: string): Promise<ResultModel> {
    const url = apiUrls.DELETE_PMP_VOUCHER(id);
    return this.delete(url);
  }

  deleteMultiplePackingMeterialPaymentVouchers(data: Array<string>): Promise<ResultModel> {
        const url = apiUrls.DELETE_MULTIPLE_PMP_VOUCHER;
        return this.deleteMultiple(url, data);
    }
}
