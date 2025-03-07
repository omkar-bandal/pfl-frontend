import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { GetMCvoucher } from '@prime-fresh/purchase_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateMultiCashVoucher(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useUpdateMultiCashVoucherById(id: string): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useDeleteMultiCashVoucherById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllMultiCashVouchers(): UseQueryResult<ApiBaseState<GetMCvoucher[]>, ErrorModel>;
export declare function useGetMultiCashVoucherById(id: string): UseQueryResult<ApiBaseState<GetMCvoucher>, ErrorModel>;
