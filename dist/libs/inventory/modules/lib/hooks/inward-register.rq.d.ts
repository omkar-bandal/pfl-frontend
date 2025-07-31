import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { IInwardRegister } from '../../../../../api/inventory_api/src/index.ts';
import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '../../../../../api/common_api/src/index.ts';

export declare function useCreateInwardRegister(): UseMutationResult<ResultModel, ErrorModel, IInwardRegister, unknown>;
export declare function useUpdateInwardRegister(id: string): UseMutationResult<ResultModel, ErrorModel, IInwardRegister, unknown>;
export declare function useDeleteInwardRegisterById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllInwardRegisters(queryParams?: QueryParams): UseQueryResult<ApiBaseState<IInwardRegister[]>, ErrorModel>;
export declare function useGetInwardRegisterForViewById(id: string): UseQueryResult<ApiBaseState<IInwardRegister>, ErrorModel>;
export declare function useGetInwardRegisterForUpdateById(id: string): UseQueryResult<ApiBaseState<IInwardRegister>, ErrorModel>;
