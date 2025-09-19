import { ApiBaseState, BaseService, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { purchaseApiUrl } from '../../constants';
import { IDeliveryChallanTypeStockTransfer } from '../../models';
import { buildApiUrl } from '@prime-fresh/shared/modules';

export class DCTypeStockTransferServices extends BaseService {
  private static _instance: DCTypeStockTransferServices;

  public static getInstance(): DCTypeStockTransferServices {
    return this._instance || (this._instance = new this());
  }

  createDCTypeStockTransfer(data: FormData): Promise<ResultModel> {
    const url = purchaseApiUrl.CREATE_DC_TYPE_STOCK_TRANSFER;
    return this.postFormData(url, data);
  }

  getAllDCTypeStockTransfer(
    queryParams?: QueryParams,
    search?: string | null
  ): Promise<ApiBaseState<IDeliveryChallanTypeStockTransfer[]>> {
    const url = buildApiUrl(purchaseApiUrl.GET_ALL_DC_TYPE_STOCK_TRANSFER, null, queryParams, search);
    return this.get(url);
  }

  getDCTypeStockTransferForViewById(id: string): Promise<ApiBaseState<IDeliveryChallanTypeStockTransfer>> {
    const url = `${purchaseApiUrl.GET_DC_TYPE_STOCK_TRANSFER_FOR_VIEW_BY_ID}/${id}`;
    return this.get(url);
  }

  getDCTypeStockTransferForUpdateById(id: string): Promise<ApiBaseState<IDeliveryChallanTypeStockTransfer>> {
    const url = `${purchaseApiUrl.GET_DC_TYPE_STOCK_TRANSFER_FOR_UPDATE_BY_ID}/${id}`;
    return this.get(url);
  }

  updateDCTypeStockTransfer(id: string, data: FormData): Promise<ResultModel> {
    const url = `${purchaseApiUrl.UPDATE_DC_TYPE_STOCK_TRANSFER}/${id}`;
    return this.patchFormData(url, data);
  }

  deleteDCTypeStockTransferById(id: string): Promise<ResultModel> {
    const url = `${purchaseApiUrl.DELETE_DC_TYPE_STOCK_TRANSFER}/${id}`;
    return this.delete(url);
  }

  deleteMultipleDCTypeStockTransfers(data: Array<string>): Promise<ResultModel> {
    const url = purchaseApiUrl.DELETE_MULTIPLE_DC_TYPE_STOCK_TRANSFER;
    return this.deleteMultiple(url, data);
  }
}
