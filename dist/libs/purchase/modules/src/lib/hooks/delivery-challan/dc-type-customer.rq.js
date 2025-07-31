"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetDCTypeCustomerForUpdateById = exports.useGetDCTypeCustomerForViewById = exports.useGetAllDCTypeCustomers = exports.useDeleteDCTypeCustomerById = exports.useUpdateDCTypeCustomerById = exports.useCreateDCTypeCustomer = void 0;
const purchase_api_1 = require("@prime-fresh/purchase_api");
const react_query_1 = require("@tanstack/react-query");
const useCreateDCTypeCustomer = () => {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-dc-type-customer'],
        mutationFn: (data) => purchase_api_1.DCTypeCustomerServices.getInstance().createDCTypeCustomer(data),
    });
};
exports.useCreateDCTypeCustomer = useCreateDCTypeCustomer;
const useUpdateDCTypeCustomerById = (id) => {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-dc-type-customer-by-id'],
        mutationFn: (data) => purchase_api_1.DCTypeCustomerServices.getInstance().updateDCTypeCustomer(id, data),
    });
};
exports.useUpdateDCTypeCustomerById = useUpdateDCTypeCustomerById;
const useDeleteDCTypeCustomerById = (id) => {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-dc-type-customer-by-id'],
        mutationFn: () => purchase_api_1.DCTypeCustomerServices.getInstance().deleteDCTypeCustomerById(id),
    });
};
exports.useDeleteDCTypeCustomerById = useDeleteDCTypeCustomerById;
const useGetAllDCTypeCustomers = (queryParams) => {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-dc-type-customer', queryParams],
        queryFn: () => purchase_api_1.DCTypeCustomerServices.getInstance().getAllDCTypeCustomer(queryParams),
    });
};
exports.useGetAllDCTypeCustomers = useGetAllDCTypeCustomers;
const useGetDCTypeCustomerForViewById = (id) => {
    const enabled = id.length > 1 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-dc-type-for-view-by-id', id],
        queryFn: () => purchase_api_1.DCTypeCustomerServices.getInstance().getDCTypeCustomerForViewById(id),
        enabled: enabled,
    });
};
exports.useGetDCTypeCustomerForViewById = useGetDCTypeCustomerForViewById;
const useGetDCTypeCustomerForUpdateById = (id) => {
    const enabled = id.length > 1 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-dc-type-for-update-by-id', id],
        queryFn: () => purchase_api_1.DCTypeCustomerServices.getInstance().getDCTypeCustomerForUpdateById(id),
        enabled: enabled,
    });
};
exports.useGetDCTypeCustomerForUpdateById = useGetDCTypeCustomerForUpdateById;
//# sourceMappingURL=dc-type-customer.rq.js.map