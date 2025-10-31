import { QueryParams } from '../../shared';
import { apiUrls } from '../constants';
import { IDealSlip, GetAllDealSlipNums } from '../models';
import { ApiBaseState, BaseService, ResultModel, buildApiUrl } from '../../base';

export class DealSlipServices extends BaseService {
  private static _instance: DealSlipServices;

  public static getInstance(): DealSlipServices {
    return this._instance || (this._instance = new this());
  }

  createDealSlip(data: IDealSlip): Promise<ResultModel> {
    const url = apiUrls.CREATE_DEAL_SLIP;
    return this.post(url, data);
  }

  getAllDealSlips(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<IDealSlip[]>> {
    const url = buildApiUrl(apiUrls.GET_ALL_DEAL_SLIP, null, queryParams, search);
    return this.get(url);
  }

  getDealSlipForViewById(id: string): Promise<ApiBaseState<IDealSlip>> {
    const url = apiUrls.GET_DEAL_SLIP_FOR_VIEW_BY_ID(id);
    return this.get(url);
  }

  getDealSlipForUpdateById(id: string): Promise<ApiBaseState<IDealSlip>> {
    const url = apiUrls.GET_DEAL_SLIP_FOR_UPDATE_BY_ID(id);
    return this.get(url);
  }

  updateDealSlip(id: string, data: IDealSlip): Promise<ResultModel> {
    const url = apiUrls.UPDATE_DEAL_SLIP(id);
    return this.patch(url, data);
  }

  deleteDealSlipById(id: string): Promise<ResultModel> {
    const url = apiUrls.DELETE_DEAL_SLIP(id);
    return this.delete(url);
  }

  deleteMultipleDealSlips(data: Array<string>): Promise<ResultModel> {
    const url = apiUrls.DELETE_MULTIPLE_DEAL_SLIP;
    return this.deleteMultiple(url, data);
  }

  getDealSlipNums(): Promise<ApiBaseState<GetAllDealSlipNums[]>> {
    const url = apiUrls.GET_ALL_DEAL_SLIP_NO;
    return this.get(url);
  }
}
