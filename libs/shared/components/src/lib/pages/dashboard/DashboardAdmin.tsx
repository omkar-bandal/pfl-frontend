import { Box, Collapse, Skeleton } from '@mui/material';
import { PurchaseSection, RegistrationDataFilter, RegistrationSection, SalesSection, UserStatistics } from './sections';
import { IUserStatisticData } from '@prime-fresh/services';
import { adminRoutes } from '@prime-fresh/admin/modules';
import { UserReportPurchaseFilters, UserReportSalesFilters } from '../reports/sections';
import { DashboardSectionHeader } from '../../components';
import {
  sharedRoutes,
  useAdminDashboardStates,
  useGetAdminDashboardPurchaseData,
  useGetAdminDashboardSalesData,
  useGetRegistrationData,
  useGetUserStatistics,
} from '@prime-fresh/shared/modules';
import { operationsRoutes } from '@prime-fresh/operations/modules';

export const DashboardAdmin = () => {
  const adminDashboardStates = useAdminDashboardStates();
  const {
    data: regi,
    isLoading: isRegiLoading,
    isFetching: isRegiFetching,
    isError: isRegiError,
  } = useGetRegistrationData(adminDashboardStates.registrationFilter);
  const registrationData = regi?.data ? regi.data : null;
  const isRegistrationDataLoading = isRegiLoading && isRegiFetching && !isRegiError;

  const {
    data: userStat,
    isLoading: isUserStatLoading,
    isFetching: isUserStatFetching,
    isError: isUserStatError,
  } = useGetUserStatistics();
  const isUserStatisticLoading = isUserStatLoading && isUserStatFetching && !isUserStatError;
  const userStatData = userStat?.data ? userStat?.data : null;

  const {
    data: pData,
    isLoading: isPDataLoading,
    isFetching: isPDataFetching,
    isError: isPDataError,
  } = useGetAdminDashboardPurchaseData(adminDashboardStates.purchaseFilters);
  const purchaseData = pData?.data ? pData?.data : null;
  const totalPDataPages = pData?.totalPages ?? 1;
  const isPurchaseDataLoading = isPDataLoading && isPDataFetching && !isPDataError;

  const {
    data: sData,
    isLoading: isSDataLoading,
    isFetching: isSDataFetching,
    isError: isSDataError,
  } = useGetAdminDashboardSalesData(adminDashboardStates.salesFilters);
  const salesData = sData?.data ? sData?.data : null;
  const totalSDataPages = sData?.totalPages ?? 1;
  const isSalesDataLoading = isSDataLoading && isSDataFetching && !isSDataError;

  return (
    <Box flex={1} padding={1}>
      {/* Admin Dashboard Registration Section */}
      <DashboardSectionHeader
        title="Registrations"
        navBtnLabel="View User Report"
        navRoute={sharedRoutes.USER_REPORTS}
        onFilterBtnClick={adminDashboardStates.toggleRegistrationFilter}
      />
      <Collapse
        in={adminDashboardStates.showRegistrationFilter}
        timeout="auto"
        sx={{
          width: '100%',
        }}
      >
        <RegistrationDataFilter
          filters={adminDashboardStates.registrationFilter}
          onFilterChange={adminDashboardStates.handleRegistrationFilterChange}
          onFilterReset={adminDashboardStates.handleRegistrationFilterReset}
        />
      </Collapse>
      <RegistrationSection data={registrationData} isLoading={isRegistrationDataLoading} />

      {/* Admin Dashboard User Statistics */}
      <DashboardSectionHeader
        title="User Statistics"
        navBtnLabel="View All Users"
        navRoute={adminRoutes.VIEW_ALL_EMPLOYEES}
      />
      {isUserStatisticLoading ? (
        <Skeleton variant="rounded" animation="wave" width={`100%`} height={300} />
      ) : (
        <UserStatistics data={userStatData} />
      )}

      {/* Admin Dashboard Purchase Section */}
      <DashboardSectionHeader
        title="Purchase"
        navBtnLabel="View All"
        navRoute={operationsRoutes.VIEW_ALL_GRN}
        onFilterBtnClick={adminDashboardStates.togglePurchaseFilter}
      />
      <Collapse
        in={adminDashboardStates.showPurchaseFilters}
        timeout="auto"
        sx={{
          width: '100%',
        }}
      >
        <UserReportPurchaseFilters
          filters={adminDashboardStates.purchaseFilters}
          onFilterChange={adminDashboardStates.handlePurchaseFilterChange}
          onFilterReset={adminDashboardStates.handlePurchaseFilterReset}
        />
      </Collapse>
      <PurchaseSection
        data={purchaseData}
        purchaseQueryParams={adminDashboardStates.purchaseDataQueryParams}
        onPurchaseQueryParamsChange={adminDashboardStates.handlePurchaseDataQueryParamsChange}
        totalPages={totalPDataPages}
        isLoading={isPurchaseDataLoading}
      />

      {/* Admin Dashboard Sales Section */}
      <DashboardSectionHeader
        title="Sales"
        navBtnLabel="View All"
        navRoute={operationsRoutes.VIEW_ALL_DC_TYPE_CUSTOMER}
        onFilterBtnClick={adminDashboardStates.toggleSalesFilter}
      />
      <Collapse
        in={adminDashboardStates.showSalesFilters}
        timeout="auto"
        sx={{
          width: '100%',
        }}
      >
        <UserReportSalesFilters
          filters={adminDashboardStates.salesFilters}
          onFilterChange={adminDashboardStates.handleSalesFilterChange}
          onFilterReset={adminDashboardStates.handleSalesFilterReset}
        />
      </Collapse>
      <SalesSection
        data={salesData}
        salesQueryParams={adminDashboardStates.salesDataQueryParams}
        onSalesQueryParamsChange={adminDashboardStates.handleSalesDataQueryParamsChange}
        totalPages={totalSDataPages}
        isLoading={isSalesDataLoading}
      />
    </Box>
  );
};
