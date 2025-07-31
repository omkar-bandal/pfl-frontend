import { ApiBaseState, ErrorModel, ResultModel, Level, GetLevel, DocumentDetails } from '@prime-fresh/common_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useGetAllLevels(): UseQueryResult<ApiBaseState<GetLevel[]>, ErrorModel>;
export declare function useGetAllDocumentDetails(): UseQueryResult<any, ErrorModel>;
export declare function useCreateLevel(): UseMutationResult<ResultModel, ErrorModel, Level, unknown>;
export declare function useCreateDocumentDetails(): UseMutationResult<ResultModel, ErrorModel, DocumentDetails, unknown>;
