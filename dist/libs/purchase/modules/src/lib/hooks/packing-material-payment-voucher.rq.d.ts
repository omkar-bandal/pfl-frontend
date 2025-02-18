import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { GetPMPvoucher } from '@prime-fresh/purchase_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreatePackingMeterialPaymentVoucher(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useUpdatePackingMeterialPaymentVoucherById(id: string): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useDeletePackingMeterialPaymentVoucherById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllPackingMeterialPaymentVouchers(): UseQueryResult<ApiBaseState<GetPMPvoucher[]>, ErrorModel>;
export declare function useGetPackingMeterialPaymentVoucherById(id: string): UseQueryResult<ApiBaseState<GetPMPvoucher>, ErrorModel>;
