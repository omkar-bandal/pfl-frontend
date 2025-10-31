import { useMemo, useState } from 'react';
import { IEmployee, UserPurchaseFilter, UserSalesFilter } from '@prime-fresh/services';
import { Box, Grid2, IconButton, Typography } from '@mui/material';
import {
  SectionHeader,
  ScrollableAutocomplete,
  LineChart,
  useScrollableAutocomplete,
  VirtualizedTable,
  DateInput,
  BtnSmall,
} from '../../components';
import {
  useDebounce,
  useGetUserDocumentReportCounts,
  useGetUserRegistrationCounts,
  useGetUserReportPurchaseData,
  useGetUserReportSalesData,
  useUserReportStates,
} from '@prime-fresh/shared/modules';
import { useGetAllEmployees } from '@prime-fresh/admin/modules';
import { UserDetailCard, UserReportPurchaseFilters, UserReportSalesFilters, ValueDisplayCard } from './sections';
import { documentReportCols, purchaseReportCols, registrationReportCols, salesReportCols } from './report-table-cols';
import { RestartAlt } from '@mui/icons-material';

export const UserReports = () => {
  const userReportStates = useUserReportStates();
  const employeeState = useScrollableAutocomplete(6);
  const debouncedSearch = useDebounce(employeeState.searchQuery, 1000);
  const {
    data: emps,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetAllEmployees(employeeState.queryParams, debouncedSearch);
  const employeeLists = emps?.data ? emps.data : [];
  const selectedEmployee: IEmployee | null = useMemo(
    () => employeeLists.find((emp) => emp.id === employeeState.selectedId) ?? null,
    [employeeState.selectedId, employeeLists]
  );

  const { data: regiData } = useGetUserRegistrationCounts({ createdBy: employeeState.selectedId });
  const registrationData = regiData?.data ?? null;
  const registrationReportRows = [
    {
      title: 'Registered Vendors',
      pending: registrationData?.vendors?.pending ?? 0,
      approved: registrationData?.vendors?.approved ?? 0,
      notApproved: registrationData?.vendors?.notApproved ?? 0,
      total: registrationData?.vendors?.total ?? 0,
    },
    {
      title: 'Registered Farmers',
      pending: registrationData?.farmers?.pending ?? 0,
      approved: registrationData?.farmers?.approved ?? 0,
      notApproved: registrationData?.farmers?.notApproved ?? 0,
      total: registrationData?.farmers?.total ?? 0,
    },
    {
      title: 'Registered Customers',
      pending: registrationData?.customers?.pending ?? 0,
      approved: registrationData?.customers?.approved ?? 0,
      notApproved: registrationData?.customers?.notApproved ?? 0,
      total: registrationData?.customers?.total ?? 0,
    },
  ];

  const { data: docRepData } = useGetUserDocumentReportCounts(userReportStates.docReportFilter);
  const docReportData = docRepData?.data ?? null;
  const docReportRows = [
    {
      title: 'Request For Purchase Approval',
      total: 0,
      hold: 0,
      approved: 0,
      rejected: 0,
      Complete: 0,
    },
    {
      title: 'Deal Slip',
      total: 0,
      hold: 0,
      approved: 0,
      rejected: 0,
      Complete: 0,
    },
    {
      title: 'Goods Receipt Note',
      total: 0,
      hold: 0,
      approved: 0,
      rejected: 0,
      Complete: 0,
    },
    {
      title: 'Delivery Challan (For Customer)',
      total: 0,
      hold: 0,
      approved: 0,
      rejected: 0,
      Complete: 0,
    },
    {
      title: 'Delivery Challan (For Stock Transfer)',
      total: 0,
      hold: 0,
      approved: 0,
      rejected: 0,
      Complete: 0,
    },
    {
      title: 'Arrival Quality Report',
      total: 0,
      hold: 0,
      approved: 0,
      rejected: 0,
      Complete: 0,
    },
    {
      title: 'Inward Register',
      total: 0,
      hold: 0,
      approved: 0,
      rejected: 0,
      Complete: 0,
    },
    {
      title: 'Dump Register',
      total: 0,
      hold: 0,
      approved: 0,
      rejected: 0,
      Complete: 0,
    },
    {
      title: 'Vehicle Dispatch Register',
      total: 0,
      hold: 0,
      approved: 0,
      rejected: 0,
      Complete: 0,
    },
    {
      title: 'Second Sale Register',
      total: 0,
      hold: 0,
      approved: 0,
      rejected: 0,
      Complete: 0,
    },
    {
      title: 'Multicash Voucher',
      total: 0,
      hold: 0,
      approved: 0,
      rejected: 0,
      Complete: 0,
    },
    {
      title: 'Labour Payment Voucher',
      total: 0,
      hold: 0,
      approved: 0,
      rejected: 0,
      Complete: 0,
    },
    {
      title: 'Transport Payment Voucher',
      total: 0,
      hold: 0,
      approved: 0,
      rejected: 0,
      Complete: 0,
    },
    {
      title: 'Packing Material Payment Voucher',
      total: 0,
      hold: 0,
      approved: 0,
      rejected: 0,
      Complete: 0,
    },
  ];
  const {
    data: purchase,
    isLoading: isLoadingPData,
    isFetching: isFetchingPData,
  } = useGetUserReportPurchaseData({ createdBy: employeeState.selectedId, ...userReportStates.purchaseFilters});
  const purchaseData = purchase?.data ? purchase?.data : null;
  console.log('User report purchase filters: ', userReportStates.purchaseFilters);
  const {
    data: sales,
    isLoading: isLoadingSData,
    isFetching: isFetchingSData,
  } = useGetUserReportSalesData({ createdBy: employeeState.selectedId, ...userReportStates.salesFilters});
  const salesData = sales?.data ? sales?.data : null;

  return (
    <Box flex={1}>
      <Grid2 container spacing={2} alignItems="center" padding={1}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" component="div" color="text.primary" sx={{ fontWeight: 600 }}>
            User Reports
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ScrollableAutocomplete<IEmployee, 'id'>
            name="employeeId"
            label="Select User Name"
            value={employeeState.selectedId}
            isLoading={isLoading}
            isFetching={isFetching}
            options={employeeLists}
            totalPages={emps?.totalPages || 1}
            noOptionsText="No Employee Found"
            getOptionLabel={(data) => `${data.firstName} ${data.middleName} ${data.lastName}`}
            optionValueKey="id"
            currentPage={employeeState.queryParams.page}
            onOpen={employeeState.handleOpen}
            onChange={(_: any, obj: any) => employeeState.setSelectedId(obj['id'])}
            onNextPage={employeeState.handleNextPage}
            onPrevPage={employeeState.handlePrevPage}
            onInputChange={employeeState.handleInputChange}
          />
        </Grid2>
      </Grid2>
      <Box flex={1} sx={{ p: 2, border: `1px solid #BDBDBD`, borderRadius: 5 }}>
        <Grid2 container spacing={1} alignItems="center">
          {/* User Details */}
          <Grid2 size={12}>
            <UserDetailCard
              userName={`${selectedEmployee?.firstName ?? ''} ${selectedEmployee?.middleName ?? ''} ${
                selectedEmployee?.lastName ?? ''
              }`}
              userContactNo={`${selectedEmployee?.primaryMobNo ?? ''} ${selectedEmployee ? ',' : ''} ${
                selectedEmployee?.secondaryMobNo ?? ''
              }`}
              userEmail={`${selectedEmployee?.workEmail ?? ''}`}
            />
          </Grid2>
          {/* Registration Report Section */}
          <Grid2 container size={12} marginY={1} alignItems="center">
            <Grid2 size={{ xs: 11.5, md: 5.5 }}>
              <Typography variant="h6" component="span" color="text.primary" sx={{ fontWeight: 700 }}>
                Registration Report
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 0.5, md: 0.5 }}>
              <IconButton
                color="secondary"
                aria-label="add an alarm"
                onClick={userReportStates.handleRegistrationFilterReset}
              >
                <RestartAlt />
              </IconButton>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <DateInput
                name="startDate"
                label="Start Date"
                value={userReportStates.registrationFilter.startDate ?? ''}
                onChange={userReportStates.handleRegistrationFilterChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <DateInput
                name="endDate"
                label="End Date"
                value={userReportStates.registrationFilter.endDate ?? ''}
                onChange={userReportStates.handleRegistrationFilterChange}
              />
            </Grid2>
          </Grid2>
          <Grid2 size={12}>
            <VirtualizedTable
              isLoading={isLoading}
              columns={registrationReportCols}
              data={registrationReportRows}
              height={105}
            />
          </Grid2>
          {/* Document Report Section */}
          <Grid2 container size={12} marginY={1} alignItems="center">
            <Grid2 size={{ xs: 11.5, md: 5.5 }}>
              <Typography variant="h6" component="div" color="text.primary" sx={{ fontWeight: 700, marginTop: 2 }}>
                Document Report
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 0.5, md: 0.5 }}>
              <IconButton
                color="secondary"
                aria-label="add an alarm"
                onClick={userReportStates.handleDocReportFilterReset}
              >
                <RestartAlt />
              </IconButton>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <DateInput
                name="startDate"
                label="Start Date"
                value={userReportStates.docReportFilter.startDate ?? ''}
                onChange={userReportStates.handleDocReportFilterChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <DateInput
                name="endDate"
                label="End Date"
                value={userReportStates.docReportFilter.endDate ?? ''}
                onChange={userReportStates.handleDocReportFilterChange}
              />
            </Grid2>
          </Grid2>
          <Grid2 size={12}>
            <VirtualizedTable
              isLoading={isLoading}
              columns={documentReportCols}
              data={docReportRows}
              height={490}
            />
          </Grid2>
          {/* Purchase Report Section */}
          <Grid2 size={12}>
            <Typography variant="h6" component="div" color="text.primary" sx={{ fontWeight: 700, marginTop: 2 }}>
              Purchase Report
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <UserReportPurchaseFilters
              filters={userReportStates.purchaseFilters}
              onFilterChange={userReportStates.handlePurchaseFilterChange}
              onFilterReset={userReportStates.handlePurchaseFilterReset}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <ValueDisplayCard title="Total Purchase Quantity" value={purchaseData?.overallTotalQty ?? 0} unit="Kg" />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <ValueDisplayCard title=" Total Purchase Amount" value={purchaseData?.overallTotalAmount ?? 0} unit="Rs" />
          </Grid2>
          <Grid2 size={12}>
            <VirtualizedTable
              isLoading={isLoadingPData && isFetchingPData}
              columns={purchaseReportCols}
              data={purchaseData?.dateWise ?? []}
              height={150}
            />
          </Grid2>
          {/* Sales Report Section */}
          <Grid2 size={12}>
            <Typography variant="h6" component="div" color="text.primary" sx={{ fontWeight: 700, marginTop: 2 }}>
              Sales Report
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <UserReportSalesFilters
              filters={userReportStates.salesFilters}
              onFilterChange={userReportStates.handleSalesFilterChange}
              onFilterReset={userReportStates.handleSalesFilterReset}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <ValueDisplayCard title="Total Sales Quantity" value={salesData?.overallTotalQty ?? 0} unit="Kg" />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <ValueDisplayCard title=" Total Sales Amount" value={salesData?.overallTotalAmount ?? 0} unit="Rs" />
          </Grid2>
          <Grid2 size={12}>
            <VirtualizedTable
              isLoading={isLoadingSData && isFetchingSData}
              columns={salesReportCols}
              data={salesData?.dateWise ?? []}
              height={150}
            />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};
