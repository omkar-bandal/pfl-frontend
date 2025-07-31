import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { PostVehicleDispatchRegister, GetVehicleDispatchRegister, IVehicleDispatchRegister } from '../../../../../api/inventory_api/src/index.ts';
import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '../../../../../api/common_api/src/index.ts';

export declare function useCreateVehicleDispatchRegister(): UseMutationResult<ResultModel, ErrorModel, PostVehicleDispatchRegister, unknown>;
export declare function useUpdateVehicleDispatchRegister(id: string): UseMutationResult<ResultModel, ErrorModel, GetVehicleDispatchRegister, unknown>;
export declare function useDeleteVehicleDispatchRegisterById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllVehicleDispatchRegisters(queryParams?: QueryParams): UseQueryResult<ApiBaseState<GetVehicleDispatchRegister[]>, ErrorModel>;
export declare function useGetVehicleDispatchRegisterForViewById(id: string): UseQueryResult<ApiBaseState<IVehicleDispatchRegister>, ErrorModel>;
export declare function useGetVehicleDispatchRegisterForUpdateById(id: string): UseQueryResult<ApiBaseState<GetVehicleDispatchRegister>, ErrorModel>;
