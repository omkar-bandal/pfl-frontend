import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { GetEODReport, PostEODReport } from '../../../../../api/inventory_api/src/index.ts';
import { ApiBaseState, ErrorModel, ResultModel } from '../../../../../api/common_api/src/index.ts';

export declare function useCreateEODReport(): UseMutationResult<ResultModel, ErrorModel, PostEODReport, unknown>;
export declare function useUpdateEODReport(id: string): UseMutationResult<ResultModel, ErrorModel, GetEODReport, unknown>;
export declare function useDeleteEODReportById(id: string): UseMutationResult<ResultModel, ErrorModel, unknown, unknown>;
export declare function useGetAllEODReports(): UseQueryResult<ApiBaseState<GetEODReport[]>, ErrorModel>;
export declare function useGetEODReportById(id: string): UseQueryResult<ApiBaseState<GetEODReport>, ErrorModel>;
