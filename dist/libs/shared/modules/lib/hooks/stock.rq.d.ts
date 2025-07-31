import { UseQueryResult } from '@tanstack/react-query';
import { ApiBaseState, ErrorModel, GetStock, GetStockGlobal, GetStockLocationWise, GetStockProductWise, QueryParams } from '../../../../../api/common_api/src/index.ts';

export declare function useGetAllStock(queryParams?: QueryParams): UseQueryResult<ApiBaseState<GetStock[]>, ErrorModel>;
export declare function useGetStockGlobal(queryParams?: QueryParams): UseQueryResult<ApiBaseState<GetStockGlobal[]>, ErrorModel>;
export declare function useGetStockLocationWise(location: string, companyName: string, queryParams?: QueryParams): UseQueryResult<ApiBaseState<GetStockLocationWise[]>, ErrorModel>;
export declare function useGetStockProductWise(productName: string, location: string, companyName: string, queryParams?: QueryParams): UseQueryResult<ApiBaseState<GetStockProductWise[]>, ErrorModel>;
export declare function useGetStockById(id: string): UseQueryResult<ApiBaseState<GetStock>, ErrorModel>;
