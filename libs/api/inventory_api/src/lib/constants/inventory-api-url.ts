import { QueryParams } from '@prime-fresh/common_api';

export const inventoryApiUrl = {
  //Inward Register
  GET_ALL_INWARD_REGISTERS: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/inwardRegister/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/inwardRegister/`;
    }
  },
  GET_INWARD_REGISTER_FOR_VIEW_BY_ID: (id: string) => `/inwardRegister/view/${id}`,
  GET_INWARD_REGISTER_FOR_UPDATE_BY_ID: (id: string) => `/inwardRegister/update/${id}`,
  UPDATE_INWARD_REGISTER: (id: string) => `/inwardRegister/${id}`,
  DELETE_INWARD_REGISTER: (id: string) => `/inwardRegister/${id}`,
  CREATE_INWARD_REGISTER: '/inwardRegister',

  //Arrival Quality Report
  GET_ALL_AQR: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/aqr/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/aqr/`;
    }
  },
  GET_AQR_FOR_VIEW_BY_ID: (id: string) => `/aqr/view/${id}`,
  GET_AQR_FOR_UPDATE_BY_ID: (id: string) => `/aqr/update/${id}`,
  UPDATE_AQR: (id: string) => `/aqr/${id}`,
  DELETE_AQR: (id: string) => `/aqr/${id}`,
  CREATE_AQR: '/aqr/',

  //Dump Register
  GET_ALL_DUMP_REGISTERS: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/dumpRegister/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/dumpRegister/`;
    }
  },
  GET_DUMP_REGISTER_FOR_VIEW_BY_ID: (id: string) => `/dumpRegister/view/${id}`,
  GET_DUMP_REGISTER_FOR_UPDATE_BY_ID: (id: string) => `/dumpRegister/update/${id}`,
  UPDATE_DUMP_REGISTER: (id: string) => `/dumpRegister/${id}`,
  DELETE_DUMP_REGISTER: (id: string) => `/dumpRegister/${id}`,
  CREATE_DUMP_REGISTER: '/dumpRegister/',

  //Labor Registration
  GET_ALL_REGISTERED_LABORS: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/labors/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/labors/`;
    }
  },
  GET_REGISTERED_LABOR_BY_ID: '/labors',
  CREATE_LABOR_REGISTRATION: '/labors/',
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
  GET_ALL_VEHICLE_DISPATCH_REGISTERS: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/vehicleDispatches/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/vehicleDispatches/`;
    }
  },
  GET_VEHICLE_DISPATCH_REGISTER_FOR_VIEW_BY_ID: (id: string) => `/vehicleDispatches/view/${id}`,
  GET_VEHICLE_DISPATCH_REGISTER_FOR_UPDATE_BY_ID: (id: string) => `/vehicleDispatches/${id}`,
  UPDATE_VEHICLE_DISPATCH_REGISTER: (id: string) => `/vehicleDispatches/${id}`,
  DELETE_VEHICLE_DISPATCH_REGISTER: (id: string) => `/vehicleDispatches/${id}`,
  CREATE_VEHICLE_DISPATCH_REGISTER: '/vehicleDispatches/',

  //Second Sale Register
  GET_ALL_SECOND_SALES: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/secondSales/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/secondSales/`;
    }
  },
  GET_SECOND_SALE_FOR_VIEW_BY_ID: (id: string) => `/secondSales/${id}/view`,
  GET_SECOND_SALE_FOR_UPDATE_BY_ID: (id: string) => `/secondSales/${id}/update`,
  UPDATE_SECOND_SALE: (id: string) => `/secondSales/${id}`,
  DELETE_SECOND_SALE: (id: string) => `/secondSales/${id}`,
  CREATE_SECOND_SALE: '/secondSales/',

  //EOD Report
  GET_ALL_EOD_REPORT: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/eodStock/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/eodStock/`;
    }
  },
  GET_EOD_REPORT_FOR_VIEW_BY_ID: (id: string) => `/eodStock/view/${id}`,
  GET_EOD_REPORT_FOR_UPDATE_BY_ID: (id: string) => `/eodStock/${id}`,
  UPDATE_EOD_REPORT: (id: string) => `/eodStock/${id}`,
  DELETE_EOD_REPORT: (id: string) => `/eodStock/${id}`,
  CREATE_EOD_REPORT: '/eodStock/',

  GET_ALL_PROF_INV: '/invoice/getAll',
  CREATE_PROF_INV: '/invoice/generate/profarma',

  GET_ALL_FINAL_INV: '/invoice/getfinal/all',
  CREATE_FINAL_INV: '/invoice/generate/final',

  //Returned By Customer
  GET_ALL_RBC: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/returns/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/returns/`;
    }
  },
  GET_RBC_BY_ID: (id: string) => `/returns/${id}`,
  UPDATE_RBC: (id: string) => `/returns/${id}`,
  DELETE_RBC: (id: string) => `/returns/${id}`,
  CREATE_RBC: "/returns/",

};
