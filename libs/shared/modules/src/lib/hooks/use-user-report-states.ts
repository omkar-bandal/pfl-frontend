import { DateRangeFilter, UserPurchaseFilter, UserSalesFilter } from '@prime-fresh/services';
import { ChangeEvent, useState } from 'react';

export const useUserReportStates = () => {
  const dateRangeInitVal: DateRangeFilter = {
    startDate: '',
    endDate: '',
  };
  const [registrationFilter, setRegistrationFilter] = useState<DateRangeFilter>(dateRangeInitVal);
  const handleRegistrationFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegistrationFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleRegistrationFilterReset = () => {
    setRegistrationFilter(dateRangeInitVal);
  };
  const [docReportFilter, setDocReportFilter] = useState<DateRangeFilter>(dateRangeInitVal);
  const handleDocReportFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDocReportFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleDocReportFilterReset = () => {
    setDocReportFilter(dateRangeInitVal);
  };

  const purchaseFilterInitVal: UserPurchaseFilter = {
    company: null,
    product: null,
    source: null,
    sourceName: null,
    fromLocation: null,
    startDate: null,
    endDate: null,
  };
  const [purchaseFilters, setPurchaseFilters] = useState<UserPurchaseFilter>(purchaseFilterInitVal);
  const handlePurchaseFilterChange = (event: any) => {
    const { name, value } = event.target;
    setPurchaseFilters((prev) => prev && { ...prev, [name]: value || null });
  };
  const handlePurchaseFilterReset = () => {
    setPurchaseFilters(purchaseFilterInitVal);
  };

  const salesFilterInitVal: UserSalesFilter = {
    company: null,
    product: null,
    customerName: null,
    startDate: null,
    endDate: null,
  };
  const [salesFilters, setSalesFilters] = useState<UserSalesFilter>(salesFilterInitVal);
  const handleSalesFilterChange = (event: any) => {
    const { name, value } = event.target;
    setSalesFilters((prev) => prev && { ...prev, [name]: value || null });
  };
  const handleSalesFilterReset = () => {
    setSalesFilters(salesFilterInitVal);
  };

  return {
    registrationFilter,
    handleRegistrationFilterChange,
    handleRegistrationFilterReset,
    docReportFilter,
    handleDocReportFilterChange,
    handleDocReportFilterReset,
    purchaseFilters,
    handlePurchaseFilterChange,
    handlePurchaseFilterReset,
    salesFilters,
    handleSalesFilterChange,
    handleSalesFilterReset,
  };
};
