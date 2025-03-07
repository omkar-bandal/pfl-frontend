import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { PostDumpRegister, GetDumpRegister } from '../../../../../api/inventory_api/src/index.ts';
import { ApiBaseState, ErrorModel, ResultModel } from '../../../../../api/common_api/src/index.ts';

export declare function useCreateDumpRegister(): UseMutationResult<ResultModel, ErrorModel, PostDumpRegister, unknown>;
export declare function useUpdateDumpRegister(id: string): UseMutationResult<ResultModel, ErrorModel, GetDumpRegister, unknown>;
export declare function useDeleteDumpRegisterById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllDumpRegisters(): UseQueryResult<ApiBaseState<GetDumpRegister[]>, ErrorModel>;
export declare function useGetDumpRegisterById(id: string): UseQueryResult<ApiBaseState<GetDumpRegister>, ErrorModel>;
