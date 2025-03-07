"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateBranch = useCreateBranch;
exports.useUpdateBranchById = useUpdateBranchById;
exports.useDeleteBranchById = useDeleteBranchById;
exports.useGetAllBranches = useGetAllBranches;
exports.useGetBranchById = useGetBranchById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateBranch(branchType) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-branch'],
        mutationFn: (data) => admin_api_1.BranchService.getInstance().createBranch(data, branchType),
    });
}
function useUpdateBranchById(id, branchType) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-branch-by-id'],
        mutationFn: (data) => admin_api_1.BranchService.getInstance().updateBranch(id, branchType, data),
    });
}
function useDeleteBranchById(id, branchType) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-branch-by-id'],
        mutationFn: () => admin_api_1.BranchService.getInstance().deleteBranchById(id, branchType),
    });
}
function useGetAllBranches(branchType) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-branchs', branchType],
        queryFn: () => admin_api_1.BranchService.getInstance().getAllBranches(branchType),
        enabled: !!branchType
    });
}
function useGetBranchById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-branch-by-id', id],
        queryFn: () => admin_api_1.BranchService.getInstance().getBranchById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=branches.rq.js.map