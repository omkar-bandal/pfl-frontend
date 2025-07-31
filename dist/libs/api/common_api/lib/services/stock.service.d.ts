import { BaseService } from './base.service';
import { ApiBaseState, GetStock, GetStockGlobal, GetStockLocationWise, GetStockProductWise, QueryParams } from '../models';

export declare class StockService extends BaseService {
    static _instance: StockService;
    static getInstance(): StockService;
    getAllStock(queryParams?: QueryParams): Promise<ApiBaseState<GetStock[]>>;
    getStockGlobal(queryParams?: QueryParams): Promise<ApiBaseState<GetStockGlobal[]>>;
    getStockLocationWise(location: string, companyName: string, queryParams?: QueryParams): Promise<ApiBaseState<GetStockLocationWise[]>>;
    getStockProductWise(productName: string, location: string, companyName: string, queryParams?: QueryParams): Promise<ApiBaseState<GetStockProductWise[]>>;
    getStockDetailById(id: string): Promise<ApiBaseState<GetStock>>;
}
