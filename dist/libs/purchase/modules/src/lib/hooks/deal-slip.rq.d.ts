import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { PostDealSlip, GetDealSlip } from '@prime-fresh/purchase_api';
export declare function useCreateDealSlip(): UseMutationResult<ResultModel, ErrorModel, PostDealSlip, unknown>;
export declare function useUpdateDealSlipById(id: string): UseMutationResult<ResultModel, ErrorModel, GetDealSlip, unknown>;
export declare function useDeleteDealSlipById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllDealSlips(): UseQueryResult<ApiBaseState<GetDealSlip[]>, ErrorModel>;
export declare function useGetDealSlipById(id: string): UseQueryResult<ApiBaseState<GetDealSlip>, ErrorModel>;
