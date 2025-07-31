"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreatePackagingMaterial = useCreatePackagingMaterial;
exports.useUpdatePackagingMaterialById = useUpdatePackagingMaterialById;
exports.useDeletePackagingMaterialById = useDeletePackagingMaterialById;
exports.useGetAllPackagingMaterials = useGetAllPackagingMaterials;
exports.useGetPackagingMaterialById = useGetPackagingMaterialById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreatePackagingMaterial() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-packaging-material'],
        mutationFn: (data) => admin_api_1.PackagingMaterialService.getInstance().createPackagingMaterial(data),
    });
}
function useUpdatePackagingMaterialById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-packaging-material-by-id'],
        mutationFn: (data) => admin_api_1.PackagingMaterialService.getInstance().updatePackagingMaterial(id, data),
    });
}
function useDeletePackagingMaterialById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-packaging-material-by-id'],
        mutationFn: () => admin_api_1.PackagingMaterialService.getInstance().deletePackagingMaterialById(id),
    });
}
function useGetAllPackagingMaterials(queryParams) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-packaging-materials', queryParams],
        queryFn: () => admin_api_1.PackagingMaterialService.getInstance().getAllPackagingMaterials(queryParams),
    });
}
function useGetPackagingMaterialById(id) {
    const enabled = id.length > 0 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-packaging-material-by-id', id],
        queryFn: () => admin_api_1.PackagingMaterialService.getInstance().getPackagingMaterialById(id),
        enabled: enabled,
    });
}
//# sourceMappingURL=packaging-material.rq.js.map