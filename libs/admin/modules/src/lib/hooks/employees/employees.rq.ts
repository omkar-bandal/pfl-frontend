import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { EmployeesService, IEmployee } from '@prime-fresh/admin_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateEmployee(): UseMutationResult<ResultModel, ErrorModel, IEmployee, unknown> {
  return useMutation<ResultModel, ErrorModel, IEmployee, unknown>({
    mutationKey: ['create-employee'],
    mutationFn: (data) => EmployeesService.getInstance().createEmployee(data),
  });
}

export function useUpdateEmployeeById(id: string): UseMutationResult<ResultModel, ErrorModel, IEmployee, unknown> {
  return useMutation<ResultModel, ErrorModel, IEmployee, unknown>({
    mutationKey: ['update-employee'],
    mutationFn: (data) => EmployeesService.getInstance().updateEmployee(id, data),
  });
}

export function useDeleteEmployeeById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['delete-employee'],
    mutationFn: () => EmployeesService.getInstance().deleteEmployee(id),
  });
}

export function useGetAllEmployees(queryParams?: QueryParams): UseQueryResult<ApiBaseState<IEmployee[]>, ErrorModel> {
  return useQuery<ApiBaseState<IEmployee[]>, ErrorModel>({
    queryKey: ['get-all-employees', queryParams],
    queryFn: () => EmployeesService.getInstance().getAllEmployees(queryParams),
  });
}

export function useGetEmployeeForView(id: string): UseQueryResult<ApiBaseState<IEmployee>, ErrorModel> {
  const employeeId = id.length > 1 ? id : null;
  return useQuery<ApiBaseState<IEmployee>, ErrorModel>({
    queryKey: ['get-employee-for-view', employeeId],
    queryFn: () => EmployeesService.getInstance().getEmployeeForView(id),
    enabled: !!employeeId,
  });
}
export function useGetEmployeeForUpdate(id: string): UseQueryResult<ApiBaseState<IEmployee>, ErrorModel> {
  const employeeId = id.length > 1 ? id : null;
  return useQuery<ApiBaseState<IEmployee>, ErrorModel>({
    queryKey: ['get-employee-for-update', employeeId],
    queryFn: () => EmployeesService.getInstance().getEmployeeForUpdate(id),
    enabled: !!employeeId,
  });
}

export function useUpdateEmployeeStatus(id: string): UseMutationResult<ResultModel, ErrorModel, 'ACTIVE' | 'INACTIVE' | 'SUSPENDED', unknown> {
  return useMutation<ResultModel, ErrorModel, 'ACTIVE' | 'INACTIVE' | 'SUSPENDED', unknown>({
    mutationKey: ['update-employee-status'],
    mutationFn: (status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED') =>
      EmployeesService.getInstance().updateEmployeeStatus(id, status),
  });
}

// export function useGetEmployeeById(id: string): UseQueryResult<ApiBaseState<IEmployee>, ErrorModel> {
//   const employeeId = id.length > 1 ? id : null;
//   return useQuery<ApiBaseState<IEmployee>, ErrorModel>({
//     queryKey: ['get-employee-by-id', employeeId],
//     queryFn: () => EmployeesService.getInstance().getEmployeeById(id),
//     enabled: !!employeeId,
//   });
// }