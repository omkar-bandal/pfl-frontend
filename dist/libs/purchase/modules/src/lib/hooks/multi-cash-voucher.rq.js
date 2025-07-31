"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateMultiCashVoucher = useCreateMultiCashVoucher;
exports.useUpdateMultiCashVoucherById = useUpdateMultiCashVoucherById;
exports.useDeleteMultiCashVoucherById = useDeleteMultiCashVoucherById;
exports.useGetAllMultiCashVouchers = useGetAllMultiCashVouchers;
exports.useGetMultiCashVoucherForViewById = useGetMultiCashVoucherForViewById;
exports.useGetMultiCashVoucherForUpdateById = useGetMultiCashVoucherForUpdateById;
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
function useGetAllMultiCashVouchers(queryParams) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-multi-cash-vouchers', queryParams],
        queryFn: () => purchase_api_1.MultiCashVoucherServices.getInstance().getAllMultiCashVouchers(queryParams),
    });
}
function useGetMultiCashVoucherForViewById(id) {
    const enabled = id.length > 0 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-multi-cash-voucher-for-view-by-id', id],
        queryFn: () => purchase_api_1.MultiCashVoucherServices.getInstance().getMultiCashVoucherForViewById(id),
        enabled: enabled,
    });
}
function useGetMultiCashVoucherForUpdateById(id) {
    const enabled = id.length > 0 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-multi-cash-voucher-for-update-by-id', id],
        queryFn: () => purchase_api_1.MultiCashVoucherServices.getInstance().getMultiCashVoucherForUpdateById(id),
        enabled: enabled,
    });
}
//# sourceMappingURL=multi-cash-voucher.rq.js.map