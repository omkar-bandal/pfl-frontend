import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { IPackingMaterialPaymentVoucher } from '@prime-fresh/purchase_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreatePackingMeterialPaymentVoucher(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useUpdatePackingMeterialPaymentVoucherById(id: string): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useDeletePackingMeterialPaymentVoucherById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllPackingMeterialPaymentVouchers(queryParams?: QueryParams): UseQueryResult<ApiBaseState<IPackingMaterialPaymentVoucher[]>, ErrorModel>;
export declare function useGetPackingMeterialPaymentVoucherForViewById(id: string): UseQueryResult<ApiBaseState<IPackingMaterialPaymentVoucher>, ErrorModel>;
export declare function useGetPackingMeterialPaymentVoucherForUpdateById(id: string): UseQueryResult<ApiBaseState<IPackingMaterialPaymentVoucher>, ErrorModel>;
