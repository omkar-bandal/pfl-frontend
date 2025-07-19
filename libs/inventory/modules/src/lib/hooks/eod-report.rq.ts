import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '@prime-fresh/common_api';
import { EODReportServices, IEODReport, } from '@prime-fresh/inventory_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateEODReport():
    UseMutationResult<ResultModel, ErrorModel, Omit<IEODReport, 'id'>, unknown> {
    return useMutation<ResultModel, ErrorModel, Omit<IEODReport, 'id'>, unknown>({
        mutationKey: ['create-eod-report'],
        mutationFn: (data) => EODReportServices.getInstance().createEODReport(data),
    });
}

export function useUpdateEODReport(id: string):
    UseMutationResult<ResultModel, ErrorModel, IEODReport, unknown> {
    return useMutation<ResultModel, ErrorModel, IEODReport, unknown>({
        mutationKey: ['update-eod-report'],
        mutationFn: (data) => EODReportServices.getInstance().updateEODReport(id, data),
    });
}

export function useDeleteEODReportById(id: string):
    UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
    return useMutation<ResultModel, ErrorModel, unknown, unknown>({
        mutationKey: ['delete-eod-report-by-id'],
        mutationFn: () => EODReportServices.getInstance().deleteEODReportById(id),
    });
}

export function useGetAllEODReports(queryParams?: QueryParams):
    UseQueryResult<ApiBaseState<IEODReport[]>, ErrorModel> {
    return useQuery<ApiBaseState<IEODReport[]>, ErrorModel>({
        queryKey: ['get-all-eod-reports', queryParams],
        queryFn: () => EODReportServices.getInstance().getAllEODReports(queryParams),
    });
}

export function useGetEODReportForViewById(id: string):
    UseQueryResult<ApiBaseState<IEODReport>, ErrorModel> {
    return useQuery<ApiBaseState<IEODReport>, ErrorModel>({
        queryKey: ['get-eod-report-for-view'],
        queryFn: () => EODReportServices.getInstance().getEODReportForViewById(id),
        enabled: !!id,
    });
}

export function useGetEODReportForUpdateById(id: string):
    UseQueryResult<ApiBaseState<IEODReport>, ErrorModel> {
    return useQuery<ApiBaseState<IEODReport>, ErrorModel>({
        queryKey: ['get-eod-report-by-id'],
        queryFn: () => EODReportServices.getInstance().getEODReportForUpdateById(id),
        enabled: !!id,
    });
}
