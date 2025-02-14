"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateVendorSubategory = useCreateVendorSubategory;
exports.useUpdateVendorSubcategoryById = useUpdateVendorSubcategoryById;
exports.useDeleteVendorSubcategoryById = useDeleteVendorSubcategoryById;
exports.useGetAllVendorSubcategories = useGetAllVendorSubcategories;
exports.useGetVendorSubcategoryById = useGetVendorSubcategoryById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateVendorSubategory() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-vendor-subcategory'],
        mutationFn: (data) => admin_api_1.VendorSubcategoryService.getInstance().createVendorSubcategory(data),
    });
}
function useUpdateVendorSubcategoryById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-vendor-subcategory-by-id'],
        mutationFn: (data) => admin_api_1.VendorSubcategoryService.getInstance().updateVendorSubcategory(id, data),
    });
}
function useDeleteVendorSubcategoryById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-vendor-subcategory-by-id'],
        mutationFn: () => admin_api_1.VendorSubcategoryService.getInstance().deleteProdctSubcategoryById(id),
    });
}
function useGetAllVendorSubcategories() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-vendor-subcategories'],
        queryFn: () => admin_api_1.VendorSubcategoryService.getInstance().getAllVendorSubcategories(),
    });
}
function useGetVendorSubcategoryById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-vendor-subcategory-by-id'],
        queryFn: () => admin_api_1.VendorSubcategoryService.getInstance().getVendorSubcategoryById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=vendor-subcategory.rq.js.map