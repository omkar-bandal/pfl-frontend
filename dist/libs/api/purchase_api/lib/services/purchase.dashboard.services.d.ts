import { DateRangeWiseData, PurchaseQtyAmt } from '../models';
import { ApiBaseState, BaseService } from '../../../../common_api/src/index.ts';

export declare class PurchaseDashboardServices extends BaseService {
    private static _instance;
    static getInstance(): PurchaseDashboardServices;
    getProcurementFilteredData(filterType: string, filterValue: string): Promise<ApiBaseState<PurchaseQtyAmt>>;
    getProcurementAllData(): Promise<ApiBaseState<PurchaseQtyAmt>>;
    getProcurementDataByDates(filterType: string, startDate?: string | null, endDate?: string | null): Promise<ApiBaseState<DateRangeWiseData>>;
    getSaleAllData(): Promise<ApiBaseState<PurchaseQtyAmt>>;
    getSaleDataByDates(filterType: string, startDate?: string | null, endDate?: string | null): Promise<ApiBaseState<DateRangeWiseData>>;
}
