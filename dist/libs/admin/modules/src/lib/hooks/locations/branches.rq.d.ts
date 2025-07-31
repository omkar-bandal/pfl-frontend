import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { PostBranches, GetBranches } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateBranch(branchType: string): UseMutationResult<ResultModel, ErrorModel, PostBranches, unknown>;
export declare function useUpdateBranchById(id: string, branchType: string): UseMutationResult<ResultModel, ErrorModel, PostBranches, unknown>;
export declare function useDeleteBranchById(id: string, branchType: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllBranches(branchType: string, queryParams?: QueryParams): UseQueryResult<ApiBaseState<GetBranches[]>, ErrorModel>;
export declare function useGetBranchById(id: string): UseQueryResult<ApiBaseState<GetBranches>, ErrorModel>;
