"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateEmployee = useCreateEmployee;
exports.useUpdateEmployeeById = useUpdateEmployeeById;
exports.useDeleteEmployeeById = useDeleteEmployeeById;
exports.useGetAllEmployees = useGetAllEmployees;
exports.useGetEmployeeForView = useGetEmployeeForView;
exports.useGetEmployeeForUpdate = useGetEmployeeForUpdate;
exports.useUpdateEmployeeStatus = useUpdateEmployeeStatus;
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
        mutationKey: ['update-employee'],
        mutationFn: (data) => admin_api_1.EmployeesService.getInstance().updateEmployee(id, data),
    });
}
function useDeleteEmployeeById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-employee'],
        mutationFn: () => admin_api_1.EmployeesService.getInstance().deleteEmployee(id),
    });
}
function useGetAllEmployees(queryParams) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-employees', queryParams],
        queryFn: () => admin_api_1.EmployeesService.getInstance().getAllEmployees(queryParams),
    });
}
function useGetEmployeeForView(id) {
    const employeeId = id.length > 1 ? id : null;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-employee-for-view', employeeId],
        queryFn: () => admin_api_1.EmployeesService.getInstance().getEmployeeForView(id),
        enabled: !!employeeId,
    });
}
function useGetEmployeeForUpdate(id) {
    const employeeId = id.length > 1 ? id : null;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-employee-for-update', employeeId],
        queryFn: () => admin_api_1.EmployeesService.getInstance().getEmployeeForUpdate(id),
        enabled: !!employeeId,
    });
}
function useUpdateEmployeeStatus(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-employee-status'],
        mutationFn: (status) => admin_api_1.EmployeesService.getInstance().updateEmployeeStatus(id, status),
    });
}
// export function useGetEmployeeById(id: string): UseQueryResult<ApiBaseState<IEmployee>, ErrorModel> {
//   const employeeId = id.length > 1 ? id : null;
//   return useQuery<ApiBaseState<IEmployee>, ErrorModel>({
//     queryKey: ['get-employee-by-id', employeeId],
//     queryFn: () => EmployeesService.getInstance().getEmployeeById(id),
//     enabled: !!employeeId,
//   });
// }
//# sourceMappingURL=employees.rq.js.map