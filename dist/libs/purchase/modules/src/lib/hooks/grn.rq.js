"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApproveGRN = exports.useGetGRNForUpdateById = exports.useGetGRNForViewById = exports.useGetAllGRNs = exports.useDeleteGRNById = exports.useUpdateGRNById = exports.useCreateGRN = void 0;
const purchase_api_1 = require("@prime-fresh/purchase_api");
const react_query_1 = require("@tanstack/react-query");
const useCreateGRN = () => {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-GRN'],
        mutationFn: (data) => purchase_api_1.GRNServices.getInstance().createGRN(data),
    });
};
exports.useCreateGRN = useCreateGRN;
const useUpdateGRNById = (id) => {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-GRN-by-id'],
        mutationFn: (data) => purchase_api_1.GRNServices.getInstance().updateGRN(id, data),
    });
};
exports.useUpdateGRNById = useUpdateGRNById;
const useDeleteGRNById = (id) => {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-GRN-by-id'],
        mutationFn: () => purchase_api_1.GRNServices.getInstance().deleteGRNById(id),
    });
};
exports.useDeleteGRNById = useDeleteGRNById;
const useGetAllGRNs = (queryParams) => {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-GRNs', queryParams],
        queryFn: () => purchase_api_1.GRNServices.getInstance().getAllGRNs(queryParams),
    });
};
exports.useGetAllGRNs = useGetAllGRNs;
const useGetGRNForViewById = (id) => {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-GRN-for-view-by-id', id],
        queryFn: () => purchase_api_1.GRNServices.getInstance().getGRNForViewById(id),
        enabled: !!id,
    });
};
exports.useGetGRNForViewById = useGetGRNForViewById;
const useGetGRNForUpdateById = (id) => {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-GRN-for-update-by-id', id],
        queryFn: () => purchase_api_1.GRNServices.getInstance().getGRNForUpdateById(id),
        enabled: !!id,
    });
};
exports.useGetGRNForUpdateById = useGetGRNForUpdateById;
const useApproveGRN = (id) => {
    return (0, react_query_1.useMutation)({
        mutationKey: ['approve-GRN', id],
        mutationFn: (data) => purchase_api_1.GRNServices.getInstance().approveGRN(id, data),
    });
};
exports.useApproveGRN = useApproveGRN;
//# sourceMappingURL=grn.rq.js.map