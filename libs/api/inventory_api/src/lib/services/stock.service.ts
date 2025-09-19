import { ApiBaseState, BaseService } from "@prime-fresh/common_api";
import { inventoryApiUrl } from "../constants";
import { IStockData } from "../models";

export class StockServices extends BaseService {
    private static _instance: StockServices;

    public static getInstance(): StockServices {
        return this._instance || (this._instance = new this());
    }

    getStockByAccessLoc(companyId?: string, locationId?: string, startDate?: string, endDate?: string): Promise<ApiBaseState<IStockData[]>> {
        let url = inventoryApiUrl.GET_STOCK;
        if (companyId) {
            url += `?companyName=${companyId}`;
        } if (locationId) {
            url += `&locationId=${locationId}`;
        } if (startDate) {
            url += `&startDate=${startDate}`;
        } if (endDate) {
            url += `&endDate=${endDate}`;
        }
        return this.get(url);
    }
}