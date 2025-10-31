import { ChangeEvent, useState } from 'react';

type RegistrationFilterTypes = {
  createdBy: string;
  startDate: string;
  endDate: string;
};
type PurchaseFilterTypes = {
  createdBy?: string;
  company: string;
  product: string;
  source: string;
  sourceName: string;
  fromLocation: string;
  startDate: string;
  endDate: string;
};
type SalesFilterTypes = {
  createdBy?: string;
  company: string;
  product: string;
  customerName: string;
  startDate: string;
  endDate: string;
};
type QueryParamsType = {
  page: number;
  limit: number;
};

export const useAdminDashboardStates = () => {
  // Registration States
  const registrationFiltersInitVal: RegistrationFilterTypes = {
    createdBy: '',
    startDate: '',
    endDate: '',
  };
  const [registrationFilter, setRegistrationFilter] = useState<RegistrationFilterTypes>(registrationFiltersInitVal);
  const handleRegistrationFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegistrationFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleRegistrationFilterReset = () => {
    setRegistrationFilter(registrationFiltersInitVal);
  };
  const [showRegistrationFilter, setShwoRegistrationFilter] = useState<boolean>(false);
  const toggleRegistrationFilter = () => setShwoRegistrationFilter((prev) => !prev);

  // Purchase Filter States
  const purchaseFilterInitVal: PurchaseFilterTypes = {
    createdBy: null,
    company: null,
    product: null,
    source: null,
    sourceName: null,
    fromLocation: null,
    startDate: null,
    endDate: null,
  };

  const [purchaseFilters, setPurchaseFilters] = useState<PurchaseFilterTypes>(purchaseFilterInitVal);
  const handlePurchaseFilterChange = (event: any) => {
    const { name, value } = event.target;
    setPurchaseFilters((prev) => prev && { ...prev, [name]: value || null });
  };
  const handlePurchaseFilterReset = () => {
    setPurchaseFilters(purchaseFilterInitVal);
  };

  const [purchaseDataQueryParams, setPurchaseDataQueryParams] = useState<QueryParamsType>({ page: 1, limit: 10 });
  const handlePurchaseDataQueryParamsChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setPurchaseDataQueryParams((prev) => ({ ...prev, page: newValue }));
    }
  };

  const [showPurchaseFilters, setShowPurchaseFilters] = useState<boolean>(false);
  const togglePurchaseFilter = () => setShowPurchaseFilters((prev) => !prev);

  // Sales Filter States
  const salesFilterInitVal: SalesFilterTypes = {
    createdBy: null,
    company: null,
    product: null,
    customerName: null,
    startDate: null,
    endDate: null,
  };

  const [salesFilters, setSalesFilters] = useState<SalesFilterTypes>(salesFilterInitVal);
  const handleSalesFilterChange = (event: any) => {
    const { name, value } = event.target;
    setSalesFilters((prev) => prev && { ...prev, [name]: value || null });
  };
  const handleSalesFilterReset = () => {
    setSalesFilters(salesFilterInitVal);
  };

  const [salesDataQueryParams, setSalesDataQueryParams] = useState<QueryParamsType>({ page: 1, limit: 10 });
  const handleSalesDataQueryParamsChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setSalesDataQueryParams((prev) => ({ ...prev, page: newValue }));
    }
  };

  const [showSalesFilters, setShowSalesFilters] = useState<boolean>(false);
  const toggleSalesFilter = () => setShowPurchaseFilters((prev) => !prev);

  return {
    registrationFilter,
    showRegistrationFilter,
    handleRegistrationFilterChange,
    handleRegistrationFilterReset,
    toggleRegistrationFilter,
    purchaseFilters,
    purchaseDataQueryParams,
    showPurchaseFilters,
    handlePurchaseFilterChange,
    handlePurchaseFilterReset,
    handlePurchaseDataQueryParamsChange,
    togglePurchaseFilter,
    salesFilters,
    salesDataQueryParams,
    showSalesFilters,
    handleSalesFilterChange,
    handleSalesFilterReset,
    handleSalesDataQueryParamsChange,
    toggleSalesFilter,
  };
};
