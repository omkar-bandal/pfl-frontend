import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { GetAQR, PostAQR } from '../../../../../api/inventory_api/src/index.ts';
import { ApiBaseState, ErrorModel, ResultModel } from '../../../../../api/common_api/src/index.ts';

export declare function useCreateAQR(): UseMutationResult<ResultModel, ErrorModel, PostAQR, unknown>;
export declare function useUpdateAQR(id: string): UseMutationResult<ResultModel, ErrorModel, GetAQR, unknown>;
export declare function useDeleteAQRById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllAQRs(): UseQueryResult<ApiBaseState<GetAQR[]>, ErrorModel>;
export declare function useGetAQRById(id: string): UseQueryResult<ApiBaseState<GetAQR>, ErrorModel>;
