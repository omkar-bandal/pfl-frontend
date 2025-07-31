import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { IAQR } from '../../../../../api/inventory_api/src/index.ts';
import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '../../../../../api/common_api/src/index.ts';

export declare function useCreateAQR(): UseMutationResult<ResultModel, ErrorModel, Partial<IAQR>, unknown>;
export declare function useUpdateAQR(id: string): UseMutationResult<ResultModel, ErrorModel, IAQR, unknown>;
export declare function useDeleteAQRById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllAQRs(queryParams?: QueryParams): UseQueryResult<ApiBaseState<IAQR[]>, ErrorModel>;
export declare function useGetAQRForUpdateById(id: string): UseQueryResult<ApiBaseState<IAQR>, ErrorModel>;
export declare function useGetAQRForViewById(id: string): UseQueryResult<ApiBaseState<IAQR>, ErrorModel>;
