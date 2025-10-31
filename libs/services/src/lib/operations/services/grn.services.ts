import { apiUrls } from '../constants';
import { GetAllGRNnumbers, IGRN } from '../models';
import { buildApiUrl } from '../../base';
import { QueryParams } from '../../shared';
import { ApiBaseState, BaseService, ResultModel } from '../../base';

export class GRNServices extends BaseService {
  private static _instance: GRNServices;

  public static getInstance(): GRNServices {
    return this._instance || (this._instance = new this());
  }

  createGRN(data: FormData): Promise<ResultModel> {
    const url = apiUrls.CREATE_GRN;
    return this.postFormData(url, data);
  }

  getAllGRNs(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<IGRN[]>> {
    const url = buildApiUrl(apiUrls.GET_ALL_GRN, null, queryParams, search);
    console.log('Get all GRNs url:', url);
    return this.get(url);
  }

  getGRNForViewById(id: string): Promise<ApiBaseState<IGRN>> {
    const url = apiUrls.GET_GRN_FOR_VIEW_BY_ID(id);
    return this.get(url);
  }

  getGRNForUpdateById(id: string): Promise<ApiBaseState<IGRN>> {
    const url = apiUrls.GET_GRN_FOR_UPDATE_BY_ID(id);
    return this.get(url);
  }

  updateGRN(id: string, data: FormData): Promise<ResultModel> {
    const url = apiUrls.UPDATE_GRN(id);
    return this.putFormData(url, data);
  }

  deleteGRNById(id: string): Promise<ResultModel> {
    const url = apiUrls.DELETE_GRN(id);
    return this.delete(url);
  }

  deleteMultipleGRNs(data: Array<string>): Promise<ResultModel> {
    const url = apiUrls.DELETE_MULTIPLE_GRN;
    return this.deleteMultiple(url, data);
  }

  getGRNNums(): Promise<ApiBaseState<GetAllGRNnumbers[]>> {
    const url = apiUrls.GET_ALL_GRN_NO;
    return this.get(url);
  }
}
