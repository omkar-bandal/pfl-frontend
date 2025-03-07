import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { GetFarmer } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateFarmer(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useUpdateFarmerById(id: string): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useDeleteFarmerById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllFarmers(): UseQueryResult<ApiBaseState<GetFarmer[]>, ErrorModel>;
export declare function useGetFarmerById(id: string): UseQueryResult<ApiBaseState<GetFarmer>, ErrorModel>;
