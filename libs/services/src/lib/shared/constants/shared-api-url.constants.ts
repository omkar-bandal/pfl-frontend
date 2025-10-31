import { QueryParams } from '../models';

export const sharedApiUrls = {
  //Admin Dashboard
  GET_USERS_STATISTICS: `/admin/dashboard/active-users`,
  COUNT_EMPLOYEE: `/admin/dashboard/employee/total-count`,
  COUNT_FARMER: `/admin/dashboard/farmer/total-count`,
  COUNT_VENDOR: `/admin/dashboard/vender/total-count`,
  COUNT_CUSTOMER: `/admin/dashboard/customer/total-count`,
  COUNT_PRODUCTS: `/admin/dashboard/product/total-count`,
  COUNT_BRANCHES: `/admin/dashboard/branch/total-count`,

  //Customers
  GET_ALL_CUSTOMERS: '/customers/',
  CREATE_CUSTOMER: '/customers/',
  DELETE_CUSTOMER: '/customers',
  UPDATE_CUSTOMER: '/customers',
  GET_A_CUSTOMER_FOR_VIEW: '/customers/view',
  GET_A_CUSTOMER_FOR_UPDATE: '/customers/update',
  GET_CUSTOMER_NAMES: '/customers/names/all',
  GET_CUSTOMER_PARTIAL_DATA: '/customers/partial/all',
  CHANGE_STATUS_CUSTOMER: '/customers/approve',
  GET_ALL_CUSTOMER_TYPE: `/customerType/`,
  GET_ALL_CUSTOMER_CATEGORY: `/customerCategory/`,

  //Farmers
  GET_ALL_FARMERS: `/farmers/`,
  CREATE_FARMER: '/farmers/',
  GET_A_FARMER_FOR_UPDATE: '/farmers/update',
  GET_A_FARMER_FOR_VIEW: '/farmers/view',
  UPDATE_FARMER: '/farmers',
  DELETE_FARMER: '/farmers',
  GET_ALL_FARMERS_FILTERED: '/farmers/filterFarmer/all',
  CHANGE_STATUS_FARMER: '/farmers/approve',

  //Vendors
  GET_ALL_VENDORS: `/vendors/`,
  CREATE_VENDOR: '/vendors/',
  GET_A_VENDOR: '/vendors',
  GET_A_VENDOR_FOR_VIEW: '/vendors/view',
  GET_A_VENDOR_FOR_UPDATE: '/vendors/update',
  UPDATE_VENDOR: '/vendors',
  DELETE_VENDOR: '/vendors',
  GET_ALL_VENDORS_FILTERED: '/vendors/filterVendor/all',
  CHANGE_STATUS_VENDOR: '/vendors/approve',
  GET_ALL_VENDOR_CAT: '/vendor-categories/',
  GET_VENDOR_SUBCAT_BY_QUERY: '/vendor-subcategories/getSubcategories',

  //Prooducts
  GET_ALL_PRODUCTS: `/products/`,
  CREATE_PRODUCTS: '/products/',
  GET_A_PRODUCTS: '/products',
  UPDATE_PRODUCTS: '/products',
  DELETE_PRODUCT: '/products',

  //Product Variants
  GET_ALL_PRODUCT_VARIANTS: `/products/getVarient`,

  //Notifications
  GET_ALL_NOTIFICATIONS: `/notification/getallNotification`,
  GET_NOTIFICATIONS_BY_USER: `/notification/getbyuserid`,

  //Approval
  UPDATE_DOCUMENT_STATUS_THREE_LEVEL_APPROVAL: (id: string) => `/documents/update/${id}`,
  UPDATE_DOCUMENT_STATUS_TWO_LEVEL_APPROVAL: (id: string) => `/documents/updatesecondlevel/${id}`,
  UPDATE_DOCUMENT_STATUS_ONE_LEVEL_APPROVAL: (id: string) => `/documents/updatefirstlevel/${id}`,

  //Get address by pincode
  GET_ADDRESS_BY_PINCODE: `/pincode/fetchAddressByPincode?pincode=`,

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
  GET_STOCK_BY_LOCATION: (location: string, companyName: string, queryParams?: QueryParams) => {
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
  GET_STOCK_BY_PRODUCT: (productName: string, location: string, companyName: string, queryParams?: QueryParams) => {
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
  GET_PRODUCTS_PARTIAL: `/products/partial/data`,
  GET_PRODUCTS_PARTIAL_BY_ID: '/products/partial',
  SEARCH_PRODUCT: '/products/productname/?search=',
  SEARCH_PRODUCT_ALL_DATA: '/products/serachData/product?search=',

  //Variants
  GET_VARIANTS_PARTIAL: '/varients/partial/data',
  GET_VARIANTS_BY_PRODUCT_ID: '/products/getall/getvarient',

  GET_PACKAGING_MATERIAL_PARTIAL: '/packingMaterial/all/partial',

  GET_VENDORS_PARTIAL: `/vendors/filterVendor/all`,
  GET_VENDORS_PARTIAL_BY_ID: '/vendors/filterData',
  SEARCH_VENDOR: '/vendors/filterVendor/withfilter?search=',

  GET_FARMERS_PARTIAL: `/farmers/filterFarmer/all`,
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

  //Reports
  GET_USER_REGISTRATION_COUNT: `/userreport/user-counts`,
  GET_USER_DOCUMENT_REPORT_COUNT: `/userreport/getCountsbystatus`,
  GET_USER_REPORT_PURCHASE_DATA: `/userreport/total-purchase`,
  GET_USER_REPORT_SALES_DATA: `/userreport/total-sale`,
};
