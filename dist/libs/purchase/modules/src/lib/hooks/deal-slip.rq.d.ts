import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { IDealSlip } from '@prime-fresh/purchase_api';
export declare function useCreateDealSlip(): UseMutationResult<ResultModel, ErrorModel, IDealSlip, unknown>;
export declare function useUpdateDealSlipById(id: string): UseMutationResult<ResultModel, ErrorModel, IDealSlip, unknown>;
export declare function useDeleteDealSlipById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllDealSlips(queryParams: QueryParams): UseQueryResult<ApiBaseState<IDealSlip[]>, ErrorModel>;
export declare function useGetDealSlipForViewById(id: string): UseQueryResult<ApiBaseState<IDealSlip>, ErrorModel>;
export declare function useGetDealSlipForUpdateById(id: string): UseQueryResult<ApiBaseState<IDealSlip>, ErrorModel>;
