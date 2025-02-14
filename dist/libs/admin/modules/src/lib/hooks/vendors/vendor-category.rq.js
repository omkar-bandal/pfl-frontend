"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateVendorCategory = useCreateVendorCategory;
exports.useUpdateVendorCategoryById = useUpdateVendorCategoryById;
exports.useDeleteVendorCategoryById = useDeleteVendorCategoryById;
exports.useGetAllVendorCategories = useGetAllVendorCategories;
exports.useGetVendorCategoryById = useGetVendorCategoryById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateVendorCategory() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-vendor-category'],
        mutationFn: (data) => admin_api_1.VendorCategoryService.getInstance().createVendorCategory(data),
    });
}
function useUpdateVendorCategoryById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-vendor-category-by-id'],
        mutationFn: (data) => admin_api_1.VendorCategoryService.getInstance().updateVendorCategory(id, data),
    });
}
function useDeleteVendorCategoryById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-vendor-category-by-id'],
        mutationFn: () => admin_api_1.VendorCategoryService.getInstance().deleteProdctCategoryById(id),
    });
}
function useGetAllVendorCategories() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-vendor-categories'],
        queryFn: () => admin_api_1.VendorCategoryService.getInstance().getAllVendorCategories(),
    });
}
function useGetVendorCategoryById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-vendor-category-by-id'],
        queryFn: () => admin_api_1.VendorCategoryService.getInstance().getVendorCategoryById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=vendor-category.rq.js.map