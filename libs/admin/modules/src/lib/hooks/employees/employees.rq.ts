import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { EmployeesService, GetEmployee } from '@prime-fresh/admin_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateEmployee():
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['create-employee'],
        mutationFn: (data) => EmployeesService.getInstance().createEmployee(data),
    });
}

export function useUpdateEmployeeById(id: string):
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['update-employee-by-id'],
        mutationFn: (data) => EmployeesService.getInstance().updateEmployee(id, data),
    });
}

export function useDeleteEmployeeById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-employee-by-id'],
        mutationFn: () => EmployeesService.getInstance().deleteEmployeeById(id),
    });
}

export function useGetAllEmployees():
    UseQueryResult<ApiBaseState<GetEmployee[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetEmployee[]>, ErrorModel>({
        queryKey: ['get-all-employees'],
        queryFn: () => EmployeesService.getInstance().getAllEmployees(),
    });
}

export function useGetEmployeeById(id: string):
    UseQueryResult<ApiBaseState<GetEmployee>, ErrorModel> {
    return useQuery<ApiBaseState<GetEmployee>, ErrorModel>({
        queryKey: ['get-employee-by-id'],
        queryFn: () => EmployeesService.getInstance().getEmployeeById(id),
        enabled: !!id,
    });
}
