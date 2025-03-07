"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateVendor = useCreateVendor;
exports.useUpdateVendorById = useUpdateVendorById;
exports.useDeleteVendorById = useDeleteVendorById;
exports.useGetAllVendors = useGetAllVendors;
exports.useGetVendorById = useGetVendorById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateVendor() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-vendor'],
        mutationFn: (data) => admin_api_1.VendorsService.getInstance().createVendor(data),
    });
}
function useUpdateVendorById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-vendor-by-id'],
        mutationFn: (data) => admin_api_1.VendorsService.getInstance().updateVendor(id, data),
    });
}
function useDeleteVendorById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-vendor-by-id'],
        mutationFn: () => admin_api_1.VendorsService.getInstance().deleteVendorById(id),
    });
}
function useGetAllVendors() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-vendors'],
        queryFn: () => admin_api_1.VendorsService.getInstance().getAllVendors(),
    });
}
function useGetVendorById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-vendor-by-id'],
        queryFn: () => admin_api_1.VendorsService.getInstance().getVendorById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=vendors.rq.js.map