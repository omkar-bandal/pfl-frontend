"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateRFPA = useCreateRFPA;
exports.useUpdateRFPAById = useUpdateRFPAById;
exports.useDeleteRFPAById = useDeleteRFPAById;
exports.useGetAllRFPAs = useGetAllRFPAs;
exports.useGetRFPAForViewById = useGetRFPAForViewById;
exports.useGetRFPAForUpdateById = useGetRFPAForUpdateById;
const react_query_1 = require("@tanstack/react-query");
const purchase_api_1 = require("@prime-fresh/purchase_api");
function useCreateRFPA() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-rfpa'],
        mutationFn: (data) => purchase_api_1.RFPAServices.getInstance().createRFPA(data),
    });
}
function useUpdateRFPAById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-rfpa'],
        mutationFn: (data) => purchase_api_1.RFPAServices.getInstance().updateRFPA(id, data),
    });
}
function useDeleteRFPAById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-rfpa-by-id'],
        mutationFn: () => purchase_api_1.RFPAServices.getInstance().deleteRFPAById(id),
    });
}
function useGetAllRFPAs(queryParams) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-rfpas', queryParams],
        queryFn: () => purchase_api_1.RFPAServices.getInstance().getAllRFPAs(queryParams),
    });
}
function useGetRFPAForViewById(id) {
    const enabled = id.length > 1 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-rfpa-for-view-by-id', id],
        queryFn: () => purchase_api_1.RFPAServices.getInstance().getRFPAForViewById(id),
        enabled: enabled,
    });
}
function useGetRFPAForUpdateById(id) {
    const enabled = id.length > 1 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-rfpa-for-update-by-id', id],
        queryFn: () => purchase_api_1.RFPAServices.getInstance().getRFPAForUpdateById(id),
        enabled: enabled,
    });
}
//# sourceMappingURL=rfpa.rq.js.map