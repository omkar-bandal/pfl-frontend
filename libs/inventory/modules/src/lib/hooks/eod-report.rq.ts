import { ApiBaseState, ErrorModel, ResultModel } from '@prime-fresh/common_api';
import { EODReportServices, GetEODReport, PostEODReport} from '@prime-fresh/inventory_api';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function useCreateEODReport():
    UseMutationResult<ResultModel, ErrorModel, PostEODReport, unknown> {
    return useMutation<ResultModel, ErrorModel, PostEODReport, unknown>({
        mutationKey: ['create-eod-report'],
        mutationFn: (data) => EODReportServices.getInstance().createEODReport(data),
    });
}

export function useUpdateEODReport(id: string):
    UseMutationResult<ResultModel, ErrorModel, GetEODReport, unknown> {
    return useMutation<ResultModel, ErrorModel, GetEODReport, unknown>({
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

export function useGetAllEODReports():
    UseQueryResult<ApiBaseState<GetEODReport[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetEODReport[]>, ErrorModel>({
        queryKey: ['get-all-eod-reports'],
        queryFn: () => EODReportServices.getInstance().getAllEODReports(),
    });
}

export function useGetEODReportById(id: string):
    UseQueryResult<ApiBaseState<GetEODReport>, ErrorModel> {
    return useQuery<ApiBaseState<GetEODReport>, ErrorModel>({
        queryKey: ['get-eod-report-by-id'],
        queryFn: () => EODReportServices.getInstance().getEODReportById(id),
        enabled: !!id,
    });
}
