"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateDealSlip = useCreateDealSlip;
exports.useUpdateDealSlipById = useUpdateDealSlipById;
exports.useDeleteDealSlipById = useDeleteDealSlipById;
exports.useGetAllDealSlips = useGetAllDealSlips;
exports.useGetDealSlipById = useGetDealSlipById;
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
function useGetAllDealSlips() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-deal-slips'],
        queryFn: () => purchase_api_1.DealSlipServices.getInstance().getAllDealSlips(),
    });
}
function useGetDealSlipById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-deal-slip-by-id'],
        queryFn: () => purchase_api_1.DealSlipServices.getInstance().getDealSlipById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=deal-slip.rq.js.map