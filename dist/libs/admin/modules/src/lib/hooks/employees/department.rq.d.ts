import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { GetDepartment } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateDepartment(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useUpdateDepartmentById(id: string): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useDeleteDepartmentById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllDepartments(): UseQueryResult<ApiBaseState<GetDepartment[]>, ErrorModel>;
export declare function useGetDepartmentById(id: string): UseQueryResult<ApiBaseState<GetDepartment>, ErrorModel>;
