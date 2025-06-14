import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { OfficeService, PostOffices, GetOffices } from '@prime-fresh/admin_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateOffice(officeType: string):
    UseMutationResult<ResultModel, ErrorModel, PostOffices, unknown> {
    return useMutation<ResultModel, ErrorModel, PostOffices, unknown>({
        mutationKey: ['create-office'],
        mutationFn: (data) => OfficeService.getInstance().createOffice(data, officeType),
    });
}

export function useUpdateOfficeById(id: string, officeType: string):
    UseMutationResult<ResultModel, ErrorModel, PostOffices, unknown> {
    return useMutation<ResultModel, ErrorModel, PostOffices, unknown>({
        mutationKey: ['update-office-by-id'],
        mutationFn: (data) => OfficeService.getInstance().updateOffice(id, officeType, data),
    });
}

export function useDeleteOfficeById(id: string, officeType: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-office-by-id'],
        mutationFn: () => OfficeService.getInstance().deleteOfficeById(id, officeType),
    });
}

export function useGetAllOffices(officeType: string, queryParams?: QueryParams):
    UseQueryResult<ApiBaseState<GetOffices[]>, ErrorModel> {
        const enabled = officeType.length > 1 ? true : false;
    return useQuery<ApiBaseState<GetOffices[]>, ErrorModel>({
        queryKey: ['get-all-offices', officeType, queryParams],
        queryFn: () => OfficeService.getInstance().getAllOffice(officeType, queryParams),
        enabled: enabled,
    });
}

export function useGetOfficeById(id: string, officeType: string):
    UseQueryResult<ApiBaseState<GetOffices>, ErrorModel> {
    return useQuery<ApiBaseState<GetOffices>, ErrorModel>({
        queryKey: ['get-office-by-id', id, officeType],
        queryFn: () => OfficeService.getInstance().getOfficeById(id, officeType),
        enabled: !!id && !!officeType,
    });
}
