"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateDeliveryChallan = useCreateDeliveryChallan;
exports.useUpdateDeliveryChallanById = useUpdateDeliveryChallanById;
exports.useDeleteDeliveryChallanById = useDeleteDeliveryChallanById;
exports.useGetAllDeliveryChallans = useGetAllDeliveryChallans;
exports.useGetDeliveryChallanById = useGetDeliveryChallanById;
const purchase_api_1 = require("@prime-fresh/purchase_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateDeliveryChallan() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-delivery-challan'],
        mutationFn: (data) => purchase_api_1.DeliveryChallanServices.getInstance().createDeliveryChallan(data),
    });
}
function useUpdateDeliveryChallanById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-delivery-challan-by-id'],
        mutationFn: (data) => purchase_api_1.DeliveryChallanServices.getInstance().updateDeliveryChallan(id, data),
    });
}
function useDeleteDeliveryChallanById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-delivery-challan-by-id'],
        mutationFn: () => purchase_api_1.DeliveryChallanServices.getInstance().deleteDeliveryChallanById(id),
    });
}
function useGetAllDeliveryChallans() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-delivery-challans'],
        queryFn: () => purchase_api_1.DeliveryChallanServices.getInstance().getAllDeliveryChallans(),
    });
}
function useGetDeliveryChallanById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-delivery-challan-by-id'],
        queryFn: () => purchase_api_1.DeliveryChallanServices.getInstance().getDeliveryChallanById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=delivery-challan.rq.js.map