"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreatePaymentRequest = useCreatePaymentRequest;
exports.useUpdatePaymentRequestById = useUpdatePaymentRequestById;
exports.useDeletePaymentRequestById = useDeletePaymentRequestById;
exports.useGetAllPaymentRequests = useGetAllPaymentRequests;
exports.useGetPaymentRequestById = useGetPaymentRequestById;
const purchase_api_1 = require("@prime-fresh/purchase_api");
const react_query_1 = require("@tanstack/react-query");
function useCreatePaymentRequest(grnid) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-payment-request'],
        mutationFn: (data) => purchase_api_1.PaymentRequestServices.getInstance().createPaymentRequest(grnid, data),
    });
}
function useUpdatePaymentRequestById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-payment-request-by-id'],
        mutationFn: (data) => purchase_api_1.PaymentRequestServices.getInstance().updatePaymentRequest(id, data),
    });
}
function useDeletePaymentRequestById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-payment-request-by-id'],
        mutationFn: () => purchase_api_1.PaymentRequestServices.getInstance().deletePaymentRequestById(id),
    });
}
function useGetAllPaymentRequests() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-payment-request'],
        queryFn: () => purchase_api_1.PaymentRequestServices.getInstance().getAllPaymentRequests(),
    });
}
function useGetPaymentRequestById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-payment-request-by-id'],
        queryFn: () => purchase_api_1.PaymentRequestServices.getInstance().getPaymentRequestById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=payment-request.rq.js.map