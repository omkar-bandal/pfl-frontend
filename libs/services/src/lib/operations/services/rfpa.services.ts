import { GetAllRFPAnumbers, IRFPA } from '../models';
import { apiUrls } from '../constants';
import { QueryParams } from '../../shared';
import { ApiBaseState, BaseService, ResultModel, buildApiUrl } from '../../base';

export class RFPAServices extends BaseService {
  private static _instance: RFPAServices;

  public static getInstance(): RFPAServices {
    return this._instance || (this._instance = new this());
  }

  createRFPA(data: IRFPA): Promise<ResultModel> {
    const url = apiUrls.CREATE_RFPA;
    return this.post(url, data);
  }

  getAllRFPAs(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<IRFPA[]>> {
    const url = buildApiUrl(apiUrls.GET_ALL_RFPA, null, queryParams, search);
    return this.get(url);
  }

  getRFPAForViewById(id: string): Promise<ApiBaseState<IRFPA>> {
    const url = apiUrls.GET_RFPA_FOR_VIEW_BY_ID(id);
    return this.get(url);
  }

  getRFPAForUpdateById(id: string): Promise<ApiBaseState<IRFPA>> {
    const url = apiUrls.GET_RFPA_FOR_UPDATE_BY_ID(id);
    return this.get(url);
  }

  updateRFPA(id: string, data: IRFPA): Promise<ResultModel> {
    const url = apiUrls.UPDATE_RFPA(id);
    return this.patch(url, data);
  }

  deleteRFPAById(id: string): Promise<ResultModel> {
    const url = apiUrls.DELETE_RFPA(id);
    return this.delete(url);
  }

  deleteMultipleRFPAs(data: Array<string>): Promise<ResultModel> {
    const url = apiUrls.DELETE_MULTIPLE_RFPA;
    return this.deleteMultiple(url, data);
  }

  getRFPANums(): Promise<ApiBaseState<GetAllRFPAnumbers[]>> {
    const url = apiUrls.GET_ALL_RFPA_NO;
    return this.get(url);
  }
}
