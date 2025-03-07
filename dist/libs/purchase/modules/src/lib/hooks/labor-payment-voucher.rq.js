"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateLaborPaymentVoucher = useCreateLaborPaymentVoucher;
exports.useUpdateLaborPaymentVoucherById = useUpdateLaborPaymentVoucherById;
exports.useDeleteLaborPaymentVoucherById = useDeleteLaborPaymentVoucherById;
exports.useGetAllLaborPaymentVouchers = useGetAllLaborPaymentVouchers;
exports.useGetLaborPaymentVoucherById = useGetLaborPaymentVoucherById;
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
function useGetAllLaborPaymentVouchers() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-labor-payment-vouchers'],
        queryFn: () => purchase_api_1.LaborPaymentVoucherServices.getInstance().getAllLaborPaymentVouchers(),
    });
}
function useGetLaborPaymentVoucherById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-labor-payment-voucher-by-id'],
        queryFn: () => purchase_api_1.LaborPaymentVoucherServices.getInstance().GetLaborPaymentVoucherById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=labor-payment-voucher.rq.js.map