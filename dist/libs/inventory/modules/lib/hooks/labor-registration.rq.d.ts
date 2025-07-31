import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { PostLaborRegistration, GetLaborRegistration } from '../../../../../api/inventory_api/src/index.ts';
import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '../../../../../api/common_api/src/index.ts';

export declare function useCreateLaborRegistration(): UseMutationResult<ResultModel, ErrorModel, PostLaborRegistration, unknown>;
export declare function useUpdateLaborRegistration(id: string): UseMutationResult<ResultModel, ErrorModel, GetLaborRegistration, unknown>;
export declare function useDeleteLaborRegistrationById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllLaborRegistration(queryParams?: QueryParams): UseQueryResult<ApiBaseState<GetLaborRegistration[]>, ErrorModel>;
export declare function useGetLaborRegistrationById(id: string): UseQueryResult<ApiBaseState<GetLaborRegistration>, ErrorModel>;
