import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { PostVehicleDispatchRegister, GetVehicleDispatchRegister } from '../../../../../api/inventory_api/src/index.ts';
import { ApiBaseState, ErrorModel, ResultModel } from '../../../../../api/common_api/src/index.ts';

export declare function useCreateVehicleDispatchRegister(): UseMutationResult<ResultModel, ErrorModel, PostVehicleDispatchRegister, unknown>;
export declare function useUpdateVehicleDispatchRegister(id: string): UseMutationResult<ResultModel, ErrorModel, GetVehicleDispatchRegister, unknown>;
export declare function useDeleteVehicleDispatchRegisterById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllVehicleDispatchRegisters(): UseQueryResult<ApiBaseState<GetVehicleDispatchRegister[]>, ErrorModel>;
export declare function useGetVehicleDispatchRegisterById(id: string): UseQueryResult<ApiBaseState<GetVehicleDispatchRegister>, ErrorModel>;
