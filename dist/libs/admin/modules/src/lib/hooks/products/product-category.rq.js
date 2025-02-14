"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateProductCategory = useCreateProductCategory;
exports.useUpdateProductCategoryById = useUpdateProductCategoryById;
exports.useDeleteProductCategoryById = useDeleteProductCategoryById;
exports.useGetAllProductCategories = useGetAllProductCategories;
exports.useGetProductCategoryById = useGetProductCategoryById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateProductCategory() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-product-category'],
        mutationFn: (data) => admin_api_1.ProductCategoryService.getInstance().createProductCategory(data),
    });
}
function useUpdateProductCategoryById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-product-category-by-id'],
        mutationFn: (data) => admin_api_1.ProductCategoryService.getInstance().updateProductCategory(id, data),
    });
}
function useDeleteProductCategoryById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-product-category-by-id'],
        mutationFn: () => admin_api_1.ProductCategoryService.getInstance().deleteProdctCategoryById(id),
    });
}
function useGetAllProductCategories() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-product-categories'],
        queryFn: () => admin_api_1.ProductCategoryService.getInstance().getAllProductCategories(),
    });
}
function useGetProductCategoryById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-product-category-by-id'],
        queryFn: () => admin_api_1.ProductCategoryService.getInstance().getProductCategoryById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=product-category.rq.js.map