"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreatePackingMeterialPaymentVoucher = useCreatePackingMeterialPaymentVoucher;
exports.useUpdatePackingMeterialPaymentVoucherById = useUpdatePackingMeterialPaymentVoucherById;
exports.useDeletePackingMeterialPaymentVoucherById = useDeletePackingMeterialPaymentVoucherById;
exports.useGetAllPackingMeterialPaymentVouchers = useGetAllPackingMeterialPaymentVouchers;
exports.useGetPackingMeterialPaymentVoucherById = useGetPackingMeterialPaymentVoucherById;
const purchase_api_1 = require("@prime-fresh/purchase_api");
const react_query_1 = require("@tanstack/react-query");
function useCreatePackingMeterialPaymentVoucher() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-packing-material-payment-voucher'],
        mutationFn: (data) => purchase_api_1.PackingMeterialPaymentVoucherServices
            .getInstance()
            .createPackingMeterialPaymentVoucher(data),
    });
}
function useUpdatePackingMeterialPaymentVoucherById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-packing-material-payment-voucher-by-id'],
        mutationFn: (data) => purchase_api_1.PackingMeterialPaymentVoucherServices
            .getInstance()
            .updatePackingMeterialPaymentVoucher(id, data),
    });
}
function useDeletePackingMeterialPaymentVoucherById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-packing-material-payment-voucher-by-id'],
        mutationFn: () => purchase_api_1.PackingMeterialPaymentVoucherServices
            .getInstance()
            .deletePackingMeterialPaymentVoucherById(id),
    });
}
function useGetAllPackingMeterialPaymentVouchers() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-packing-material-payment-vouchers'],
        queryFn: () => purchase_api_1.PackingMeterialPaymentVoucherServices
            .getInstance()
            .getAllPackingMeterialPaymentVouchers(),
    });
}
function useGetPackingMeterialPaymentVoucherById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-packing-material-payment-voucher-by-id'],
        queryFn: () => purchase_api_1.PackingMeterialPaymentVoucherServices
            .getInstance()
            .GetPackingMeterialPaymentVoucherById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=packing-material-payment-voucher.rq.js.map