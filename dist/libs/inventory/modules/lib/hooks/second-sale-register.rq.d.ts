import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { PostSecondSaleRegister, GetSecondSaleRegister } from '../../../../../api/inventory_api/src/index.ts';
import { ApiBaseState, ErrorModel, ResultModel } from '../../../../../api/common_api/src/index.ts';

export declare function useCreateSecondSaleRegister(): UseMutationResult<ResultModel, ErrorModel, PostSecondSaleRegister, unknown>;
export declare function useUpdateSecondSaleRegister(id: string): UseMutationResult<ResultModel, ErrorModel, GetSecondSaleRegister, unknown>;
export declare function useDeleteSecondSaleRegisterById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllSecondSaleRegisters(): UseQueryResult<ApiBaseState<GetSecondSaleRegister[]>, ErrorModel>;
export declare function useGetSecondSaleRegisterById(id: string): UseQueryResult<ApiBaseState<GetSecondSaleRegister>, ErrorModel>;
