/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiBaseState, ErrorModel } from "@prime-fresh/common_api";
import { DashboardData, DateRangeWiseData, PurchaseDashboardServices, PurchaseQtyAmt } from "@prime-fresh/purchase_api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useGetPurchaseQtyAmtData(
  filterType: string,
  filterValue: string
): UseQueryResult<ApiBaseState<PurchaseQtyAmt>, ErrorModel> {
  return useQuery<ApiBaseState<PurchaseQtyAmt>, ErrorModel>({
    queryKey: ['get-purchase-date-filtered', filterType, filterValue],
    queryFn: () =>
      PurchaseDashboardServices.getInstance().getProcurementFilteredData(filterType, filterValue),
    enabled: !!filterType && !!filterValue,
  });
}

export function useGetPurchaseTotalQtyAmt(
): UseQueryResult<ApiBaseState<PurchaseQtyAmt>, ErrorModel> {
  return useQuery<ApiBaseState<PurchaseQtyAmt>, ErrorModel>({
    queryKey: ['get-all-purchase-date'],
    queryFn: () =>
      PurchaseDashboardServices.getInstance().getProcurementAllData(),
  });
}

export function useGetPurchaseQtyAmtDateRangeWise(
  filterType: string,
  startDate?: string | null,
  endDate?: string | null
): UseQueryResult<ApiBaseState<DateRangeWiseData>, ErrorModel> {

  const enabled = filterType !== "dateRange" ? !!filterType : (!!startDate && !!endDate);

  return useQuery<ApiBaseState<DateRangeWiseData>, ErrorModel>({
    queryKey: [
      "get-purchaseData-date-range",
      filterType,
      filterType === "dateRange" ? startDate : undefined,
      filterType === "dateRange" ? endDate : undefined,
    ],
    queryFn: () =>
      PurchaseDashboardServices.getInstance().getProcurementDataByDates(
        filterType,
        startDate,
        endDate
      ),
    enabled,
  });
}

export function useGetSaleTotalQtyAmt(
): UseQueryResult<ApiBaseState<PurchaseQtyAmt>, ErrorModel> {
  return useQuery<ApiBaseState<PurchaseQtyAmt>, ErrorModel>({
    queryKey: ['get-all-sale-date'],
    queryFn: () =>
      PurchaseDashboardServices.getInstance().getSaleAllData(),
  });
}

export function useGetSaleQtyAmtDateRangeWise(
  filterType: string,
  startDate?: string | null,
  endDate?: string | null
): UseQueryResult<ApiBaseState<DateRangeWiseData>, ErrorModel> {

  const enabled = filterType !== "dateRange" ? !!filterType : (!!startDate && !!endDate);

  return useQuery<ApiBaseState<DateRangeWiseData>, ErrorModel>({
    queryKey: [
      "get-salesData-date-range",
      filterType,
      filterType === "dateRange" ? startDate : undefined,
      filterType === "dateRange" ? endDate : undefined,
    ],
    queryFn: () =>
      PurchaseDashboardServices.getInstance().getSaleDataByDates(
        filterType,
        startDate,
        endDate
      ),
    enabled,
  });
}

export function useGetDashboardData(filterParams: Record<string, any> | null):
    UseQueryResult<ApiBaseState<DashboardData>>, ErrorModel> {
    return useQuery<ApiBaseState<DashboardData>>, ErrorModel>({
        queryKey: ['get-dashboard-data', filterParams],
        queryFn: () => PurchaseDashboardServices.getInstance().getDashboardData(filterParams),
        enabled: !!filterParams
    });
}