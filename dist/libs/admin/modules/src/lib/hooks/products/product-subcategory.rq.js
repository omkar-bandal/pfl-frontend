"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateProductSubategory = useCreateProductSubategory;
exports.useUpdateProductSubcategoryById = useUpdateProductSubcategoryById;
exports.useDeleteProductSubcategoryById = useDeleteProductSubcategoryById;
exports.useGetAllProductSubcategories = useGetAllProductSubcategories;
exports.useGetProductSubcategoryById = useGetProductSubcategoryById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateProductSubategory() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-product-subcategory'],
        mutationFn: (data) => admin_api_1.ProductSubcategoryService.getInstance().createProductSubcategory(data),
    });
}
function useUpdateProductSubcategoryById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-product-subcategory-by-id'],
        mutationFn: (data) => admin_api_1.ProductSubcategoryService.getInstance().updateProductSubcategory(id, data),
    });
}
function useDeleteProductSubcategoryById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-product-subcategory-by-id'],
        mutationFn: () => admin_api_1.ProductSubcategoryService.getInstance().deleteProductSubcategoryById(id),
    });
}
function useGetAllProductSubcategories(queryParams) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-product-subcategories', queryParams],
        queryFn: () => admin_api_1.ProductSubcategoryService.getInstance().getAllProductSubcategories(queryParams),
    });
}
function useGetProductSubcategoryById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-product-subcategory-by-id'],
        queryFn: () => admin_api_1.ProductSubcategoryService.getInstance().getProductSubcategoryById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=product-subcategory.rq.js.map