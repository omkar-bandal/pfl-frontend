"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateGRN = useCreateGRN;
exports.useUpdateGRNById = useUpdateGRNById;
exports.useDeleteGRNById = useDeleteGRNById;
exports.useGetAllGRNs = useGetAllGRNs;
exports.useGetGRNById = useGetGRNById;
const purchase_api_1 = require("@prime-fresh/purchase_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateGRN() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-GRN'],
        mutationFn: (data) => purchase_api_1.GRNServices.getInstance().createGRN(data),
    });
}
function useUpdateGRNById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-GRN-by-id'],
        mutationFn: (data) => purchase_api_1.GRNServices.getInstance().updateGRN(id, data),
    });
}
function useDeleteGRNById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-GRN-by-id'],
        mutationFn: () => purchase_api_1.GRNServices.getInstance().deleteGRNById(id),
    });
}
function useGetAllGRNs() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-GRNs'],
        queryFn: () => purchase_api_1.GRNServices.getInstance().getAllGRNs(),
    });
}
function useGetGRNById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-GRN-by-id'],
        queryFn: () => purchase_api_1.GRNServices.getInstance().getGRNById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=grn.rq.js.map