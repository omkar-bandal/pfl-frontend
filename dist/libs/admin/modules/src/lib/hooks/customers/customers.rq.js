"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateCustomer = useCreateCustomer;
exports.useUpdateCustomerById = useUpdateCustomerById;
exports.useDeleteCustomerById = useDeleteCustomerById;
exports.useGetAllCustomers = useGetAllCustomers;
exports.useGetCustomerById = useGetCustomerById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateCustomer() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-Customer'],
        mutationFn: (data) => admin_api_1.CustomersService.getInstance().createCustomer(data),
    });
}
function useUpdateCustomerById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-customer-by-id'],
        mutationFn: (data) => admin_api_1.CustomersService.getInstance().updateCustomer(id, data),
    });
}
function useDeleteCustomerById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-customer-by-id'],
        mutationFn: () => admin_api_1.CustomersService.getInstance().deleteCustomerById(id),
    });
}
function useGetAllCustomers() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-customers'],
        queryFn: () => admin_api_1.CustomersService.getInstance().getAllCustomers(),
    });
}
function useGetCustomerById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-customer-by-id'],
        queryFn: () => admin_api_1.CustomersService.getInstance().getCustomerById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=customers.rq.js.map