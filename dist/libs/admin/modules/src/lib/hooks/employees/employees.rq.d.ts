import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { GetEmployee } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateEmployee(): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useUpdateEmployeeById(id: string): UseMutationResult<ResultModel, ErrorModel, FormData, unknown>;
export declare function useDeleteEmployeeById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllEmployees(): UseQueryResult<ApiBaseState<GetEmployee[]>, ErrorModel>;
export declare function useGetEmployeeById(id: string): UseQueryResult<ApiBaseState<GetEmployee>, ErrorModel>;
