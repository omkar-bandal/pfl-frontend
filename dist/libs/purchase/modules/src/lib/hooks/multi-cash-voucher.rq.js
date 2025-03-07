"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateMultiCashVoucher = useCreateMultiCashVoucher;
exports.useUpdateMultiCashVoucherById = useUpdateMultiCashVoucherById;
exports.useDeleteMultiCashVoucherById = useDeleteMultiCashVoucherById;
exports.useGetAllMultiCashVouchers = useGetAllMultiCashVouchers;
exports.useGetMultiCashVoucherById = useGetMultiCashVoucherById;
const purchase_api_1 = require("@prime-fresh/purchase_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateMultiCashVoucher() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-multi-cash-voucher'],
        mutationFn: (data) => purchase_api_1.MultiCashVoucherServices.getInstance().createMultiCashVoucher(data),
    });
}
function useUpdateMultiCashVoucherById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-multi-cash-voucher-by-id'],
        mutationFn: (data) => purchase_api_1.MultiCashVoucherServices.getInstance().updateMultiCashVoucher(id, data),
    });
}
function useDeleteMultiCashVoucherById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-multi-cash-voucher-by-id'],
        mutationFn: () => purchase_api_1.MultiCashVoucherServices.getInstance().deleteMultiCashVoucherById(id),
    });
}
function useGetAllMultiCashVouchers() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-multi-cash-vouchers'],
        queryFn: () => purchase_api_1.MultiCashVoucherServices.getInstance().getAllMultiCashVouchers(),
    });
}
function useGetMultiCashVoucherById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-multi-cash-voucher-by-id'],
        queryFn: () => purchase_api_1.MultiCashVoucherServices.getInstance().getMultiCashVoucherById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=multi-cash-voucher.rq.js.map