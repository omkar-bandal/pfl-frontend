import { Grid2 } from '@mui/material';
import { BtnSmall, DateInput, ScrollableAutocomplete, useScrollableAutocomplete } from '../../../components';
import { FC } from 'react';
import { useDebounce, useGetEmployeePartialData } from '@prime-fresh/shared/modules';
import { EmployeePartialData } from '@prime-fresh/services';

type RegistrationDataFilterProps = {
  filters: { createdBy: string; startDate: string; endDate: string };
  onFilterChange: any;
  onFilterReset: any;
};
export const RegistrationDataFilter: FC<RegistrationDataFilterProps> = ({ filters, onFilterChange, onFilterReset }) => {
  const employeeState = useScrollableAutocomplete(6);
  const debouncedProductSearch = useDebounce(employeeState.searchQuery, 1000);
  const {data: emp, isLoading: isEmpLoading, isFetching: isEmpFetching} = useGetEmployeePartialData();
  const empData = emp?.data ?? [];
  return (
    <Grid2
      container
      size={12}
      spacing={2}
      marginY={1}
      sx={{ border: `1px solid #BDBDBD`, borderRadius: 3, padding: 2 }}
    >
      <Grid2 size={{ xs: 12, md: 3 }}>
        <DateInput
          name="startDate"
          label="Start Date"
          value={filters.startDate || ''}
          onChange={(e) => onFilterChange(e)}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <DateInput name="endDate" label="End Date" value={filters.endDate || ''} onChange={(e) => onFilterChange(e)} />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <ScrollableAutocomplete<EmployeePartialData, 'id'>
          name="employeeState.selectedId"
          label="Users"
          value={employeeState.selectedId}
          isLoading={isEmpLoading}
          isFetching={isEmpFetching}
          options={empData}
          totalPages={emp?.totalPages || 1}
          noOptionsText="No Product Found"
          getOptionLabel={(data) => data.fullName}
          optionValueKey="id"
          currentPage={employeeState.queryParams.page}
          onOpen={employeeState.handleOpen}
          onChange={employeeState.setSelectedId}
          onNextPage={employeeState.handleNextPage}
          onPrevPage={employeeState.handlePrevPage}
          onInputChange={employeeState.handleInputChange}
        />
      </Grid2>
      <Grid2>
        <BtnSmall label="Reset" color="secondary" onClick={onFilterReset} />
      </Grid2>
    </Grid2>
  );
};
