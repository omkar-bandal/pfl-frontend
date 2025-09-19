import { ApiBaseState, ErrorModel } from "@prime-fresh/common_api";
import { IStockData, StockServices } from "@prime-fresh/inventory_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useGetStockByAccessLoc(companyId?: string, locationId?: string, startDate?: string, endDate?: string):
    UseQueryResult<ApiBaseState<IStockData[]>, ErrorModel> {
    return useQuery<ApiBaseState<IStockData[]>, ErrorModel>({
        queryKey: ['get-stock', companyId, locationId, startDate, endDate],
        queryFn: () => StockServices.getInstance().getStockByAccessLoc(companyId, locationId, startDate, endDate),
    });
}