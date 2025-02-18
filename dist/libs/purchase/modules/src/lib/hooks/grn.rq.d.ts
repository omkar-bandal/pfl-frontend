import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { GetGRN } from '@prime-fresh/purchase_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateGRN(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useUpdateGRNById(id: string): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useDeleteGRNById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllGRNs(): UseQueryResult<ApiBaseState<GetGRN[]>, ErrorModel>;
export declare function useGetGRNById(id: string): UseQueryResult<ApiBaseState<GetGRN>, ErrorModel>;
