import { QueryParams } from '@prime-fresh/common_api';
import { buildUrl } from '@prime-fresh/shared/modules';

export const purchaseApiUrl = {
  //RFPA
  GET_ALL_RFPA: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/rfpa/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/rfpa/`;
    }
  },
  GET_RFPA_FOR_VIEW_BY_ID: (id: string) => `/rfpa/${id}/view`,
  GET_RFPA_FOR_UPDATE_BY_ID: (id: string) => `/rfpa/${id}/update`,
  UPDATE_RFPA: (id: string) => `/rfpa/${id}`,
  DELETE_RFPA: (id: string) => `/rfpa/${id}`,
  CREATE_RFPA: '/rfpa/',
  APPROVE_RFPA: '/rfpa/approve/',
  GET_ALL_RFPA_NO: '/rfpa/rfpanumbers/getAllRfpaNo',

  //Deal Slip
  GET_ALL_DEAL_SLIP: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/dealSlip/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/dealSlip/`;
    }
  },
  GET_DEAL_SLIP_FOR_VIEW_BY_ID: (id: string) => `/dealSlip/${id}/view`,
  GET_DEAL_SLIP_FOR_UPDATE_BY_ID: (id: string) => `/dealSlip/${id}/update`,
  UPDATE_DEAL_SLIP: (id: string) => `/dealSlip/${id}`,
  DELETE_DEAL_SLIP: (id: string) => `/dealSlip/${id}`,
  CREATE_DEAL_SLIP: '/dealSlip/',
  APPROVE_DEAL_SLIP: '/dealSlip/approve/',
  GET_ALL_DEAL_SLIP_NO: '/dealSlip/dealslipno/getAlldealslipNo',

  //GRN
  GET_ALL_GRN: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/grns/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if(queryParams.filter){
        url = buildUrl(queryParams.filter, url);
      }
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/grns/`;
    }
  },
  GET_GRN_FOR_VIEW_BY_ID: (id: string) => `/grns/view/${id}`,
  GET_GRN_FOR_UPDATE_BY_ID: (id: string) => `/grns/update/${id}`,
  UPDATE_GRN: (id: string) => `/grns/${id}`,
  DELETE_GRN: (id: string) => `/grns/${id}`,
  APPROVE_GRN: (id: string) => `/api/documents/${id}/action `,
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
  GET_ALL_MC_VOUCHER: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/multiCashVoucher/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/multiCashVoucher/`;
    }
  },
  GET_MC_VOUCHER_FOR_VIEW_BY_ID: (id: string) => `/multiCashVoucher/${id}/view`,
  GET_MC_VOUCHER_FOR_UPDATE_BY_ID: (id: string) => `/multiCashVoucher/${id}/update`,
  UPDATE_MC_VOUCHER: (id: string) => `/multiCashVoucher/${id}`,
  DELETE_MC_VOUCHER: (id: string) => `/multiCashVoucher/${id}`,
  CREATE_MC_VOUCHER: `/multiCashVoucher/`,

  //PackingMaterialPaymentVoucher
  GET_ALL_PMP_VOUCHER: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/pmpvoucher/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/pmpvoucher/`;
    }
  },
  GET_PMP_VOUCHER_FOR_VIEW_BY_ID: (id: string) => `/pmpvoucher/${id}/view`,
  GET_PMP_VOUCHER_FOR_UPDATE_BY_ID: (id: string) => `/pmpvoucher/${id}/update`,
  UPDATE_PMP_VOUCHER: (id: string) => `/pmpvoucher/${id}`,
  DELETE_PMP_VOUCHER: (id: string) => `/pmpvoucher/${id}`,
  CREATE_PMP_VOUCHER: `/pmpvoucher/`,

  //labour Payment Voucher
  GET_ALL_LP_VOUCHER: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/lpvoucher/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/lpvoucher/`;
    }
  },
  GET_LP_VOUCHER_FOR_VIEW_BY_ID: (id: string) => `/lpvoucher/${id}/view`,
  GET_LP_VOUCHER_FOR_UPDATE_BY_ID: (id: string) => `/lpvoucher/${id}/update`,
  UPDATE_LP_VOUCHER: (id: string) => `/lpvoucher/${id}`,
  DELETE_LP_VOUCHER: (id: string) => `/lpvoucher/${id}`,
  GET_LP_VOUCHER_BY_ID: '/lpvoucher',
  CREATE_LP_VOUCHER: '/lpvoucher/',

  //Transport Payment Voucher
  GET_ALL_TP_VOUCHER: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/tpvoucher/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/tpvoucher/`;
    }
  },
  GET_TP_VOUCHER_FOR_VIEW_BY_ID: (id: string) => `/tpvoucher/${id}/view`,
  GET_TP_VOUCHER_FOR_UPDATE_BY_ID: (id: string) => `/tpvoucher/${id}/update`,
  UPDATE_TP_VOUCHER: (id: string) => `/tpvoucher/${id}`,
  DELETE_TP_VOUCHER: (id: string) => `/tpvoucher/${id}`,
  GET_TP_VOUCHER_BY_ID: '/tpvoucher',
  CREATE_TP_VOUCHER: '/tpvoucher/',

  //Delivery Challan
  GET_ALL_DELIVERY_CHALLAN: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/deliveryChallan/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/deliveryChallan/`;
    }
  },
  GET_DELIVERY_CHALLAN_BY_ID: '/deliveryChallan',
  CREATE_DELIVERY_CHALLAN: '/deliveryChallan/',
  UPDATE_DELIVERY_CHALLAN: '/deliveryChallan',
  DELETE_DELIVERY_CHALLAN: '/deliveryChallan',
  GET_ALL_DELIVERY_CHALLAN_NO: '/deliveryChallan/challanNos/getAllChallanNo',
  CREATE_PROFORMA_INVOICE: '/invoice/generate/profarma',

  GET_ALL_DC_TYPE_CUSTOMER: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/customer-delivery-challan/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/customer-delivery-challan/`;
    }
  },
  CREATE_DC_TYPE_CUSTOMER: '/customer-delivery-challan/',
  GET_DC_TYPE_CUSTOMER_FOR_VIEW_BY_ID: '/customer-delivery-challan/view',
  GET_DC_TYPE_CUSTOMER_FOR_UPDATE_BY_ID: '/customer-delivery-challan/update',
  UPDATE_DC_TYPE_CUSTOMER: '',
  DELETE_DC_TYPE_CUSTOMER: '',

  GET_ALL_DC_TYPE_STOCK_TRANSFER: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/tranfer-delivery-challan/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/tranfer-delivery-challan/`;
    }
  },
  CREATE_DC_TYPE_STOCK_TRANSFER: '/tranfer-delivery-challan/',
  GET_DC_TYPE_STOCK_TRANSFER_FOR_VIEW_BY_ID: '/tranfer-delivery-challan/view',
  GET_DC_TYPE_STOCK_TRANSFER_FOR_UPDATE_BY_ID: '/tranfer-delivery-challan/update',
  UPDATE_DC_TYPE_STOCK_TRANSFER: '',
  DELETE_DC_TYPE_STOCK_TRANSFER: '',
};
