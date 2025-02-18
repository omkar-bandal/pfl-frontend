import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { DeliveryChallanServices, GetDeliveryChallan } from '@prime-fresh/purchase_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateDeliveryChallan():
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['create-delivery-challan'],
        mutationFn: (data) => DeliveryChallanServices.getInstance().createDeliveryChallan(data),
    });
}

export function useUpdateDeliveryChallanById(id: string):
    UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
    return useMutation<ResultModel, ErrorModel, FormData, unknown>({
        mutationKey: ['update-delivery-challan-by-id'],
        mutationFn: (data) => DeliveryChallanServices.getInstance().updateDeliveryChallan(id, data),
    });
}

export function useDeleteDeliveryChallanById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-delivery-challan-by-id'],
        mutationFn: () => DeliveryChallanServices.getInstance().deleteDeliveryChallanById(id),
    });
}

export function useGetAllDeliveryChallans():
    UseQueryResult<ApiBaseState<GetDeliveryChallan[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetDeliveryChallan[]>, ErrorModel>({
        queryKey: ['get-all-delivery-challans'],
        queryFn: () => DeliveryChallanServices.getInstance().getAllDeliveryChallans(),
    });
}

export function useGetDeliveryChallanById(id: string):
    UseQueryResult<ApiBaseState<GetDeliveryChallan>, ErrorModel> {
    return useQuery<ApiBaseState<GetDeliveryChallan>, ErrorModel>({
        queryKey: ['get-delivery-challan-by-id'],
        queryFn: () => DeliveryChallanServices.getInstance().getDeliveryChallanById(id),
        enabled: !!id,
    });
}
