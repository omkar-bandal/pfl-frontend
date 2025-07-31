"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetAllLevels = useGetAllLevels;
exports.useGetAllDocumentDetails = useGetAllDocumentDetails;
exports.useCreateLevel = useCreateLevel;
exports.useCreateDocumentDetails = useCreateDocumentDetails;
/* eslint-disable @typescript-eslint/no-explicit-any */
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useGetAllLevels() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-levels'],
        queryFn: () => admin_api_1.LevelsService.getInstance().getAllLevels(),
    });
}
function useGetAllDocumentDetails() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-document-details'],
        queryFn: () => admin_api_1.LevelsService.getInstance().getAllDocumentDetails(),
    });
}
function useCreateLevel() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-level'],
        mutationFn: (data) => admin_api_1.LevelsService.getInstance().createLevel(data),
    });
}
function useCreateDocumentDetails() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-document-detail'],
        mutationFn: (data) => admin_api_1.LevelsService.getInstance().createDocumentDetail(data),
    });
}
//# sourceMappingURL=level.rq.js.map