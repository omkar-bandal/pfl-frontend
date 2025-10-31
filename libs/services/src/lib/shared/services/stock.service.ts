import { sharedApiUrls } from '../constants';
import { BaseService, ApiBaseState } from '../../base';
import { GetStock, GetStockGlobal, GetStockLocationWise, GetStockProductWise, QueryParams } from '../models';

export class StockService extends BaseService {
  public static _instance: StockService;

  public static getInstance(): StockService {
    return this._instance || (this._instance = new this());
  }

  getAllStock(queryParams?: QueryParams): Promise<ApiBaseState<GetStock[]>> {
    const url = sharedApiUrls.GET_ALL_STOCK(queryParams);
    return this.get(url);
  }
  getStockGlobal(queryParams?: QueryParams): Promise<ApiBaseState<GetStockGlobal[]>> {
    const url = sharedApiUrls.GET_STOCK_GLOBAL(queryParams);
    return this.get(url);
  }
  getStockLocationWise(
    location: string,
    companyName: string,
    queryParams?: QueryParams
  ): Promise<ApiBaseState<GetStockLocationWise[]>> {
    const url = sharedApiUrls.GET_STOCK_BY_LOCATION(location, companyName, queryParams);
    return this.get(url);
  }
  getStockProductWise(
    productName: string,
    location: string,
    companyName: string,
    queryParams?: QueryParams
  ): Promise<ApiBaseState<GetStockProductWise[]>> {
    const url = sharedApiUrls.GET_STOCK_BY_PRODUCT(productName, location, companyName, queryParams);
    return this.get(url);
  }
  getStockDetailById(id: string): Promise<ApiBaseState<GetStock>> {
    const url = `${sharedApiUrls.GET_STOCK_BY_ID}/${id}`;
    return this.get(url);
  }
}
