import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/services';
import { DepartmentService, GetDepartment } from '@prime-fresh/services';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateDepartment():
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['create-department'],
        mutationFn: (data) => DepartmentService.getInstance().createDepartment(data),
    });
}

export function useUpdateDepartmentById(id: string):
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['update-department-by-id'],
        mutationFn: (data) => DepartmentService.getInstance().updateDepartment(id, data),
    });
}

export function useDeleteDepartmentById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-department-by-id'],
        mutationFn: () => DepartmentService.getInstance().deleteDepartmentById(id),
    });
}

export function useGetAllDepartments():
    UseQueryResult<ApiBaseState<GetDepartment[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetDepartment[]>, ErrorModel>({
        queryKey: ['get-all-departments'],
        queryFn: () => DepartmentService.getInstance().getAllDepartments(),
    });
}

export function useGetDepartmentById(id: string):
    UseQueryResult<ApiBaseState<GetDepartment>, ErrorModel> {
        const departmentId = id.length > 1 ? id : null;
    return useQuery<ApiBaseState<GetDepartment>, ErrorModel>({
        queryKey: ['get-department-by-id', departmentId],
        queryFn: () => DepartmentService.getInstance().getDepartmentById(id),
        enabled: !!departmentId,
    });
}
