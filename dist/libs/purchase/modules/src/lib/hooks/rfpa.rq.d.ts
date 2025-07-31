import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { IRFPA } from '@prime-fresh/purchase_api';
export declare function useCreateRFPA(): UseMutationResult<ResultModel, ErrorModel, IRFPA, unknown>;
export declare function useUpdateRFPAById(id: string): UseMutationResult<ResultModel, ErrorModel, IRFPA, unknown>;
export declare function useDeleteRFPAById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllRFPAs(queryParams?: QueryParams): UseQueryResult<ApiBaseState<IRFPA[]>, ErrorModel>;
export declare function useGetRFPAForViewById(id: string): UseQueryResult<ApiBaseState<IRFPA>, ErrorModel>;
export declare function useGetRFPAForUpdateById(id: string): UseQueryResult<ApiBaseState<IRFPA>, ErrorModel>;
