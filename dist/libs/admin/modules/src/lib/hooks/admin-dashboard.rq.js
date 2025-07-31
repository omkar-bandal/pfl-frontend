"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashboardCounts = useDashboardCounts;
// hooks/useDashboardCounts.ts
const react_query_1 = require("@tanstack/react-query");
const admin_api_1 = require("@prime-fresh/admin_api");
function useDashboardCounts() {
    const svc = admin_api_1.AdminDashboardService.getInstance();
    // Each query gets its own UseQueryResult<*, Error>
    const results = (0, react_query_1.useQueries)({
        queries: [
            {
                queryKey: ['dashboard', 'employeeCount'],
                queryFn: () => svc.getCountOfEmployees(),
            },
            {
                queryKey: ['dashboard', 'farmerCount'],
                queryFn: () => svc.getCountOfFarmers(),
            },
            {
                queryKey: ['dashboard', 'vendorCount'],
                queryFn: () => svc.getCountOfVendors(),
            },
            {
                queryKey: ['dashboard', 'customerCount'],
                queryFn: () => svc.getCountOfCustomers(),
            },
            {
                queryKey: ['dashboard', 'productCount'],
                queryFn: () => svc.getCountOfProducts(),
            },
            {
                queryKey: ['dashboard', 'branchesCount'],
                queryFn: () => svc.getCountOfBranches(),
            },
        ],
    });
    // Destructure for clarity
    const [empQ, farmerQ, vendorQ, customerQ, productQ, branchesQ] = results;
    return {
        data: {
            employeeCount: empQ.data,
            farmerCount: farmerQ.data,
            vendorCount: vendorQ.data,
            customerCount: customerQ.data,
            productCount: productQ.data,
            branchesCount: branchesQ.data
        },
        isLoading: results.some((r) => r.isLoading),
        isError: results.some((r) => r.isError),
        refetch: () => results.forEach((r) => r.refetch()),
    };
}
//# sourceMappingURL=admin-dashboard.rq.js.map