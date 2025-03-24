"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateUOM = useCreateUOM;
exports.useUpdateUOMById = useUpdateUOMById;
exports.useDeleteUOMById = useDeleteUOMById;
exports.useGetAllUOMs = useGetAllUOMs;
exports.useGetUOMById = useGetUOMById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateUOM() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-uom'],
        mutationFn: (data) => admin_api_1.UOMService.getInstance().createUOM(data),
    });
}
function useUpdateUOMById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-uom-by-id'],
        mutationFn: (data) => admin_api_1.UOMService.getInstance().updateUOM(id, data),
    });
}
function useDeleteUOMById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-uom-by-id'],
        mutationFn: () => admin_api_1.UOMService.getInstance().deleteUOMById(id),
    });
}
function useGetAllUOMs(queryParams) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-uoms', queryParams],
        queryFn: () => admin_api_1.UOMService.getInstance().getAllUOMs(queryParams),
    });
}
function useGetUOMById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-uom-by-id'],
        queryFn: () => admin_api_1.UOMService.getInstance().getUOMById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=uom.rq.js.map