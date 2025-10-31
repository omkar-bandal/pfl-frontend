import { apiUrls } from '../../constants';
import { QueryParams } from '../../../shared';
import { IDeliveryChallanTypeStockTransfer, GetAllDeliveryChallanNums } from '../../models';
import { ApiBaseState, BaseService, ResultModel, buildApiUrl } from '../../../base';

export class DCTypeStockTransferServices extends BaseService {
  private static _instance: DCTypeStockTransferServices;

  public static getInstance(): DCTypeStockTransferServices {
    return this._instance || (this._instance = new this());
  }

  createDCTypeStockTransfer(data: FormData): Promise<ResultModel> {
    const url = apiUrls.CREATE_DC_TYPE_STOCK_TRANSFER;
    return this.postFormData(url, data);
  }

  getAllDCTypeStockTransfer(
    queryParams?: QueryParams,
    search?: string | null
  ): Promise<ApiBaseState<IDeliveryChallanTypeStockTransfer[]>> {
    const url = buildApiUrl(apiUrls.GET_ALL_DC_TYPE_STOCK_TRANSFER, null, queryParams, search);
    return this.get(url);
  }

  getDCTypeStockTransferForViewById(id: string): Promise<ApiBaseState<IDeliveryChallanTypeStockTransfer>> {
    const url = `${apiUrls.GET_DC_TYPE_STOCK_TRANSFER_FOR_VIEW_BY_ID}/${id}`;
    return this.get(url);
  }

  getDCTypeStockTransferForUpdateById(id: string): Promise<ApiBaseState<IDeliveryChallanTypeStockTransfer>> {
    const url = `${apiUrls.GET_DC_TYPE_STOCK_TRANSFER_FOR_UPDATE_BY_ID}/${id}`;
    return this.get(url);
  }

  updateDCTypeStockTransfer(id: string, data: FormData): Promise<ResultModel> {
    const url = `${apiUrls.UPDATE_DC_TYPE_STOCK_TRANSFER}/${id}`;
    return this.patchFormData(url, data);
  }

  deleteDCTypeStockTransferById(id: string): Promise<ResultModel> {
    const url = `${apiUrls.DELETE_DC_TYPE_STOCK_TRANSFER}/${id}`;
    return this.delete(url);
  }

  deleteMultipleDCTypeStockTransfers(data: Array<string>): Promise<ResultModel> {
    const url = apiUrls.DELETE_MULTIPLE_DC_TYPE_STOCK_TRANSFER;
    return this.deleteMultiple(url, data);
  }

  getDeliveryChallanNums(): Promise<ApiBaseState<GetAllDeliveryChallanNums[]>> {
    const url = apiUrls.GET_ALL_DELIVERY_CHALLAN_NO;
    return this.get(url);
  }
}
