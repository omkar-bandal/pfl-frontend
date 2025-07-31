"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetDCTypeStockTransferForUpdateById = exports.useGetDCTypeStockTransferForViewById = exports.useGetAllDCTypeStockTransfers = exports.useDeleteDCTypeStockTransferById = exports.useUpdateDCTypeStockTransferById = exports.useCreateDCTypeStockTransfer = void 0;
const purchase_api_1 = require("@prime-fresh/purchase_api");
const react_query_1 = require("@tanstack/react-query");
const useCreateDCTypeStockTransfer = () => {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-dc-type-stock-transfer'],
        mutationFn: (data) => purchase_api_1.DCTypeStockTransferServices.getInstance().createDCTypeStockTransfer(data),
    });
};
exports.useCreateDCTypeStockTransfer = useCreateDCTypeStockTransfer;
const useUpdateDCTypeStockTransferById = (id) => {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-dc-type-stock-transfer-by-id'],
        mutationFn: (data) => purchase_api_1.DCTypeStockTransferServices.getInstance().updateDCTypeStockTransfer(id, data),
    });
};
exports.useUpdateDCTypeStockTransferById = useUpdateDCTypeStockTransferById;
const useDeleteDCTypeStockTransferById = (id) => {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-dc-type-stock-transfer-by-id'],
        mutationFn: () => purchase_api_1.DCTypeStockTransferServices.getInstance().deleteDCTypeStockTransferById(id),
    });
};
exports.useDeleteDCTypeStockTransferById = useDeleteDCTypeStockTransferById;
const useGetAllDCTypeStockTransfers = (queryParams) => {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-dc-type-stock-transfer', queryParams],
        queryFn: () => purchase_api_1.DCTypeStockTransferServices.getInstance().getAllDCTypeStockTransfer(queryParams),
    });
};
exports.useGetAllDCTypeStockTransfers = useGetAllDCTypeStockTransfers;
const useGetDCTypeStockTransferForViewById = (id) => {
    const enabled = id.length > 1 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-dc-type-stock-transfer-for-view-by-id', id],
        queryFn: () => purchase_api_1.DCTypeStockTransferServices.getInstance().getDCTypeStockTransferForViewById(id),
        enabled: enabled,
    });
};
exports.useGetDCTypeStockTransferForViewById = useGetDCTypeStockTransferForViewById;
const useGetDCTypeStockTransferForUpdateById = (id) => {
    const enabled = id.length > 1 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-dc-type-stock-transfer-for-update-by-id', id],
        queryFn: () => purchase_api_1.DCTypeStockTransferServices.getInstance().getDCTypeStockTransferForUpdateById(id),
        enabled: enabled,
    });
};
exports.useGetDCTypeStockTransferForUpdateById = useGetDCTypeStockTransferForUpdateById;
//# sourceMappingURL=dc-type-stock-transfer.rq.js.map