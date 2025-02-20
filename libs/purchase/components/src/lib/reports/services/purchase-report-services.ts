/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseService } from "@prime-fresh/common_api";
import { GRNFilterData } from "../models/grn-filter-data";
import { buildUrl } from "@prime-fresh/shared/modules";

export class PurchaseReportServices extends BaseService{
    private static _instance: PurchaseReportServices;

    public static getInstance(): PurchaseReportServices {
        return this._instance || (this._instance = new this());
    }

    getPurchaseReportData(filterParams: Record<string, any> | null):Promise<GRNFilterData> {
        const url = buildUrl(filterParams, "/grns/all/getreports")
        return this.get(url);
    }
}