"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateDepartment = useCreateDepartment;
exports.useUpdateDepartmentById = useUpdateDepartmentById;
exports.useDeleteDepartmentById = useDeleteDepartmentById;
exports.useGetAllDepartments = useGetAllDepartments;
exports.useGetDepartmentById = useGetDepartmentById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateDepartment() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-department'],
        mutationFn: (data) => admin_api_1.DepartmentService.getInstance().createDepartment(data),
    });
}
function useUpdateDepartmentById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-department-by-id'],
        mutationFn: (data) => admin_api_1.DepartmentService.getInstance().updateDepartment(id, data),
    });
}
function useDeleteDepartmentById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-department-by-id'],
        mutationFn: () => admin_api_1.DepartmentService.getInstance().deleteDepartmentById(id),
    });
}
function useGetAllDepartments() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-departments'],
        queryFn: () => admin_api_1.DepartmentService.getInstance().getAllDepartments(),
    });
}
function useGetDepartmentById(id) {
    const departmentId = id.length > 1 ? id : null;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-department-by-id', departmentId],
        queryFn: () => admin_api_1.DepartmentService.getInstance().getDepartmentById(id),
        enabled: !!departmentId,
    });
}
//# sourceMappingURL=department.rq.js.map