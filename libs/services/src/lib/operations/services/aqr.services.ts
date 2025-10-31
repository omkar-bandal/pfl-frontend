import { IAQR } from '../models';
import { apiUrls } from '../constants';
import { buildApiUrl } from '../../base';
import {QueryParams} from '../../shared';
import { ApiBaseState, BaseService, ResultModel } from '../../base';

export class AQRServices extends BaseService {
  private static _instance: AQRServices;

  public static getInstance(): AQRServices {
    return this._instance || (this._instance = new this());
  }

  createAQR(data: Partial<IAQR>): Promise<ResultModel> {
    const url = apiUrls.CREATE_AQR;
    return this.post(url, data);
  }

  getAllAQRs(queryParams?: QueryParams, search?: string | null): Promise<ApiBaseState<IAQR[]>> {
    const url = buildApiUrl(apiUrls.GET_ALL_AQR, null, queryParams, search);
    return this.get(url);
  }

  getAQRForUpdateById(id: string): Promise<ApiBaseState<IAQR>> {
    const url = buildApiUrl(apiUrls.GET_AQR_FOR_UPDATE_BY_ID, id);
    return this.get(url);
  }

  getAQRForViewById(id: string): Promise<ApiBaseState<IAQR>> {
    const url = buildApiUrl(apiUrls.GET_AQR_FOR_VIEW_BY_ID, id);
    return this.get(url);
  }

  updateAQR(id: string, data: IAQR): Promise<ResultModel> {
    const url = buildApiUrl(apiUrls.UPDATE_AQR, id);
    return this.patch(url, data);
  }

  deleteAQRById(id: string): Promise<ResultModel> {
    const url = buildApiUrl(apiUrls.DELETE_AQR, id);
    return this.delete(url);
  }
}
