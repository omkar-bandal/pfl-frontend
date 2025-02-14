import { ApiBaseState, ErrorModel } from "@prime-fresh/common_api";
import { DateRangeWiseData, PurchaseQtyAmt } from "@prime-fresh/purchase_api";
import { UseQueryResult } from "@tanstack/react-query";
export declare function useGetPurchaseQtyAmtData(filterType: string, filterValue: string): UseQueryResult<ApiBaseState<PurchaseQtyAmt>, ErrorModel>;
export declare function useGetPurchaseTotalQtyAmt(): UseQueryResult<ApiBaseState<PurchaseQtyAmt>, ErrorModel>;
export declare function useGetPurchaseQtyAmtDateRangeWise(filterType: string, startDate?: string | null, endDate?: string | null): UseQueryResult<ApiBaseState<DateRangeWiseData>, ErrorModel>;
export declare function useGetSaleTotalQtyAmt(): UseQueryResult<ApiBaseState<PurchaseQtyAmt>, ErrorModel>;
export declare function useGetSaleQtyAmtDateRangeWise(filterType: string, startDate?: string | null, endDate?: string | null): UseQueryResult<ApiBaseState<DateRangeWiseData>, ErrorModel>;
