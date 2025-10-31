export const apiUrls = {
  //RFPA
  GET_ALL_RFPA: `/rfpa/`,
  GET_RFPA_FOR_VIEW_BY_ID: (id: string) => `/rfpa/view/${id}`,
  GET_RFPA_FOR_UPDATE_BY_ID: (id: string) => `/rfpa/${id}/update`,
  UPDATE_RFPA: (id: string) => `/rfpa/${id}`,
  DELETE_RFPA: (id: string) => `/rfpa/${id}`,
  DELETE_MULTIPLE_RFPA: `/rfpa/delete/multiple`,
  CREATE_RFPA: '/rfpa/',
  APPROVE_RFPA: '/rfpa/approve/',
  GET_ALL_RFPA_NO: '/rfpa/rfpanumbers/getAllRfpaNo',

  //Deal Slip
  GET_ALL_DEAL_SLIP: `/dealSlip/`,
  GET_DEAL_SLIP_FOR_VIEW_BY_ID: (id: string) => /*`/dealSlip/${id}/view`*/ `/dealslip/view/${id}`,
  GET_DEAL_SLIP_FOR_UPDATE_BY_ID: (id: string) => `/dealSlip/${id}/update`,
  UPDATE_DEAL_SLIP: (id: string) => `/dealSlip/${id}`,
  DELETE_DEAL_SLIP: (id: string) => `/dealSlip/${id}`,
  DELETE_MULTIPLE_DEAL_SLIP: ``,
  CREATE_DEAL_SLIP: '/dealSlip/',
  APPROVE_DEAL_SLIP: '/dealSlip/approve/',
  GET_ALL_DEAL_SLIP_NO: '/dealSlip/dealslipno/getAlldealslipNo',

  //GRN
  GET_ALL_GRN: `/grns/`,
  GET_GRN_FOR_VIEW_BY_ID: (id: string) => `/grns/view/${id}`,
  GET_GRN_FOR_UPDATE_BY_ID: (id: string) => `/grns/update/${id}`,
  UPDATE_GRN: (id: string) => `/grns/${id}`,
  DELETE_GRN: (id: string) => `/grns/${id}`,
  DELETE_MULTIPLE_GRN: ``,
  APPROVE_GRN: (id: string) => `/documents/update/${id}`,
  CREATE_GRN: '/grns/',
  GET_ALL_GRN_NO: '/grns/grnnumbers/getAllgrnNo',

  //Payment Request
  GET_ALL_PAYMENT_REQ: '/paymentRequest/',
  GET_PAYMENT_REQ_BY_ID: ' /paymentRequest/',
  CREATE_PAYMENT_REQ: '/paymentRequest',
  UPDATE_PAYMENT_REQ: '/paymentRequest',
  DELETE_PAYMENT_REQ: '/paymentRequest',

  //Vouchers
  //Multiple Cash voucher
  GET_ALL_MC_VOUCHER: `/multiCashVoucher/`,
  GET_MC_VOUCHER_FOR_VIEW_BY_ID: (id: string) => `/multiCashVoucher/${id}/view`,
  GET_MC_VOUCHER_FOR_UPDATE_BY_ID: (id: string) => `/multiCashVoucher/${id}/update`,
  UPDATE_MC_VOUCHER: (id: string) => `/multiCashVoucher/${id}`,
  DELETE_MC_VOUCHER: (id: string) => `/multiCashVoucher/${id}`,
  DELETE_MULTIPLE_MC_VOUCHER: ``,
  CREATE_MC_VOUCHER: `/multiCashVoucher/`,

  //PackingMaterialPaymentVoucher
  GET_ALL_PMP_VOUCHER: `/pmpvoucher/`,
  GET_PMP_VOUCHER_FOR_VIEW_BY_ID: (id: string) => `/pmpvoucher/${id}/view`,
  GET_PMP_VOUCHER_FOR_UPDATE_BY_ID: (id: string) => `/pmpvoucher/${id}/update`,
  UPDATE_PMP_VOUCHER: (id: string) => `/pmpvoucher/${id}`,
  DELETE_PMP_VOUCHER: (id: string) => `/pmpvoucher/${id}`,
  DELETE_MULTIPLE_PMP_VOUCHER: ``,
  CREATE_PMP_VOUCHER: `/pmpvoucher/`,

  //labour Payment Voucher
  GET_ALL_LP_VOUCHER: '/lpvoucher/',
  GET_LP_VOUCHER_FOR_VIEW_BY_ID: (id: string) => `/lpvoucher/${id}/view`,
  GET_LP_VOUCHER_FOR_UPDATE_BY_ID: (id: string) => `/lpvoucher/${id}/update`,
  UPDATE_LP_VOUCHER: (id: string) => `/lpvoucher/${id}`,
  DELETE_LP_VOUCHER: (id: string) => `/lpvoucher/${id}`,
  DELETE_MULTIPLE_LP_VOUCHER: ``,
  GET_LP_VOUCHER_BY_ID: '/lpvoucher',
  CREATE_LP_VOUCHER: '/lpvoucher/',

  //Transport Payment Voucher
  GET_ALL_TP_VOUCHER: `/tpvoucher/`,
  GET_TP_VOUCHER_FOR_VIEW_BY_ID: (id: string) => `/tpvoucher/${id}/view`,
  GET_TP_VOUCHER_FOR_UPDATE_BY_ID: (id: string) => `/tpvoucher/${id}/update`,
  UPDATE_TP_VOUCHER: (id: string) => `/tpvoucher/${id}`,
  DELETE_TP_VOUCHER: (id: string) => `/tpvoucher/${id}`,
  DELETE_MULTIPLE_TP_VOUCHER: ``,
  GET_TP_VOUCHER_BY_ID: '/tpvoucher',
  CREATE_TP_VOUCHER: '/tpvoucher/',

  //Delivery Challan Type Customer
  GET_ALL_DC_TYPE_CUSTOMER: `/customer-delivery-challan/`,
  CREATE_DC_TYPE_CUSTOMER: '/customer-delivery-challan/',
  GET_DC_TYPE_CUSTOMER_FOR_VIEW_BY_ID: '/customer-delivery-challan/view',
  GET_DC_TYPE_CUSTOMER_FOR_UPDATE_BY_ID: '/customer-delivery-challan/update',
  UPDATE_DC_TYPE_CUSTOMER: '',
  DELETE_DC_TYPE_CUSTOMER: '',
  DELETE_MULTIPLE_DC_TYPE_CUSTOMER: ``,

  //Delivery Challan Type Stock Transfer
  GET_ALL_DC_TYPE_STOCK_TRANSFER: `/tranfer-delivery-challan/`,
  CREATE_DC_TYPE_STOCK_TRANSFER: '/tranfer-delivery-challan/',
  GET_DC_TYPE_STOCK_TRANSFER_FOR_VIEW_BY_ID: '/tranfer-delivery-challan/view',
  GET_DC_TYPE_STOCK_TRANSFER_FOR_UPDATE_BY_ID: '/tranfer-delivery-challan/update',
  UPDATE_DC_TYPE_STOCK_TRANSFER: '',
  DELETE_DC_TYPE_STOCK_TRANSFER: '',
  DELETE_MULTIPLE_DC_TYPE_STOCK_TRANSFER: ``,

  GET_ALL_DELIVERY_CHALLAN_NO: '/deliveryChallan/challanNos/getAllChallanNo',
  CREATE_PROFORMA_INVOICE: '/invoice/generate/profarma',

  //Stock
  GET_STOCK: `/inventoryStock/stock/filter/report`,

  //Inward Register
  GET_ALL_INWARD_REGISTERS: `/inwardRegister/`,
  GET_INWARD_REGISTER_FOR_VIEW_BY_ID: `/inwardRegister/view`,
  GET_INWARD_REGISTER_FOR_UPDATE_BY_ID: `/inwardRegister/update`,
  UPDATE_INWARD_REGISTER: `/inwardRegister`,
  DELETE_INWARD_REGISTER: `/inwardRegister`,
  CREATE_INWARD_REGISTER: '/inwardRegister',

  //Arrival Quality Report
  GET_ALL_AQR: `/aqr/`,
  GET_AQR_FOR_VIEW_BY_ID: `/aqr/view`,
  GET_AQR_FOR_UPDATE_BY_ID: `/aqr/update`,
  UPDATE_AQR: `/aqr`,
  DELETE_AQR: `/aqr`,
  CREATE_AQR: '/aqr/',

  //Dump Register
  GET_ALL_DUMP_REGISTERS: `/dumpRegister/`,
  CREATE_DUMP_REGISTER: '/dumpRegister/',
  GET_DUMP_REGISTER_FOR_VIEW_BY_ID: `/dumpRegister/view`,
  GET_DUMP_REGISTER_FOR_UPDATE_BY_ID: `/dumpRegister/update`,
  UPDATE_DUMP_REGISTER: `/dumpRegister`,
  DELETE_DUMP_REGISTER: `/dumpRegister`,

  //Labor Registration
  GET_ALL_REGISTERED_LABORS: `/labors/`,
  CREATE_LABOR_REGISTRATION: '/labors/',
  GET_REGISTERED_LABOR_BY_ID: '/labors',
  UPDATE_REGISTERED_LABOR: '/labors',
  DELETE_REGISTERED_LABOR: '/labors',

  //Temporaty Labors
  GET_ALL_TEMP_LABORS: '/tempLabour/',
  GET_TEMP_LABOR_BY_ID: '/tempLabour',
  CREATE_A_TEMP_LABOR: '/tempLabour/',
  UPDATE_TEMP_LABOR: '/tempLabour',
  DELETE_TEMP_LABOR: '/tempLabour',

  //Labor Attendance
  GET_ALL_LABOR_ATTENDANCE: '/laborAttendances/',
  GET_LABOR_ATTENDANCE_BY_ID: '/laborAttendances',
  CREATE_LABOR_ATTENDANCE: '/laborAttendances/',
  UPDATE_LABOR_ATTENDANCE: '/laborAttendances',
  DELETE_LABOR_ATTENDANCE: '/laborAttendances',

  //Vehicle Dispatch Register
  GET_ALL_VEHICLE_DISPATCH_REGISTERS: `/vehicleDispatches/`,
  GET_VEHICLE_DISPATCH_REGISTER_FOR_VIEW_BY_ID: `/vehicleDispatches/view`,
  GET_VEHICLE_DISPATCH_REGISTER_FOR_UPDATE_BY_ID: `/vehicleDispatches`,
  UPDATE_VEHICLE_DISPATCH_REGISTER: `/vehicleDispatches`,
  DELETE_VEHICLE_DISPATCH_REGISTER: `/vehicleDispatches`,
  CREATE_VEHICLE_DISPATCH_REGISTER: '/vehicleDispatches/',

  //Second Sale Register
  GET_ALL_SECOND_SALES: `/secondSales/`,
  GET_SECOND_SALE_FOR_VIEW_BY_ID: (id: string) => `/secondSales/${id}/view`,
  GET_SECOND_SALE_FOR_UPDATE_BY_ID: (id: string) => `/secondSales/${id}/update`,
  UPDATE_SECOND_SALE: `/secondSales`,
  DELETE_SECOND_SALE: `/secondSales`,
  CREATE_SECOND_SALE: '/secondSales/',

  //EOD Report
  GET_ALL_EOD_REPORT: `/eodStock/`,
  GET_EOD_REPORT_FOR_VIEW_BY_ID: `/eodStock/view`,
  GET_EOD_REPORT_FOR_UPDATE_BY_ID: `/eodStock`,
  UPDATE_EOD_REPORT: `/eodStock`,
  DELETE_EOD_REPORT: `/eodStock`,
  CREATE_EOD_REPORT: '/eodStock/',

  GET_ALL_PROF_INV: '/invoice/getAll',
  CREATE_PROF_INV: '/invoice/generate/profarma',

  GET_ALL_FINAL_INV: '/invoice/getfinal/all',
  CREATE_FINAL_INV: '/invoice/generate/final',

  //Returned By Customer
  GET_ALL_RBC: `/returns/`,
  GET_RBC_BY_ID: `/returns`,
  GET_RBC_FOR_VIEW_BY_ID: `/returns/view`,
  GET_RBC_FOR_UPDATE_BY_ID: `/returns/update`,
  UPDATE_RBC: `/returns`,
  DELETE_RBC: `/returns`,
  CREATE_RBC: "/returns/",
};
