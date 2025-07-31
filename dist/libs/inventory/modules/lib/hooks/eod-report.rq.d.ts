import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { IEODReport } from '../../../../../api/inventory_api/src/index.ts';
import { ApiBaseState, ErrorModel, QueryParams, ResultModel } from '../../../../../api/common_api/src/index.ts';

export declare function useCreateEODReport(): UseMutationResult<ResultModel, ErrorModel, Omit<IEODReport, 'id'>, unknown>;
export declare function useUpdateEODReport(id: string): UseMutationResult<ResultModel, ErrorModel, IEODReport, unknown>;
export declare function useDeleteEODReportById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllEODReports(queryParams?: QueryParams): UseQueryResult<ApiBaseState<IEODReport[]>, ErrorModel>;
export declare function useGetEODReportForViewById(id: string): UseQueryResult<ApiBaseState<IEODReport>, ErrorModel>;
export declare function useGetEODReportForUpdateById(id: string): UseQueryResult<ApiBaseState<IEODReport>, ErrorModel>;
