"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateDealSlip = useCreateDealSlip;
exports.useUpdateDealSlipById = useUpdateDealSlipById;
exports.useDeleteDealSlipById = useDeleteDealSlipById;
exports.useGetAllDealSlips = useGetAllDealSlips;
exports.useGetDealSlipForViewById = useGetDealSlipForViewById;
exports.useGetDealSlipForUpdateById = useGetDealSlipForUpdateById;
const react_query_1 = require("@tanstack/react-query");
const purchase_api_1 = require("@prime-fresh/purchase_api");
function useCreateDealSlip() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-deal-slip'],
        mutationFn: (data) => purchase_api_1.DealSlipServices.getInstance().createDealSlip(data),
    });
}
function useUpdateDealSlipById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-deal-slip'],
        mutationFn: (data) => purchase_api_1.DealSlipServices.getInstance().updateDealSlip(id, data),
    });
}
function useDeleteDealSlipById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-deal-slip-by-id'],
        mutationFn: () => purchase_api_1.DealSlipServices.getInstance().deleteDealSlipById(id),
    });
}
function useGetAllDealSlips(queryParams) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-deal-slips', queryParams],
        queryFn: () => purchase_api_1.DealSlipServices.getInstance().getAllDealSlips(),
    });
}
function useGetDealSlipForViewById(id) {
    const enabled = id.length > 1 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-deal-slip-for-view-by-id', id],
        queryFn: () => purchase_api_1.DealSlipServices.getInstance().getDealSlipForViewById(id),
        enabled: enabled,
    });
}
function useGetDealSlipForUpdateById(id) {
    const enabled = id.length > 1 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-deal-slip-for-update-by-id', id],
        queryFn: () => purchase_api_1.DealSlipServices.getInstance().getDealSlipForUpdateById(id),
        enabled: enabled,
    });
}
//# sourceMappingURL=deal-slip.rq.js.map