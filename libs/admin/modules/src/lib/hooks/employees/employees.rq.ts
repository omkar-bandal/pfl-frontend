import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
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

export function useGetAllEmployees(queryParams: QueryParams):
    UseQueryResult<ApiBaseState<GetEmployee[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetEmployee[]>, ErrorModel>({
        queryKey: ['get-all-employees', queryParams],
        queryFn: () => EmployeesService.getInstance().getAllEmployees(queryParams),
    });
}

export function useGetEmployeeById(id: string):
    UseQueryResult<ApiBaseState<GetEmployee>, ErrorModel> {
    const employeeId = id.length > 1 ? id : null;
    return useQuery<ApiBaseState<GetEmployee>, ErrorModel>({
        queryKey: ['get-employee-by-id', employeeId],
        queryFn: () => EmployeesService.getInstance().getEmployeeById(id),
        enabled: !!employeeId,
    });
}
