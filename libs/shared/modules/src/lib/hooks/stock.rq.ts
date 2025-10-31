import { StockService } from '@prime-fresh/services';
import { ApiBaseState, QueryParams, ErrorModel } from '@prime-fresh/services';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { GetStock, GetStockGlobal, GetStockLocationWise, GetStockProductWise } from '../models';

export function useGetAllStock(queryParams?: QueryParams): UseQueryResult<ApiBaseState<GetStock[]>, ErrorModel> {
  return useQuery<ApiBaseState<GetStock[]>, ErrorModel>({
    queryKey: ['get-all-stock', queryParams],
    queryFn: () => StockService.getInstance().getAllStock(queryParams),
  });
}

export function useGetStockGlobal(
  queryParams?: QueryParams
): UseQueryResult<ApiBaseState<GetStockGlobal[]>, ErrorModel> {
  return useQuery<ApiBaseState<GetStockGlobal[]>, ErrorModel>({
    queryKey: ['get-stock-global', queryParams],
    queryFn: () => StockService.getInstance().getStockGlobal(queryParams),
  });
}

export function useGetStockLocationWise(
  location: string,
  companyName: string,
  queryParams?: QueryParams
): UseQueryResult<ApiBaseState<GetStockLocationWise[]>, ErrorModel> {
  return useQuery<ApiBaseState<GetStockLocationWise[]>, ErrorModel>({
    queryKey: ['get-stock-location-wise', location, companyName, queryParams],
    queryFn: () => StockService.getInstance().getStockLocationWise(location, companyName, queryParams),
  });
}
export function useGetStockProductWise(
  productName: string,
  location: string,
  companyName: string,
  queryParams?: QueryParams
): UseQueryResult<ApiBaseState<GetStockProductWise[]>, ErrorModel> {
  return useQuery<ApiBaseState<GetStockProductWise[]>, ErrorModel>({
    queryKey: ['get-stock-product-wise', productName, location, companyName, queryParams],
    queryFn: () => StockService.getInstance().getStockProductWise(productName, location, companyName, queryParams),
  });
}

export function useGetStockById(id: string): UseQueryResult<ApiBaseState<GetStock>, ErrorModel> {
  const enabled = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<GetStock>, ErrorModel>({
    queryKey: ['get-stock-by-id', id],
    queryFn: () => StockService.getInstance().getStockDetailById(id),
    enabled: enabled,
  });
}
