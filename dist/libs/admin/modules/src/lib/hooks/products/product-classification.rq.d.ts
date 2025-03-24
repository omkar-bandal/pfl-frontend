import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { GetProductClassification, PostProductClassification } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateProductClassification(): UseMutationResult<ResultModel, ErrorModel, PostProductClassification, unknown>;
export declare function useUpdateProductClassification(id: string): UseMutationResult<ResultModel, ErrorModel, GetProductClassification, unknown>;
export declare function useDeleteProductClassificationById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllProductClassifications(queryParams?: QueryParams): UseQueryResult<ApiBaseState<GetProductClassification[]>, ErrorModel>;
export declare function useGetAProductClassificationById(id: string): UseQueryResult<ApiBaseState<GetProductClassification>, ErrorModel>;
