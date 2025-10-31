import { apiUrls } from '../../constants';
import { IMultiCashVoucher } from '../../models';
import { QueryParams } from '../../../shared';
import { ApiBaseState, BaseService, ResultModel, buildApiUrl } from '../../../base';

export class MultiCashVoucherServices extends BaseService {
  private static _instance: MultiCashVoucherServices;

  public static getInstance(): MultiCashVoucherServices {
    return this._instance || (this._instance = new this());
  }

  createMultiCashVoucher(data: FormData): Promise<ResultModel> {
    const url = apiUrls.CREATE_MC_VOUCHER;
    return this.postFormData(url, data);
  }

  getAllMultiCashVouchers(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<IMultiCashVoucher[]>> {
    const url = buildApiUrl(apiUrls.GET_ALL_MC_VOUCHER, null, queryParams, search);
    return this.get(url);
  }

  getMultiCashVoucherForViewById(id: string): Promise<ApiBaseState<IMultiCashVoucher>> {
    const url = apiUrls.GET_MC_VOUCHER_FOR_VIEW_BY_ID(id);
    return this.get(url);
  }

  getMultiCashVoucherForUpdateById(id: string): Promise<ApiBaseState<IMultiCashVoucher>> {
    const url = apiUrls.GET_MC_VOUCHER_FOR_UPDATE_BY_ID(id);
    return this.get(url);
  }

  updateMultiCashVoucher(id: string, data: FormData): Promise<ResultModel> {
    const url = apiUrls.UPDATE_MC_VOUCHER(id);
    return this.patchFormData(url, data);
  }

  deleteMultiCashVoucherById(id: string): Promise<ResultModel> {
    const url = apiUrls.DELETE_MC_VOUCHER(id);
    return this.delete(url);
  }

  deleteMultipleMultiCashVouchers(data: Array<string>): Promise<ResultModel> {
        const url = apiUrls.DELETE_MULTIPLE_MC_VOUCHER;
        return this.deleteMultiple(url, data);
    }
}
