"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateCustomerCategory = useCreateCustomerCategory;
exports.useUpdateCustomerCategoryById = useUpdateCustomerCategoryById;
exports.useDeleteCustomerCategoryById = useDeleteCustomerCategoryById;
exports.useGetAllCustomerCategories = useGetAllCustomerCategories;
exports.useGetCustomerCategoryById = useGetCustomerCategoryById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateCustomerCategory() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-customer-category'],
        mutationFn: (data) => admin_api_1.CustomerCategoryService.getInstance().createCustomerCategory(data),
    });
}
function useUpdateCustomerCategoryById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-customer-category-by-id'],
        mutationFn: (data) => admin_api_1.CustomerCategoryService.getInstance().updateCustomerCategory(id, data),
    });
}
function useDeleteCustomerCategoryById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-customer-category-by-id'],
        mutationFn: () => admin_api_1.CustomerCategoryService.getInstance().deleteCustomerCategoryById(id),
    });
}
function useGetAllCustomerCategories(queryParams) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-customer-categories', queryParams],
        queryFn: () => admin_api_1.CustomerCategoryService.getInstance().getAllCustomerCategories(queryParams),
    });
}
function useGetCustomerCategoryById(id) {
    const enabled = id.length > 1 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-customer-category-by-id', id],
        queryFn: () => admin_api_1.CustomerCategoryService.getInstance().getCustomerCategoryById(id),
        enabled: enabled,
    });
}
//# sourceMappingURL=customer-category.rq.js.map