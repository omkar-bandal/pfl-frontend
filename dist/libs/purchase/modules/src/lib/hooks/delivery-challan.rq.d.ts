import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { GetDeliveryChallan } from '@prime-fresh/purchase_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateDeliveryChallan(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useUpdateDeliveryChallanById(id: string): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useDeleteDeliveryChallanById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllDeliveryChallans(): UseQueryResult<ApiBaseState<GetDeliveryChallan[]>, ErrorModel>;
export declare function useGetDeliveryChallanById(id: string): UseQueryResult<ApiBaseState<GetDeliveryChallan>, ErrorModel>;
