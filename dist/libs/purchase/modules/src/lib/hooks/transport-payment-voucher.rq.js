"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateTransportPaymentVoucher = useCreateTransportPaymentVoucher;
exports.useUpdateTransportPaymentVoucherById = useUpdateTransportPaymentVoucherById;
exports.useDeleteTransportPaymentVoucherById = useDeleteTransportPaymentVoucherById;
exports.useGetAllTransportPaymentVouchers = useGetAllTransportPaymentVouchers;
exports.useGetTransportPaymentVoucherById = useGetTransportPaymentVoucherById;
const purchase_api_1 = require("@prime-fresh/purchase_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateTransportPaymentVoucher() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-transport-payment-voucher'],
        mutationFn: (data) => purchase_api_1.TransportPaymentVoucherServices.getInstance().createTransportPaymentVoucher(data),
    });
}
function useUpdateTransportPaymentVoucherById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-transport-payment-voucher-by-id'],
        mutationFn: (data) => purchase_api_1.TransportPaymentVoucherServices.getInstance().updateTransportPaymentVoucher(id, data),
    });
}
function useDeleteTransportPaymentVoucherById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-transport-payment-voucher-by-id'],
        mutationFn: () => purchase_api_1.TransportPaymentVoucherServices.getInstance().deleteTransportPaymentVoucherById(id),
    });
}
function useGetAllTransportPaymentVouchers() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-transport-payment-vouchers'],
        queryFn: () => purchase_api_1.TransportPaymentVoucherServices.getInstance().getAllTransportPaymentVouchers(),
    });
}
function useGetTransportPaymentVoucherById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-transport-payment-voucher-by-id'],
        queryFn: () => purchase_api_1.TransportPaymentVoucherServices.getInstance().GetTransportPaymentVoucherById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=transport-payment-voucher.rq.js.map