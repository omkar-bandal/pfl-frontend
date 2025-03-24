import { QueryParams } from "@prime-fresh/common_api";

export const adminApiUrlConstants = {

    //Department
    GET_ALL_DEPARTMENT: "/departments/",
    GET_DEPARTMENT_BY_ID: "/departments",
    CREATE_DEPARTMENT: "/departments/",
    UPDATE_DEPARTMENT: "/departments",
    DELETE_DEPARTMENT: "/departments",

    //Level
    GET_ALL_LEVEL: "/levels/",
    GET_LEVEL_BY_ID: "/levels",
    CREATE_LEVEL: "/levels/",
    UPDATE_LEVEL: "/levels",
    DELETE_LEVEL: "/levels",

    //Employee
    GET_ALL_EMPLOYEES: (queryParams?: QueryParams) => {
        if (queryParams) {
            let url = `/employee/?page=${queryParams.page}&limit=${queryParams.limit}`;
            if (queryParams.sort && queryParams.sort.length > 0) {
                url = url + `&sort=${queryParams.sort}`
            }
            return url;
        } else {
            return `/employee/`;
        }
    },
    CREATE_EMPLOYEE: "/employee/",
    GET_AN_EMPLOYEE: "/employee",
    UPDATE_AN_EMPLOYEE: "/employee",
    DELETE_EMPLOYEE: "/employee/",
    CHANGE_EMPLOYEE_STATUS: "/employeeCredential/",

    //Customers
    GET_ALL_CUSTOMERS: (queryParams?: QueryParams) => {
        if (queryParams) {
            const { limit, page, sort } = queryParams;
            let url = `/customers/?page=${page}&limit=${limit}`;
            if (sort && sort.length > 0) {
                url = url + `&sort=${sort}`
            }
            return url;
        } else {
            return '/customers/';
        }
    },
    POST_CUSTOMER: "/customers/",
    CREATE_CUSTOMER: "/customers/",
    DELETE_CUSTOMER: "/customers/",
    UPDATE_CUSTOMER: "/customers",
    GET_A_CUSTOMER: "/customers",
    GET_CUSTOMER_NAMES: "/customers/names/all",
    GET_CUSTOMER_PARTIAL_DATA: "/customers/partial/all",

    GET_ALL_CUSTOMER_TYPE: (queryParams?: QueryParams) => {
        if(queryParams){
            const {page, limit, sort} = queryParams;
        let url = `/customerType/?page=${page}&limit=${limit}`;
        if (sort && sort.length > 0) {
            url = url + `&sort=${sort}`
        }
        return url;
    }else{
        return `/customerType/`
    }
    },
    CREATE_CUSTOMER_TYPE: "/customerType/",
    UPDATE_CUSTOMER_TYPE: "/customerType",
    GET_A_CUSTOMER_TYPE: "/customerType",
    DELETE_CUSTOMER_TYPE: "/customerType",

    GET_ALL_CUSTOMER_CATEGORY: (queryParams?: QueryParams) => {
        if(queryParams){
            const {page, limit, sort} = queryParams;
        let url = `/customerCategory/?page=${page}&limit=${limit}`;
        if (sort && sort.length > 0) {
            url = url + `&sort=${sort}`
        }
        return url;
    }else{
        return `/customerCategory/`
    }
    },
    CREATE_CUSTOMER_CATEGORY: "/customerCategory/",
    UPDATE_CUSTOMER_CATEGORY: "/customerCategory",
    GET_A_CUSTOMER_CATEGORY: "/customerCategory",
    DELETE_CUSTOMER_CATEGORY: "/customerCategory",

    //Farmers
    GET_ALL_FARMERS: ({ page, limit, sort }: QueryParams) => {
        let url = `/farmers/?page=${page}&limit=${limit}`;
        if (sort && sort.length > 0) {
            url = url + `&sort=${sort}`
        }
        return url;
    },
    GET_A_FARMER: "/farmers",
    POST_FARMER: "/farmers/",
    CREATE_FARMER: "/farmers/",
    UPDATE_FARMER: "/farmers",
    DELETE_FARMER: "/farmers",

    GET_ALL_FARMERS_FILTERED: "/farmers/filterFarmer/all",


    //Vendors
    GET_ALL_VENDORS: ({ page, limit, sort }: QueryParams) => {
        let url = `/vendors/?page=${page}&limit=${limit}`;
        if (sort && sort.length > 0) {
            url = url + `&sort=${sort}`
        }
        return url;
    },
    GET_A_VENDOR: "/vendors",
    POST_VENDOR: "/vendors/",
    CREATE_VENDOR: "/vendors/",
    UPDATE_VENDOR: "/vendors",
    DELETE_VENDOR: "/vendors",


    GET_ALL_VENDORS_FILTERED: "/vendors/filterVendor/all",

    GET_ALL_VENDOR_CAT: (queryParams?: QueryParams) => {
        if (queryParams) {
            const { page, limit, sort } = queryParams;
            let url = `/vendor-categories/?page=${page}&limit=${limit}`;
            if (sort && sort.length > 0) {
                url = url + `&sort=${sort}`
            }
            return url;
        } else {
            return '/vendor-categories/';
        }

    },
    CREATE_VENDOR_CAT: "/vendor-categories/",
    GET_A_VENDOR_CAT: "/vendor-categories",
    UPDATE_VENDOR_CAT: "/vendor-categories",
    DELETE_VENDOR_CAT: "/vendor-categories",

    GET_ALL_VENDOR_SUBCAT: ({ page, limit, sort }: QueryParams) => {
        let url = `/vendor-subcategories/?page=${page}&limit=${limit}`;
        if (sort && sort.length > 0) {
            url = url + `&sort=${sort}`
        }
        return url;
    },
    CREATE_VENDOR_SUBCAT: "/vendor-subcategories/",
    GET_A_VENDOR_SUBCAT: "/vendor-subcategories",
    UPDATE_VENDOR_SUBCAT: "/vendor-subcategories",
    DELETE_VENDOR_SUBCAT: "/vendor-subcategories",

    GET_VENDOR_SUBCAT_BY_QUERY: "/vendor-subcategories/getSubcategories",
    GET_VENDOR_BY_QUERY: "/vendors/bysearch/getvendors",

    //Prooducts
    GET_ALL_PRODUCTS: ({ page, limit, sort }: QueryParams) => {
        let url = `/products/?page=${page}&limit=${limit}`;
        if (sort && sort.length > 0) {
            url = url + `&sort=${sort}`
        }
        return url;
    },
    GET_A_PRODUCTS: "/products",
    CREATE_PRODUCTS: "/products/",
    UPDATE_PRODUCTS: "/products",
    DELETE_PRODUCT: "/products",
    GET_PRODUCTS_PARTIAL: "/products/partial/data",

    GET_ALL_PRODUCT_CATEGORY: (queryParams?: QueryParams) => {
        if (queryParams) {
            const { limit, page, sort } = queryParams;
            let url = `/productCategory/?page=${page}&limit=${limit}`;
            if (sort && sort.length > 0) {
                url = url + `&sort=${sort}`
            }
            return url;
        } else {
            return '/productCategory/';
        }
    },
    GET_A_PRODUCT_CATEGORY: "/productCategory",
    CREATE_PRODUCT_CATEGORY: "/productCategory",
    UPDATE_PRODUCT_CATEGORY: "/productCategory",
    DELETE_PRODUCT_CATEGORY: "/productCategory",

    GET_ALL_PRODUCT_SUBCATEGORY: (queryParams?: QueryParams) => {
        if (queryParams) {
            const { page, limit, sort } = queryParams;
            let url = `/productSubcategory/?page=${page}&limit=${limit}`;
            if (sort && sort.length > 0) {
                url = url + `&sort=${sort}`
            }
            return url;
        } else {
            return '/productSubcategory/';
        }
    },
    GET_A_PRODUCT_SUBCATEGORY: "/productSubcategory",
    CREATE_PRODUCT_SUBCATEGORY: "/productSubcategory",
    UPDATE_PRODUCT_SUBCATEGORY: "/productSubcategory",
    DELETE_PRODUCT_SUBCATEGORY: "/productSubcategory",

    GET_ALL_PRODUCT_CLASSIFICATION: (queryParams?: QueryParams) => {
        if (queryParams) {
            const { page, limit, sort } = queryParams;
            let url = `/productClassification/?page=${page}&limit=${limit}`;
            if (sort && sort.length > 0) {
                url = url + `&sort=${sort}`
            }
            return url;
        } else {
            return '/productClassification/';
        }
    },
    GET_A_PRODUCT_CLASSIFICATION: "/productClassification",
    CREATE_PRODUCT_CLASSIFICATION: "/productClassification",
    UPDATE_PRODUCT_CLASSIFICATION: "/productClassification",
    DELETE_PRODUCT_CLASSIFICATION: "/productClassification",

    GET_ALL_UOM: ({ page, limit, sort }: QueryParams) => {
        let url = `/uoms/?page=${page}&limit=${limit}`;
        if (sort && sort.length > 0) {
            url = url + `&sort=${sort}`
        }
        return url;
    },
    CREATE_UOM: "/uoms/",
    GET_A_UOM: "/uoms",
    UPDATE_UOM: "/uoms",
    DELETE_UOM: "/uoms",

    GET_ALL_UOM_CONVERSION: ({ page, limit, sort }: QueryParams) => {
        let url = `/uom-conversion-matrix/?page=${page}&limit=${limit}`;
        if (sort && sort.length > 0) {
            url = url + `&sort=${sort}`
        }
        return url;
    },
    GET_A_UOM_CONVERSION: "/uom-conversion-matrix",
    CREATE_UOM_CONVERSION: "/uom-conversion-matrix/",
    UPDATE_UOM_CONVERSION: "/uom-conversion-matrix",
    DELETE_UOM_CONVERSION: "/uom-conversion-matrix",

    //Locations
    //Offices
    GET_ALL_REGI_OFFICES: "/location_offices/REGISTERED_OFFICE",
    GET_ALL_CORP_OFFICES: "/location_offices/CORPORATE_OFFICE",
    GET_A_REGI_OFFICES: "/location_offices/REGISTERED_OFFICE",
    GET_A_CORP_OFFICES: "/location_offices/CORPORATE_OFFICE",
    POST_REGI_OFFICES: "/location_offices/REGISTERED_OFFICE",
    POST_CORP_OFFICES: "/location_offices/CORPORATE_OFFICE",
    UPDATE_REGI_OFFICES: "/location_offices/REGISTERED_OFFICE",
    UPDATE_CORP_OFFICES: "/location_offices/CORPORATE_OFFICE",

    //Offices
    GET_ALL_OFFICES: (officeType: string, { page, limit, sort }: QueryParams) => {
        let url = `/location-offices/${officeType}/?page=${page}&limit=${limit}`;
        if (sort && sort.length > 0) {
            url = url + `&sort=${sort}`
        }
        return url;
    },
    GET_A_OFFICE: "/location-offices",
    CREATE_OFFICE: "/location-offices",
    UPDATE_OFFICE: "/location-offices",
    DELETE_OFFICE: "/location-offices",


    //Branches
    GET_ALL_BRANCHES: (branchType: string, { page, limit, sort }: QueryParams) => {
        let url = `/location-branches/getall/${branchType}/?page=${page}&limit=${limit}`;
        if (sort && sort.length > 0) {
            url = url + `&sort=${sort}`
        }
        return url;
    },
    GET_A_BRANCH: "/location-branches",
    CREATE_BRANCH: "/location-branches",
    UPDATE_BRANCH: "/location-branches",
    DELETE_BRANCH: "/location-branches",

    GET_ALL_BRANCHES_FILTERED: "/location-branches/filterData/filter/all",
}