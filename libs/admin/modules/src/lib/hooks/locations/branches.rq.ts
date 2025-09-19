import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { BranchService, PostBranches, GetBranches } from '@prime-fresh/admin_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateBranch(branchType: string):
    UseMutationResult<ResultModel, ErrorModel, PostBranches, unknown> {
    return useMutation<ResultModel, ErrorModel, PostBranches, unknown>({
        mutationKey: ['create-branch'],
        mutationFn: (data) => BranchService.getInstance().createBranch(data, branchType),
    });
}

export function useUpdateBranchById(id: string, branchType: string):
    UseMutationResult<ResultModel, ErrorModel, PostBranches, unknown> {
    return useMutation<ResultModel, ErrorModel, PostBranches, unknown>({
        mutationKey: ['update-branch-by-id'],
        mutationFn: (data) => BranchService.getInstance().updateBranch(id, branchType, data),
    });
}

export function useDeleteBranchById(id: string, branchType: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-branch-by-id'],
        mutationFn: () => BranchService.getInstance().deleteBranchById(id, branchType),
    });
}

export function useGetAllBranches(branchType: string, queryParams?: QueryParams, search?: string | null):
    UseQueryResult<ApiBaseState<GetBranches[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetBranches[]>, ErrorModel>({
        queryKey: ['get-all-branchs', branchType, queryParams, search],
        queryFn: () => BranchService.getInstance().getAllBranches(branchType, queryParams, search),
        enabled: !!branchType
    });
}

export function useGetBranchById(id: string):
    UseQueryResult<ApiBaseState<GetBranches>, ErrorModel> {
    return useQuery<ApiBaseState<GetBranches>, ErrorModel>({
        queryKey: ['get-branch-by-id', id],
        queryFn: () => BranchService.getInstance().getBranchById(id),
        enabled: !!id,
    });
}
