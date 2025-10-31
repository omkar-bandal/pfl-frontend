import { apiUrls } from '../constants';
import { IStockData } from '../models';
import { ApiBaseState, BaseService } from '../../base';

export class StockServices extends BaseService {
  private static _instance: StockServices;

  public static getInstance(): StockServices {
    return this._instance || (this._instance = new this());
  }

  getStockByAccessLoc(
    companyId?: string,
    locationId?: string,
    startDate?: string,
    endDate?: string
  ): Promise<ApiBaseState<IStockData[]>> {
    let url = apiUrls.GET_STOCK;
    if (companyId) {
      url += `?companyName=${companyId}`;
    }
    if (locationId) {
      url += `&locationId=${locationId}`;
    }
    if (startDate) {
      url += `&startDate=${startDate}`;
    }
    if (endDate) {
      url += `&endDate=${endDate}`;
    }
    return this.get(url);
  }
}
