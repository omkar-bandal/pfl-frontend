import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { VehicleDispatchRegisterServices, PostVehicleDispatchRegister, GetVehicleDispatchRegister } from '@prime-fresh/inventory_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateVehicleDispatchRegister():
    UseMutationResult<ResultModel, ErrorModel, PostVehicleDispatchRegister, unknown> {
    return useMutation<ResultModel, ErrorModel, PostVehicleDispatchRegister, unknown>({
        mutationKey: ['create-vehicle-dispatch-register'],
        mutationFn: (data) => VehicleDispatchRegisterServices.getInstance().createVehicleDispatchRegister(data),
    });
}

export function useUpdateVehicleDispatchRegister(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetVehicleDispatchRegister, unknown> {
    return useMutation<ResultModel, ErrorModel, GetVehicleDispatchRegister, unknown>({
        mutationKey: ['update-vehicle-dispatch-register'],
        mutationFn: (data) => VehicleDispatchRegisterServices.getInstance().updateVehicleDispatchRegister(id, data),
    });
}

export function useDeleteVehicleDispatchRegisterById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-vehicle-dispatch-register-by-id'],
        mutationFn: () => VehicleDispatchRegisterServices.getInstance().deleteVehicleDispatchRegisterById(id),
    });
}

export function useGetAllVehicleDispatchRegisters():
    UseQueryResult<ApiBaseState<GetVehicleDispatchRegister[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetVehicleDispatchRegister[]>, ErrorModel>({
        queryKey: ['get-all-vehicle-dispatch-registers'],
        queryFn: () => VehicleDispatchRegisterServices.getInstance().getAllVehicleDispatchRegisters(),
    });
}

export function useGetVehicleDispatchRegisterById(id: string):
    UseQueryResult<ApiBaseState<GetVehicleDispatchRegister>, ErrorModel> {
    return useQuery<ApiBaseState<GetVehicleDispatchRegister>, ErrorModel>({
        queryKey: ['get-vehicle-dispatch-register-by-id'],
        queryFn: () => VehicleDispatchRegisterServices.getInstance().getVehicleDispatchRegisterById(id),
        enabled: !!id,
    });
}
