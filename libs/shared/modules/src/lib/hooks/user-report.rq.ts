import {
  ApiBaseState,
  ErrorModel,
  IUserDocumentReport,
  IUserRegistrations,
  IUserReportPurchaseData,
  IUserReportSalesData,
  UserReportService,
} from '@prime-fresh/services';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export function useGetUserRegistrationCounts(
  filterParams?: Record<string, any> | null
): UseQueryResult<ApiBaseState<IUserRegistrations>, ErrorModel> {
  return useQuery<ApiBaseState<IUserRegistrations>, ErrorModel>({
    queryKey: ['user-registration-counts', filterParams],
    queryFn: () => UserReportService.getInstance().getUserRegistrationCounts(filterParams),
    enabled: !!filterParams,
  });
}

export function useGetUserDocumentReportCounts(
  filterParams: Record<string, any> | null
): UseQueryResult<ApiBaseState<IUserDocumentReport>, ErrorModel> {
  return useQuery<ApiBaseState<IUserDocumentReport>, ErrorModel>({
    queryKey: ['user-document-report-counts', filterParams],
    queryFn: () => UserReportService.getInstance().getUserDocumentReportCounts(filterParams),
    enabled: !!filterParams,
  });
}

export function useGetUserReportPurchaseData(
  filterParams: Record<string, any> | null
): UseQueryResult<ApiBaseState<IUserReportPurchaseData>, ErrorModel> {
  return useQuery<ApiBaseState<IUserReportPurchaseData>, ErrorModel>({
    queryKey: ['user-report-purchase-data', filterParams],
    queryFn: () => UserReportService.getInstance().getUserReportPurchaseData(filterParams),
    enabled: !!filterParams,
  });
}

export function useGetUserReportSalesData(
  filterParams: Record<string, any> | null
): UseQueryResult<ApiBaseState<IUserReportSalesData>, ErrorModel> {
  return useQuery<ApiBaseState<IUserReportSalesData>, ErrorModel>({
    queryKey: ['user-report-sales-data', filterParams],
    queryFn: () => UserReportService.getInstance().getUserReportSalesData(filterParams),
    enabled: !!filterParams,
  });
}
