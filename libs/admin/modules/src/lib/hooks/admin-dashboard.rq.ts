// hooks/useDashboardCounts.ts
import { useQueries, UseQueryResult } from '@tanstack/react-query';
import {
  AdminDashboardService,
  IEmployeeCount,
  IFarmerCount,
  IVendorCount,
  ICustomerCount,
  IProductCount,
  IBranchesCount,
  DashboardCounts
} from '@prime-fresh/admin_api';


export function useDashboardCounts(): {
  data: DashboardCounts;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
} {
  const svc = AdminDashboardService.getInstance();

  // Each query gets its own UseQueryResult<*, Error>
  const results = useQueries<
    // tuple of the four result types
    [
      UseQueryResult<IEmployeeCount, Error>,
      UseQueryResult<IFarmerCount, Error>,
      UseQueryResult<IVendorCount, Error>,
      UseQueryResult<ICustomerCount, Error>,
      UseQueryResult<IProductCount, Error>,
      UseQueryResult<IBranchesCount, Error>
    ]
  >({
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
