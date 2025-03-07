import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { GetTPvoucher } from '@prime-fresh/purchase_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateTransportPaymentVoucher(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useUpdateTransportPaymentVoucherById(id: string): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useDeleteTransportPaymentVoucherById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllTransportPaymentVouchers(): UseQueryResult<ApiBaseState<GetTPvoucher[]>, ErrorModel>;
export declare function useGetTransportPaymentVoucherById(id: string): UseQueryResult<ApiBaseState<GetTPvoucher>, ErrorModel>;
