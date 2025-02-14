import { ApiBaseState, BaseService } from "@prime-fresh/common_api";
import { DateRangeWiseData, PurchaseQtyAmt } from "../models";

export class PurchaseDashboardServices extends BaseService {
    private static _instance: PurchaseDashboardServices;

    public static getInstance(): PurchaseDashboardServices {
        return this._instance || (this._instance = new this());
    }

    getProcurementFilteredData(filterType: string, filterValue: string): Promise<ApiBaseState<PurchaseQtyAmt>> {
        const url = `/grns/calculation/tilldate?filterType=${filterType}&filterValue=${filterValue}`
        return this.get(url);
    }

    getProcurementAllData(): Promise<ApiBaseState<PurchaseQtyAmt>> {
        const url = "/grns/calculation/tilldate";
        return this.get(url);
    }

    getProcurementDataByDates(
        filterType: string,
        startDate?: string | null,
        endDate?: string | null
    ): Promise<ApiBaseState<DateRangeWiseData>> {
        if (["today", "financialYear", "tillDate"].includes(filterType)) {
            const url = `/grns/calculations/dates?filterType=${filterType}`;
            return this.get(url);
        } else if (filterType === "dateRange") {
            const url = `/grns/calculations/dates?filterType=dateRange&startDate=${startDate}&endDate=${endDate}`;
            return this.get(url);
        } else {
            throw new Error(`Invalid filterType: ${filterType}`);
        }
    }

    getSaleAllData(): Promise<ApiBaseState<PurchaseQtyAmt>> {
        const url = "/deliveryChallan/calculations/dates?filterType=tilldate";
        return this.get(url);
    }

    getSaleDataByDates(
        filterType: string,
        startDate?: string | null,
        endDate?: string | null
    ): Promise<ApiBaseState<DateRangeWiseData>> {
        if (["today", "financialYear", "tillDate"].includes(filterType)) {
            const url = `/deliveryChallan/calculations/dates?filterType=${filterType}`;
            return this.get(url);
        } else if (filterType === "dateRange") {
            const url = `/deliveryChallan/calculations/dates?filterType=dateRange&startDate=${startDate}&endDate=${endDate}`;
            return this.get(url);
        } else {
            throw new Error(`Invalid filterType: ${filterType}`);
        }
    }

}