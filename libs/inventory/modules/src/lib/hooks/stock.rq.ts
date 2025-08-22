import { ApiBaseState, ErrorModel } from "@prime-fresh/common_api";
import { IStockData, StockServices } from "@prime-fresh/inventory_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useGetStockByAccessLoc(locId: string):
    UseQueryResult<ApiBaseState<IStockData[]>, ErrorModel> {
    return useQuery<ApiBaseState<IStockData[]>, ErrorModel>({
        queryKey: ['get-stock', locId],
        queryFn: () => StockServices.getInstance().getStockByAccessLoc(locId),
    });
}