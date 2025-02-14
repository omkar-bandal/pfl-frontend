"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateUOMConversionMatrix = useCreateUOMConversionMatrix;
exports.useUpdateUOMConversionMatrixById = useUpdateUOMConversionMatrixById;
exports.useDeleteUOMConversionMatrixById = useDeleteUOMConversionMatrixById;
exports.useGetAllUOMConversionMatrix = useGetAllUOMConversionMatrix;
exports.useGetUOMConversionMatrixById = useGetUOMConversionMatrixById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateUOMConversionMatrix() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-uom-conversion-matrix'],
        mutationFn: (data) => admin_api_1.UOMConversionMatrixService.getInstance().createUOMConversionMatrix(data),
    });
}
function useUpdateUOMConversionMatrixById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-uom-conversion-matrix-by-id'],
        mutationFn: (data) => admin_api_1.UOMConversionMatrixService.getInstance().updateUOMConversionMatrix(id, data),
    });
}
function useDeleteUOMConversionMatrixById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-uom-conversion-matrix-by-id'],
        mutationFn: () => admin_api_1.UOMConversionMatrixService.getInstance().deleteUOMConversionMatrixById(id),
    });
}
function useGetAllUOMConversionMatrix() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-uom-conversion-matrix'],
        queryFn: () => admin_api_1.UOMConversionMatrixService.getInstance().getAllUOMConversionMatrix(),
    });
}
function useGetUOMConversionMatrixById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-uom-conversion-matrix-by-id'],
        queryFn: () => admin_api_1.UOMConversionMatrixService.getInstance().getUOMConversionMatrixById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=uom-conversion-matrix.rq.js.map