import { useQueries, useQuery, UseQueryResult } from '@tanstack/react-query';
import {
  AdminDashboardService,
  ApiBaseState,
  ErrorModel,
  IAdminDashboardPurchaseData,
  IAdminDashboardSalesData,
  IRegistrationsData,
  IUserStatisticData,
  IEmployeeCount,
  IFarmerCount,
  IVendorCount,
  ICustomerCount,
  IProductCount,
  IBranchesCount,
  DashboardCounts,
} from '@prime-fresh/services';

export function useGetRegistrationData(
  filterParams?: Record<string, any> | null
): UseQueryResult<ApiBaseState<IRegistrationsData>, ErrorModel> {
  return useQuery<ApiBaseState<IRegistrationsData>, ErrorModel>({
    queryKey: ['admin-dashboard-registration-data', filterParams],
    queryFn: () => AdminDashboardService.getInstance().getRegistrationData(filterParams),
    enabled: !!filterParams,
  });
}

export function useGetUserStatistics(): UseQueryResult<ApiBaseState<IUserStatisticData>, ErrorModel> {
  return useQuery<ApiBaseState<IUserStatisticData>, ErrorModel>({
    queryKey: ['admin-dashbaord-user-statistics'],
    queryFn: () => AdminDashboardService.getInstance().getUserStatisticData(),
  });
}

export function useGetAdminDashboardPurchaseData(
  filterParams: Record<string, any> | null
): UseQueryResult<ApiBaseState<IAdminDashboardPurchaseData>, ErrorModel> {
  return useQuery<ApiBaseState<IAdminDashboardPurchaseData>, ErrorModel>({
    queryKey: ['admin-dashboard-purchase-data', filterParams],
    queryFn: () => AdminDashboardService.getInstance().getAdminDashboardPurchaseData(filterParams),
    enabled: !!filterParams,
  });
}

export function useGetAdminDashboardSalesData(
  filterParams: Record<string, any> | null
): UseQueryResult<ApiBaseState<IAdminDashboardSalesData>, ErrorModel> {
  return useQuery<ApiBaseState<IAdminDashboardSalesData>, ErrorModel>({
    queryKey: ['admin-dashboard-sales-data', filterParams],
    queryFn: () => AdminDashboardService.getInstance().getAdminDashboardSalesData(filterParams),
    enabled: !!filterParams,
  });
}

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
      branchesCount: branchesQ.data,
    },
    isLoading: results.some((r) => r.isLoading),
    isError: results.some((r) => r.isError),
    refetch: () => results.forEach((r) => r.refetch()),
  };
}
