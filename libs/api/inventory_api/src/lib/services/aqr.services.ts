import { ApiBaseState, BaseService, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { IAQR } from '../models';
import { inventoryApiUrl } from '../constants';

export class AQRServices extends BaseService {
  private static _instance: AQRServices;

  public static getInstance(): AQRServices {
    return this._instance || (this._instance = new this());
  }

  createAQR(data: Partial<IAQR>): Promise<ResultModel> {
    const url = inventoryApiUrl.CREATE_AQR;
    return this.post(url, data);
  }

  getAllAQRs(queryParams?: QueryParams): Promise<ApiBaseState<IAQR[]>> {
    const url = inventoryApiUrl.GET_ALL_AQR(queryParams);
    return this.get(url);
  }

  getAQRForUpdateById(id: string): Promise<ApiBaseState<IAQR>> {
    const url = inventoryApiUrl.GET_AQR_FOR_UPDATE_BY_ID(id);
    return this.get(url);
  }

  getAQRForViewById(id: string): Promise<ApiBaseState<IAQR>> {
    const url = inventoryApiUrl.GET_AQR_FOR_VIEW_BY_ID(id);
    return this.get(url);
  }

  updateAQR(id: string, data: IAQR): Promise<ResultModel> {
    const url = inventoryApiUrl.UPDATE_AQR(id);
    return this.patch(url, data);
  }

  deleteAQRById(id: string): Promise<ResultModel> {
    const url = inventoryApiUrl.DELETE_AQR(id);
    return this.delete(url);
  }
}
