"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateOffice = useCreateOffice;
exports.useUpdateOfficeById = useUpdateOfficeById;
exports.useDeleteOfficeById = useDeleteOfficeById;
exports.useGetAllOffices = useGetAllOffices;
exports.useGetOfficeById = useGetOfficeById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateOffice(officeType) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-office'],
        mutationFn: (data) => admin_api_1.OfficeService.getInstance().createOffice(data, officeType),
    });
}
function useUpdateOfficeById(id, officeType) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-office-by-id'],
        mutationFn: (data) => admin_api_1.OfficeService.getInstance().updateOffice(id, officeType, data),
    });
}
function useDeleteOfficeById(id, officeType) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-office-by-id'],
        mutationFn: () => admin_api_1.OfficeService.getInstance().deleteOfficeById(id, officeType),
    });
}
function useGetAllOffices(officeType, queryParams) {
    const enabled = officeType.length > 1 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-offices', officeType, queryParams],
        queryFn: () => admin_api_1.OfficeService.getInstance().getAllOffice(officeType, queryParams),
        enabled: enabled,
    });
}
function useGetOfficeById(id, officeType) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-office-by-id', id, officeType],
        queryFn: () => admin_api_1.OfficeService.getInstance().getOfficeById(id, officeType),
        enabled: !!id && !!officeType,
    });
}
//# sourceMappingURL=offices.rq.js.map