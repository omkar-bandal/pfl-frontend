import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { StockServices, IStockData, ApiBaseState, ErrorModel } from '@prime-fresh/services';

export function useGetStockByAccessLoc(
  companyId?: string,
  locationId?: string,
  startDate?: string,
  endDate?: string
): UseQueryResult<ApiBaseState<IStockData[]>, ErrorModel> {
  return useQuery<ApiBaseState<IStockData[]>, ErrorModel>({
    queryKey: ['get-stock', companyId, locationId, startDate, endDate],
    queryFn: () => StockServices.getInstance().getStockByAccessLoc(companyId, locationId, startDate, endDate),
  });
}
