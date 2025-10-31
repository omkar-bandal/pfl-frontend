export type RegistrationCounts = {
  total: number;
  approved: number;
  pending: number;
  notApproved: number;
};

export interface IUserRegistrations {
  vendors: RegistrationCounts;
  farmers: RegistrationCounts;
  customers: RegistrationCounts;
}

export type DocumentReportCounts = {
  total: number;
  hold: number;
  approved: number;
  rejected: number;
  Complete: number;
};
export interface IUserDocumentReport {
  rfpa: DocumentReportCounts;
  dealSlip: DocumentReportCounts;
  grn: DocumentReportCounts;
  aqr: DocumentReportCounts;
  dumpRegister: DocumentReportCounts;
  inwardRegister: DocumentReportCounts;
  dcTypeCustomer: DocumentReportCounts;
  dcTypeStockTransfer: DocumentReportCounts;
  returnByCustomer: DocumentReportCounts;
  secondSale: DocumentReportCounts;
  vehicleDispatchRegister: DocumentReportCounts;
  multiCashVoucher: DocumentReportCounts;
  labourPaymentVoucher: DocumentReportCounts;
  transportPaymentVoucher: DocumentReportCounts;
  packingMaterialPaymentVoucher: DocumentReportCounts;
}

export type UserPurchaseFilter = {
  company: string | null;
  product: string | null;
  source: 'vendor' | 'farmer' | null;
  sourceName: string | null;
  fromLocation: string | null;
  startDate: string | null;
  endDate: string | null;
};

export type UserSalesFilter = {
  company: string | null;
  product: string | null;
  customerName: string | null;
  startDate: string | null;
  endDate: string | null;
};

export type DateRangeFilter = {
  startDate: string | null;
  endDate: string | null;
};

export type DateWiseData = {
  date: string;
  totalQty: number;
  totalAmount: number;
};

export interface IUserReportPurchaseData {
  overallTotalQty: number;
  overallTotalAmount: number;
  dateWise: Array<DateWiseData>;
}

export interface IUserReportSalesData {
  overallTotalQty: number;
  overallTotalAmount: number;
  dateWise: Array<DateWiseData>;
}
