"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateLaborPaymentVoucher = useCreateLaborPaymentVoucher;
exports.useUpdateLaborPaymentVoucherById = useUpdateLaborPaymentVoucherById;
exports.useDeleteLaborPaymentVoucherById = useDeleteLaborPaymentVoucherById;
exports.useGetAllLaborPaymentVouchers = useGetAllLaborPaymentVouchers;
exports.useGetLaborPaymentVoucherById = useGetLaborPaymentVoucherById;
exports.useGetLaborPaymentVoucherForViewById = useGetLaborPaymentVoucherForViewById;
exports.useGetLaborPaymentVoucherForUpdateById = useGetLaborPaymentVoucherForUpdateById;
const purchase_api_1 = require("@prime-fresh/purchase_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateLaborPaymentVoucher() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-labor-payment-voucher'],
        mutationFn: (data) => purchase_api_1.LaborPaymentVoucherServices.getInstance().createLaborPaymentVoucher(data),
    });
}
function useUpdateLaborPaymentVoucherById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-labor-payment-voucher-by-id'],
        mutationFn: (data) => purchase_api_1.LaborPaymentVoucherServices.getInstance().updateLaborPaymentVoucher(id, data),
    });
}
function useDeleteLaborPaymentVoucherById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-labor-payment-voucher-by-id'],
        mutationFn: () => purchase_api_1.LaborPaymentVoucherServices.getInstance().deleteLaborPaymentVoucherById(id),
    });
}
function useGetAllLaborPaymentVouchers(queryParams) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-labor-payment-vouchers', queryParams],
        queryFn: () => purchase_api_1.LaborPaymentVoucherServices.getInstance().getAllLaborPaymentVouchers(queryParams),
    });
}
function useGetLaborPaymentVoucherById(id) {
    const enabled = id.length > 0 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-labor-payment-voucher-by-id', enabled],
        queryFn: () => purchase_api_1.LaborPaymentVoucherServices.getInstance().getLaborPaymentVoucherById(id),
        enabled: enabled,
    });
}
function useGetLaborPaymentVoucherForViewById(id) {
    const enabled = id.length > 0 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-labor-payment-voucher-for-view-by-id', id],
        queryFn: () => purchase_api_1.LaborPaymentVoucherServices.getInstance().getLaborPaymentVoucherForViewById(id),
        enabled: enabled,
    });
}
function useGetLaborPaymentVoucherForUpdateById(id) {
    const enabled = id.length > 0 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-labor-payment-voucher-for-update-by-id', id],
        queryFn: () => purchase_api_1.LaborPaymentVoucherServices.getInstance().getLaborPaymentVoucherForUpdateById(id),
        enabled: enabled,
    });
}
//# sourceMappingURL=labor-payment-voucher.rq.js.map