import { ApiBaseState, BaseService } from "@prime-fresh/common_api";
import { inventoryApiUrl } from "../constants";
import { IStockData } from "../models";

export class StockServices extends BaseService {
    private static _instance: StockServices;

    public static getInstance(): StockServices {
        return this._instance || (this._instance = new this());
    }

    getStockByAccessLoc(locId: string): Promise<ApiBaseState<IStockData[]>> {
        const url = `${inventoryApiUrl.GET_STOCK}?location=${locId}`;
        return this.get(url);
    }
  }
  