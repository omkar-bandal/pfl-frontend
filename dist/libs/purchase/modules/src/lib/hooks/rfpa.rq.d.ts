import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { PostRFPA, GetRFPA } from '@prime-fresh/purchase_api';
export declare function useCreateRFPA(): UseMutationResult<ResultModel, ErrorModel, PostRFPA, unknown>;
export declare function useUpdateRFPAById(id: string): UseMutationResult<ResultModel, ErrorModel, GetRFPA, unknown>;
export declare function useDeleteRFPAById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllRFPAs(): UseQueryResult<ApiBaseState<GetRFPA[]>, ErrorModel>;
export declare function useGetRFPAById(id: string): UseQueryResult<ApiBaseState<GetRFPA>, ErrorModel>;
