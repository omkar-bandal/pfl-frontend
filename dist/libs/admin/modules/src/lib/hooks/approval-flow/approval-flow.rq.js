"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateApprovalFlow = useCreateApprovalFlow;
exports.useUpdateApprovalFlow = useUpdateApprovalFlow;
exports.useDeleteApprovalFlow = useDeleteApprovalFlow;
exports.useGetAllApprovalFlows = useGetAllApprovalFlows;
exports.useGetApprovalFlowById = useGetApprovalFlowById;
exports.useReplaceEmployee = useReplaceEmployee;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateApprovalFlow() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-approval-flow'],
        mutationFn: (data) => admin_api_1.ApprovalFlowService.getInstance().createApprovalFlow(data),
    });
}
function useUpdateApprovalFlow(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-approval-flow'],
        mutationFn: (data) => admin_api_1.ApprovalFlowService.getInstance().updateApprovalFlow(id, data),
    });
}
function useDeleteApprovalFlow(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-approval-flow'],
        mutationFn: () => admin_api_1.ApprovalFlowService.getInstance().deleteApprovalFlow(id),
    });
}
function useGetAllApprovalFlows(documentType, queryParams) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-approval-flows', documentType, queryParams],
        queryFn: () => admin_api_1.ApprovalFlowService.getInstance().getAllApprovalFlows(documentType, queryParams),
    });
}
function useGetApprovalFlowById(id) {
    const enable = id.length > 1 ? id : null;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-approval-flow-by-id', id],
        queryFn: () => admin_api_1.ApprovalFlowService.getInstance().getApprovalFlowById(id),
        enabled: !!enable,
    });
}
function useReplaceEmployee() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['replace-employee'],
        mutationFn: (data) => admin_api_1.ApprovalFlowService.getInstance().replaceEmployee(data),
    });
}
//# sourceMappingURL=approval-flow.rq.js.map