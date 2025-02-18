import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { PostInwardRegister, GetInwardRegister } from '../../../../../api/inventory_api/src/index.ts';
import { ApiBaseState, ErrorModel, ResultModel } from '../../../../../api/common_api/src/index.ts';

export declare function useCreateInwardRegister(): UseMutationResult<ResultModel, ErrorModel, PostInwardRegister, unknown>;
export declare function useUpdateInwardRegister(id: string): UseMutationResult<ResultModel, ErrorModel, GetInwardRegister, unknown>;
export declare function useDeleteInwardRegisterById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllInwardRegisters(): UseQueryResult<ApiBaseState<GetInwardRegister[]>, ErrorModel>;
export declare function useGetInwardRegisterById(id: string): UseQueryResult<ApiBaseState<GetInwardRegister>, ErrorModel>;
