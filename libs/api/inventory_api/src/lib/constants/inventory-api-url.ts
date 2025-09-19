import { QueryParams } from '@prime-fresh/common_api';

export const inventoryApiUrl = {

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
