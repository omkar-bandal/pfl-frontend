"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetPurchaseQtyAmtData = useGetPurchaseQtyAmtData;
exports.useGetPurchaseTotalQtyAmt = useGetPurchaseTotalQtyAmt;
exports.useGetPurchaseQtyAmtDateRangeWise = useGetPurchaseQtyAmtDateRangeWise;
exports.useGetSaleTotalQtyAmt = useGetSaleTotalQtyAmt;
exports.useGetSaleQtyAmtDateRangeWise = useGetSaleQtyAmtDateRangeWise;
const purchase_api_1 = require("@prime-fresh/purchase_api");
const react_query_1 = require("@tanstack/react-query");
function useGetPurchaseQtyAmtData(filterType, filterValue) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-purchase-date-filtered', filterType, filterValue],
        queryFn: () => purchase_api_1.PurchaseDashboardServices.getInstance().getProcurementFilteredData(filterType, filterValue),
        enabled: !!filterType && !!filterValue,
    });
}
function useGetPurchaseTotalQtyAmt() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-purchase-date'],
        queryFn: () => purchase_api_1.PurchaseDashboardServices.getInstance().getProcurementAllData(),
    });
}
function useGetPurchaseQtyAmtDateRangeWise(filterType, startDate, endDate) {
    const enabled = filterType !== "dateRange" ? !!filterType : (!!startDate && !!endDate);
    return (0, react_query_1.useQuery)({
        queryKey: [
            "get-purchaseData-date-range",
            filterType,
            filterType === "dateRange" ? startDate : undefined,
            filterType === "dateRange" ? endDate : undefined,
        ],
        queryFn: () => purchase_api_1.PurchaseDashboardServices.getInstance().getProcurementDataByDates(filterType, startDate, endDate),
        enabled,
    });
}
function useGetSaleTotalQtyAmt() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-sale-date'],
        queryFn: () => purchase_api_1.PurchaseDashboardServices.getInstance().getSaleAllData(),
    });
}
function useGetSaleQtyAmtDateRangeWise(filterType, startDate, endDate) {
    const enabled = filterType !== "dateRange" ? !!filterType : (!!startDate && !!endDate);
    return (0, react_query_1.useQuery)({
        queryKey: [
            "get-salesData-date-range",
            filterType,
            filterType === "dateRange" ? startDate : undefined,
            filterType === "dateRange" ? endDate : undefined,
        ],
        queryFn: () => purchase_api_1.PurchaseDashboardServices.getInstance().getSaleDataByDates(filterType, startDate, endDate),
        enabled,
    });
}
//# sourceMappingURL=purchase-dashboard.rq.js.map