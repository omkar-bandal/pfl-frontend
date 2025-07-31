"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateCustomerType = useCreateCustomerType;
exports.useUpdateCustomerTypeById = useUpdateCustomerTypeById;
exports.useDeleteCustomerTypeById = useDeleteCustomerTypeById;
exports.useGetAllCustomerTypes = useGetAllCustomerTypes;
exports.useGetCustomerTypeById = useGetCustomerTypeById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateCustomerType() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-customer-type'],
        mutationFn: (data) => admin_api_1.CustomerTypeService.getInstance().createCustomerType(data),
    });
}
function useUpdateCustomerTypeById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-customer-type-by-id'],
        mutationFn: (data) => admin_api_1.CustomerTypeService.getInstance().updateCustomerType(id, data),
    });
}
function useDeleteCustomerTypeById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-customer-type-by-id'],
        mutationFn: () => admin_api_1.CustomerTypeService.getInstance().deleteCustomerTypeById(id),
    });
}
function useGetAllCustomerTypes(queryParams) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-customer-types', queryParams],
        queryFn: () => admin_api_1.CustomerTypeService.getInstance().getAllCustomerCategories(queryParams),
    });
}
function useGetCustomerTypeById(id) {
    const enabled = id.length > 1 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-customer-type-by-id', id],
        queryFn: () => admin_api_1.CustomerTypeService.getInstance().getCustomerTypeById(id),
        enabled: enabled,
    });
}
//# sourceMappingURL=customer-type.rq.js.map