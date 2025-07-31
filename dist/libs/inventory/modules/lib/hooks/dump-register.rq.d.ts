import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { IDumpRegister } from '../../../../../api/inventory_api/src/index.ts';
import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '../../../../../api/common_api/src/index.ts';

export declare function useCreateDumpRegister(): UseMutationResult<ResultModel, ErrorModel, IDumpRegister, unknown>;
export declare function useUpdateDumpRegister(id: string): UseMutationResult<ResultModel, ErrorModel, IDumpRegister, unknown>;
export declare function useDeleteDumpRegisterById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllDumpRegisters(queryParams?: QueryParams): UseQueryResult<ApiBaseState<IDumpRegister[]>, ErrorModel>;
export declare function useGetDumpRegisterForViewById(id: string): UseQueryResult<ApiBaseState<IDumpRegister>, ErrorModel>;
export declare function useGetDumpRegisterForUpdateById(id: string): UseQueryResult<ApiBaseState<IDumpRegister>, ErrorModel>;
