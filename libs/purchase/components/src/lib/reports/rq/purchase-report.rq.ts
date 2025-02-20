/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { PurchaseReportServices } from "../services/purchase-report-services";
import { GRNFilterData } from "../models/grn-filter-data";
import { ErrorModel } from "@prime-fresh/common_api";

export function useGetPurchaseReportData(filterParams: Record<string, any> | null):
    UseQueryResult<GRNFilterData, ErrorModel> {
    return useQuery<GRNFilterData, ErrorModel>({
        queryKey: ['get-purchase-report', filterParams],
        queryFn: () => PurchaseReportServices.getInstance().getPurchaseReportData(filterParams),
        enabled: !!filterParams
    });
}