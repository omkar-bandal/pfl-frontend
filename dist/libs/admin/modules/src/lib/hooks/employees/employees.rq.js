"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateEmployee = useCreateEmployee;
exports.useUpdateEmployeeById = useUpdateEmployeeById;
exports.useDeleteEmployeeById = useDeleteEmployeeById;
exports.useGetAllEmployees = useGetAllEmployees;
exports.useGetEmployeeById = useGetEmployeeById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateEmployee() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-employee'],
        mutationFn: (data) => admin_api_1.EmployeesService.getInstance().createEmployee(data),
    });
}
function useUpdateEmployeeById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-employee-by-id'],
        mutationFn: (data) => admin_api_1.EmployeesService.getInstance().updateEmployee(id, data),
    });
}
function useDeleteEmployeeById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-employee-by-id'],
        mutationFn: () => admin_api_1.EmployeesService.getInstance().deleteEmployeeById(id),
    });
}
function useGetAllEmployees() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-employees'],
        queryFn: () => admin_api_1.EmployeesService.getInstance().getAllEmployees(),
    });
}
function useGetEmployeeById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-employee-by-id'],
        queryFn: () => admin_api_1.EmployeesService.getInstance().getEmployeeById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=employees.rq.js.map