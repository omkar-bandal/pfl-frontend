import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { VehicleDispatchRegisterServices, PostVehicleDispatchRegister, GetVehicleDispatchRegister, IVehicleDispatchRegister } from '@prime-fresh/inventory_api';
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

export function useGetAllVehicleDispatchRegisters(queryParams?: QueryParams):
    UseQueryResult<ApiBaseState<GetVehicleDispatchRegister[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetVehicleDispatchRegister[]>, ErrorModel>({
        queryKey: ['get-all-vehicle-dispatch-registers', queryParams],
        queryFn: () => VehicleDispatchRegisterServices.getInstance().getAllVehicleDispatchRegisters(queryParams),
    });
}

export function useGetVehicleDispatchRegisterForViewById(id: string):
    UseQueryResult<ApiBaseState<IVehicleDispatchRegister>, ErrorModel> {
    const enabled = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<IVehicleDispatchRegister>, ErrorModel>({
        queryKey: ['get-vehicle-dispatch-register-for-view', enabled],
        queryFn: () => VehicleDispatchRegisterServices.getInstance().getVehicleDispatchRegisterForViewById(id),
        enabled: enabled,
    });
}
export function useGetVehicleDispatchRegisterForUpdateById(id: string):
    UseQueryResult<ApiBaseState<GetVehicleDispatchRegister>, ErrorModel> {
    const enabled = id.length > 1 ? true : false;
    return useQuery<ApiBaseState<GetVehicleDispatchRegister>, ErrorModel>({
        queryKey: ['get-vehicle-dispatch-register-for-update', enabled],
        queryFn: () => VehicleDispatchRegisterServices.getInstance().getVehicleDispatchRegisterForUpdateById(id),
        enabled: enabled,
    });
}
