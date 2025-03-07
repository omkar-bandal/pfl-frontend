import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { GetLPvoucher } from '@prime-fresh/purchase_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateLaborPaymentVoucher(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useUpdateLaborPaymentVoucherById(id: string): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useDeleteLaborPaymentVoucherById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllLaborPaymentVouchers(): UseQueryResult<ApiBaseState<GetLPvoucher[]>, ErrorModel>;
export declare function useGetLaborPaymentVoucherById(id: string): UseQueryResult<ApiBaseState<GetLPvoucher>, ErrorModel>;
