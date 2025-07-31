"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateFarmer = useCreateFarmer;
exports.useUpdateFarmerById = useUpdateFarmerById;
exports.useDeleteFarmerById = useDeleteFarmerById;
exports.useGetAllFarmers = useGetAllFarmers;
exports.useGetFarmerById = useGetFarmerById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateFarmer() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-farmer'],
        mutationFn: (data) => admin_api_1.FarmersService.getInstance().createFarmer(data),
    });
}
function useUpdateFarmerById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-farmer-by-id'],
        mutationFn: (data) => admin_api_1.FarmersService.getInstance().updateFarmer(id, data),
    });
}
function useDeleteFarmerById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-farmer-by-id'],
        mutationFn: () => admin_api_1.FarmersService.getInstance().deleteFarmerById(id),
    });
}
function useGetAllFarmers(queryParams) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-farmers', queryParams],
        queryFn: () => admin_api_1.FarmersService.getInstance().getAllFarmers(queryParams),
    });
}
function useGetFarmerById(id) {
    const enabled = id.length > 1 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-farmer-by-id'],
        queryFn: () => admin_api_1.FarmersService.getInstance().getFarmerById(id),
        enabled: enabled,
    });
}
//# sourceMappingURL=farmers.rq.js.map