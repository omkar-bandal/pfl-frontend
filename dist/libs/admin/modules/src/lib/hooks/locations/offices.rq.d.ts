import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { PostOffices, GetOffices } from '@prime-fresh/admin_api';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
export declare function useCreateOffice(officeType: string): UseMutationResult<ResultModel, ErrorModel, PostOffices, unknown>;
export declare function useUpdateOfficeById(id: string, officeType: string): UseMutationResult<ResultModel, ErrorModel, PostOffices, unknown>;
export declare function useDeleteOfficeById(id: string, officeType: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllOffices(officeType: string, queryParams?: QueryParams): UseQueryResult<ApiBaseState<GetOffices[]>, ErrorModel>;
export declare function useGetOfficeById(id: string, officeType: string): UseQueryResult<ApiBaseState<GetOffices>, ErrorModel>;
