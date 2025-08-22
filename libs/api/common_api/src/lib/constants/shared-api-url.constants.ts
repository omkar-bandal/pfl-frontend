import { QueryParams } from '../models';

export const sharedApiUrls = {

  //Notifications
  GET_ALL_NOTIFICATIONS: `/notification/getallNotification`,
  GET_NOTIFICATIONS_BY_USER: `/notification/getbyuserid`,

  //Approval
  UPDATE_DOCUMENT_STATUS_THREE_LEVEL_APPROVAL: (id: string) => `/documents/update/${id}`,
  UPDATE_DOCUMENT_STATUS_TWO_LEVEL_APPROVAL: (id: string) => `/documents/updatesecondlevel/${id}`,
  UPDATE_DOCUMENT_STATUS_ONE_LEVEL_APPROVAL: (id: string) => `/documents/updatefirstlevel/${id}`,

  //Stock
  GET_ALL_STOCK: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/inventoryStock/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return '/inventoryStock/';
    }
  },
  GET_STOCK_GLOBAL: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/inventoryStock/stock/location-wise/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return '/inventoryStock/stock/location-wise/';
    }
  },
  GET_STOCK_BY_LOCATION: (
    location: string,
    companyName: string,
    queryParams?: QueryParams
  ) => {
    if (queryParams) {
      let url = `/inventoryStock/stock/product-wise?locationName=${location}&companyName=${companyName}?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/inventoryStock/stock/product-wise?locationName=${location}&companyId=${companyName}`;
    }
  },
  GET_STOCK_BY_PRODUCT: (
    productName: string,
    location: string,
    companyName: string,
    queryParams?: QueryParams
  ) => {
    if (queryParams) {
      let url = `/inventoryStock/stock/varient-wise?productName=${productName}&locationName=${location}&companyName=${companyName}?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/inventoryStock/stock/varient-wise?productName=${productName}&locationName=${location}&companyName=${companyName}`;
    }
  },
  GET_STOCK_BY_ID: '/inventoryStock',

  GET_EMPLOYEE_PARTIAL_DATA: '/employee/all/partial',

  GET_COMPANY_NAMES: '/company/partial/details',
  GET_ALL_COMPANIES_DATA: '/company/',
  GET_DEPARTMENT_BY_ID: '/departments',

  // GET_PRODUCTS_PARTIAL: '/products/partial/data',
  GET_PRODUCTS_PARTIAL: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/products/partial/data?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.search && queryParams.search.length > 0) {
        url = url + `&search=${queryParams.search}`;
      }
      return url;
    } else {
      return `/products/partial/data`;
    }
  },
  GET_PRODUCTS_PARTIAL_BY_ID: '/products/partial',
  SEARCH_PRODUCT: '/products/productname/?search=',
  SEARCH_PRODUCT_ALL_DATA: '/products/serachData/product?search=',

  GET_PACKAGING_MATERIAL_PARTIAL: '/packingMaterial/all/partial',

  GET_VENDORS_PARTIAL: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/vendors/filterVendor/all?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.search && queryParams.search.length > 0) {
        url = url + `&search=${queryParams.search}`;
      }
      return url;
    } else {
      return `/vendors/filterVendor/all`;
    }
  },
  GET_VENDORS_PARTIAL_BY_ID: '/vendors/filterData',
  SEARCH_VENDOR: '/vendors/filterVendor/withfilter?search=',

  GET_FARMERS_PARTIAL: (queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/farmers/filterFarmer/all?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (queryParams.search && queryParams.search.length > 0) {
        url = url + `&search=${queryParams.search}`;
      }
      return url;
    } else {
      return `/farmers/filterFarmer/all`;
    }
  },
  GET_FARMERS_PARTIAL_BY_ID: '/farmers/filterFarmer',
  SEARCH_FARMER: '/farmers/filterFarmer/search/withfilter?search=',

  GET_CUSTOMERS_PARTIAL: '/customers/partial/all',
  GET_CUSTOMER_NAMESL: '/customers/names/all',

  GET_UOM_PARTIAL: '/uoms/getAll/partialdata',

  GET_BRANCHES_PARTIAL: '/location-branches/filterData/filter/all',
  GET_OFFICES_PARTIAL: '/location-offices/filterData/filter/all',

  GET_ALL_RFPA_NO: '/rfpa/rfpanumbers/getAllRfpaNo',
  GET_ALL_DEAL_SLIP_NO: '/dealSlip/dealslipno/getAlldealslipNo',
  GET_ALL_GRN_NO: '/grns/grnnumbers/getAllgrnNo',
  GET_ALL_DELIVERY_CHALLAN_NO: '/deliveryChallan/challanNos/getAllChallanNo',

  GET_ALL_LEVELS: '/levels/',
};
