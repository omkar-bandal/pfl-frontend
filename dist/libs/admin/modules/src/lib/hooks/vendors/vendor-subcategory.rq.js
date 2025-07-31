"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateVendorSubategory = useCreateVendorSubategory;
exports.useUpdateVendorSubcategoryById = useUpdateVendorSubcategoryById;
exports.useDeleteVendorSubcategoryById = useDeleteVendorSubcategoryById;
exports.useGetAllVendorSubcategories = useGetAllVendorSubcategories;
exports.useGetVendorSubcategoryById = useGetVendorSubcategoryById;
exports.useGetVendorSubcategoriesByQuery = useGetVendorSubcategoriesByQuery;
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
function useGetAllVendorSubcategories(queryParams) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-vendor-subcategories', queryParams],
        queryFn: () => admin_api_1.VendorSubcategoryService.getInstance().getAllVendorSubcategories(queryParams),
    });
}
function useGetVendorSubcategoryById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-vendor-subcategory-by-id'],
        queryFn: () => admin_api_1.VendorSubcategoryService.getInstance().getVendorSubcategoryById(id),
        enabled: !!id,
    });
}
function useGetVendorSubcategoriesByQuery(query) {
    const enabled = query.length > 1 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-vendor-subcategories-by-query', query],
        queryFn: () => admin_api_1.VendorSubcategoryService.getInstance().getVendorSubcategoryByQuery(query),
        enabled: enabled,
    });
}
//# sourceMappingURL=vendor-subcategory.rq.js.map