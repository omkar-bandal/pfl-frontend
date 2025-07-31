import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { IApprovalFlow, IDocumentType, IEmployeeReplacementReq } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateApprovalFlow(): UseMutationResult<ResultModel, ErrorModel, IApprovalFlow, unknown>;
export declare function useUpdateApprovalFlow(id: string): UseMutationResult<ResultModel, ErrorModel, IApprovalFlow, unknown>;
export declare function useDeleteApprovalFlow(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllApprovalFlows(documentType: IDocumentType | null, queryParams?: QueryParams): UseQueryResult<ApiBaseState<IApprovalFlow[]>, ErrorModel>;
export declare function useGetApprovalFlowById(id: string): UseQueryResult<ApiBaseState<IApprovalFlow>, ErrorModel>;
export declare function useReplaceEmployee(): UseMutationResult<ResultModel, ErrorModel, IEmployeeReplacementReq, unknown>;
