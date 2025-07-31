import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { IMultiCashVoucher } from '@prime-fresh/purchase_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateMultiCashVoucher(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useUpdateMultiCashVoucherById(id: string): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useDeleteMultiCashVoucherById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllMultiCashVouchers(queryParams?: QueryParams): UseQueryResult<ApiBaseState<IMultiCashVoucher[]>, ErrorModel>;
export declare function useGetMultiCashVoucherForViewById(id: string): UseQueryResult<ApiBaseState<IMultiCashVoucher>, ErrorModel>;
export declare function useGetMultiCashVoucherForUpdateById(id: string): UseQueryResult<ApiBaseState<IMultiCashVoucher>, ErrorModel>;
