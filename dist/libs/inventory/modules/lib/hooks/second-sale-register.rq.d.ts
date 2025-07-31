import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { ISecondSaleRegister } from '../../../../../api/inventory_api/src/index.ts';
import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '../../../../../api/common_api/src/index.ts';

export declare function useCreateSecondSaleRegister(): UseMutationResult<ResultModel, ErrorModel, Omit<ISecondSaleRegister, 'id'>, unknown>;
export declare function useUpdateSecondSaleRegister(id: string): UseMutationResult<ResultModel, ErrorModel, ISecondSaleRegister, unknown>;
export declare function useDeleteSecondSaleRegisterById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllSecondSaleRegisters(queryParams?: QueryParams): UseQueryResult<ApiBaseState<ISecondSaleRegister[]>, ErrorModel>;
export declare function useGetSecondSaleRegisterForViewById(id: string): UseQueryResult<ApiBaseState<ISecondSaleRegister>, ErrorModel>;
export declare function useGetSecondSaleRegisterForUpdateById(id: string): UseQueryResult<ApiBaseState<ISecondSaleRegister>, ErrorModel>;
