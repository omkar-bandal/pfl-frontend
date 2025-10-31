import { QueryParams } from '../../shared';
import { IDocumentType } from '../models';

export const adminApiUrlConstants = {
  //Admin Dashboard
  COUNT_EMPLOYEE: `/admin/dashboard/employee/total-count`,
  COUNT_FARMER: `/admin/dashboard/farmer/total-count`,
  COUNT_VENDOR: `/admin/dashboard/vender/total-count`,
  COUNT_CUSTOMER: `/admin/dashboard/customer/total-count`,
  COUNT_PRODUCTS: `/admin/dashboard/product/total-count`,
  COUNT_BRANCHES: `/admin/dashboard/branch/total-count`,

  //Department
  GET_ALL_DEPARTMENT: '/departments/',
  GET_DEPARTMENT_BY_ID: '/departments',
  CREATE_DEPARTMENT: '/departments/',
  UPDATE_DEPARTMENT: '/departments',
  DELETE_DEPARTMENT: '/departments',

  //Level
  GET_ALL_LEVEL: '/levels/',
  GET_LEVEL_BY_ID: '/levels',
  CREATE_LEVEL: '/levels/',
  UPDATE_LEVEL: '/levels',
  DELETE_LEVEL: '/levels',

  //Document Details
  GET_ALL_DOCUMENT_DETAILS: '/document-details/',
  CREATE_DOCUMENT_DETAILS: '/document-details/',

  //Employee
  GET_ALL_EMPLOYEES: `/employee/`,
  CREATE_EMPLOYEE: '/employee/',
  GET_AN_EMPLOYEE: '/employee',
  GET_AN_EMPLOYEE_FOR_VIEW: (id: string) => `/employee/${id}/view`,
  GET_AN_EMPLOYEE_FOR_UPDATE: (id: string) => `/employee/${id}/update`,
  UPDATE_AN_EMPLOYEE: (id: string) => `/employee/${id}`,
  DELETE_EMPLOYEE: (id: string) => `/employee/${id}`,
  UPDATE_EMPLOYEE_STATUS: (empId: string, status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED') => {
    if (empId && status) return `/employee/status/${empId}?status=${status}`;
    else return '';
  },

  //Approval Flow
  GET_ALL_APPROVAL_FLOWS: (documentType: IDocumentType | null, queryParams?: QueryParams) => {
    if (queryParams) {
      let url = `/approval-flow/?page=${queryParams.page}&limit=${queryParams.limit}`;
      if (documentType) {
        url = url + `&type=${documentType}`;
      }
      if (queryParams.sort && queryParams.sort.length > 0) {
        url = url + `&sort=${queryParams.sort}`;
      }
      return url;
    } else {
      return `/approval-flow/`;
    }
  },
  CREATE_APPROVAL_FLOW: `/approval-flow/`,
  GET_APPROVAL_FLOW_BY_ID: `/approval-flow`,
  UPDATE_APPROVAL_FLOW: `/approval-flow`,
  DELETE_APPROVAL_FLOW: `/approval-flow`,
  REPLACE_EMPLOYEE: `/approval-flow/replace/user`,

  //Customer Type
  GET_ALL_CUSTOMER_TYPE: `/customerType/`,
  CREATE_CUSTOMER_TYPE: '/customerType/',
  UPDATE_CUSTOMER_TYPE: '/customerType',
  GET_A_CUSTOMER_TYPE: '/customerType',
  DELETE_CUSTOMER_TYPE: '/customerType',

  //Customer Category
  GET_ALL_CUSTOMER_CATEGORY: `/customerCategory/`,
  CREATE_CUSTOMER_CATEGORY: '/customerCategory/',
  UPDATE_CUSTOMER_CATEGORY: '/customerCategory',
  GET_A_CUSTOMER_CATEGORY: '/customerCategory',
  DELETE_CUSTOMER_CATEGORY: '/customerCategory',

  // Vendor Category
  GET_ALL_VENDOR_CAT: '/vendor-categories/',
  CREATE_VENDOR_CAT: '/vendor-categories/',
  GET_A_VENDOR_CAT: '/vendor-categories',
  UPDATE_VENDOR_CAT: '/vendor-categories',
  DELETE_VENDOR_CAT: '/vendor-categories',

  //Vendor Subcategory
  GET_ALL_VENDOR_SUBCAT: `/vendor-subcategories/`,
  CREATE_VENDOR_SUBCAT: '/vendor-subcategories/',
  GET_A_VENDOR_SUBCAT: '/vendor-subcategories',
  UPDATE_VENDOR_SUBCAT: '/vendor-subcategories',
  DELETE_VENDOR_SUBCAT: '/vendor-subcategories',
  GET_VENDOR_SUBCAT_BY_QUERY: '/vendor-subcategories/getSubcategories',
  GET_VENDOR_BY_QUERY: '/vendors/bysearch/getvendors',

  //Product Category
  GET_ALL_PRODUCT_CATEGORY: '/productCategory/',
  CREATE_PRODUCT_CATEGORY: '/productCategory',
  GET_A_PRODUCT_CATEGORY: '/productCategory',
  UPDATE_PRODUCT_CATEGORY: '/productCategory',
  DELETE_PRODUCT_CATEGORY: '/productCategory',

  //Product Subcategory
  GET_ALL_PRODUCT_SUBCATEGORY: '/productSubcategory/',
  CREATE_PRODUCT_SUBCATEGORY: '/productSubcategory',
  GET_A_PRODUCT_SUBCATEGORY: '/productSubcategory',
  UPDATE_PRODUCT_SUBCATEGORY: '/productSubcategory',
  DELETE_PRODUCT_SUBCATEGORY: '/productSubcategory',

  //Product Classification
  GET_ALL_PRODUCT_CLASSIFICATION: '/productClassification/',
  CREATE_PRODUCT_CLASSIFICATION: '/productClassification',
  GET_A_PRODUCT_CLASSIFICATION: '/productClassification',
  UPDATE_PRODUCT_CLASSIFICATION: '/productClassification',
  DELETE_PRODUCT_CLASSIFICATION: '/productClassification',

  //UoM
  GET_ALL_UOM: `/uoms/`,
  CREATE_UOM: '/uoms/',
  GET_A_UOM: '/uoms',
  UPDATE_UOM: '/uoms',
  DELETE_UOM: '/uoms',

  //UoM Conversion Matrix
  GET_ALL_UOM_CONVERSION: `/uom-conversion-matrix/`,
  CREATE_UOM_CONVERSION: '/uom-conversion-matrix/',
  GET_A_UOM_CONVERSION: '/uom-conversion-matrix',
  UPDATE_UOM_CONVERSION: '/uom-conversion-matrix',
  DELETE_UOM_CONVERSION: '/uom-conversion-matrix',

  //Locations
  //Offices
  GET_ALL_OFFICES: `/location-offices`,
  GET_A_OFFICE: '/location-offices',
  CREATE_OFFICE: '/location-offices',
  UPDATE_OFFICE: '/location-offices',
  DELETE_OFFICE: '/location-offices',

  //Branches
  GET_ALL_BRANCHES: `/location-branches/getall`,
  GET_A_BRANCH: '/location-branches',
  CREATE_BRANCH: '/location-branches',
  UPDATE_BRANCH: '/location-branches',
  DELETE_BRANCH: '/location-branches',

  //Packaging Material
  GET_ALL_PACKAGING_MATERIAL: `/packingMaterial/`,
  GET_A_PACKAGING_MATERIAL: '/packingMaterial',
  CREATE_PACKAGING_MATERIAL: '/packingMaterial/',
  UPDATE_PACKAGING_MATERIAL: '/packingMaterial',
  DELETE_PACKAGING_MATERIAL: '/packingMaterial',
};
