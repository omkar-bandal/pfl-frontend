import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { IDeliveryChallanTypeStockTransfer } from '@prime-fresh/purchase_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare const useCreateDCTypeStockTransfer: () => UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare const useUpdateDCTypeStockTransferById: (id: string) => UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare const useDeleteDCTypeStockTransferById: (id: string) => UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare const useGetAllDCTypeStockTransfers: (queryParams?: QueryParams) => UseQueryResult<ApiBaseState<IDeliveryChallanTypeStockTransfer[]>, ErrorModel>;
export declare const useGetDCTypeStockTransferForViewById: (id: string) => UseQueryResult<ApiBaseState<IDeliveryChallanTypeStockTransfer>, ErrorModel>;
export declare const useGetDCTypeStockTransferForUpdateById: (id: string) => UseQueryResult<ApiBaseState<IDeliveryChallanTypeStockTransfer>, ErrorModel>;
