export const ADMIN_API_URL = {
    
    //roles
    GET_ALL_ROLES: "/roles/",

    //Employee
    GET_ALL_EMPLOYEES: "/employee/",
    CREATE_EMPLOYEE: "/employee/",
    GET_AN_EMPLOYEE: "/employee",
    UPDATE_AN_EMPLOYEE: "/employee",
    DELETE_EMPLOYEE: "/employee/",
    CHANGE_EMPLOYEE_STATUS: "/employeeCredential/",

    //Customers
    GET_ALL_CUSTOMERS: "/customers/",
    POST_CUSTOMER: "/customers/",
    DELETE_CUSTOMER: "/customers/",
    UPDATE_CUSTOMER: "/customers",
    GET_A_CUSTOMER: "/customers",

    GET_ALL_CUSTOMER_TYPE: "/customerType/",
    GET_ALL_CUSTOMER_CATEGORY: "/customerCategory/ ",

    //Farmers
    GET_ALL_FARMERS: "/farmers/",
    POST_FARMER: "/farmers/",
    UPDATE_FARMER: "/farmers",
    GET_A_FARMER: "/farmers",
    GET_ALL_FARMERS_FILTERED: "/farmers/filterFarmer/all",


    //Vendors
    GET_ALL_VENDORS: "/vendors/",
    GET_A_VENDOR: "/vendors",
    POST_VENDOR: "/vendors/",
    UPDATE_VENDOR: "/vendors",
    GET_ALL_VENDOR_FILTERED: "/vendors/filterVendor/all",
    GET_ALL_VENDOR_CAT: "/vendor-categories/",
    CREATE_VENDOR_CAT: "/vendor-categories/",
    GET_A_VENDOR_CAT: "/vendor-categories",
    UPDATE_VENDOR_CAT: "/vendor-categories",
    GET_ALL_VENDOR_SUBCAT: "/vendor-subcategories/",
    CREATE_VENDOR_SUBCAT: "/vendor-subcategories/",
    GET_A_VENDOR_SUBCAT: "/vendor-subcategories",
    UPDATE_VENDOR_SUBCAT: "/vendor-subcategories",

    //Prooducts
    GET_ALL_PRODUCTS: "/products/",
    GET_A_PRODUCTS: "/products",
    CREATE_PRODUCTS: "/products/",
    UPDATE_PRODUCTS: "/products/",
    GET_ALL_PRODUCT_CATEGORY: "/productCategory",
    GET_A_PRODUCT_CATEGORY: "/productCategory",
    CREATE_PRODUCT_CATEGORY: "/productCategory",
    UPDATE_PRODUCT_CATEGORY: "/productCategory",
    GET_ALL_PRODUCT_SUBCATEGORY: "/productSubcategory",
    GET_A_PRODUCT_SUBCATEGORY: "/productSubcategory",
    CREATE_PRODUCT_SUBCATEGORY: "/productSubcategory",
    UPDATE_PRODUCT_SUBCATEGORY: "/productSubcategory",
    GET_ALL_PRODUCT_CLASSIFICATION: "/productClassification",
    GET_A_PRODUCT_CLASSIFICATION: "/productClassification",
    CREATE_PRODUCT_CLASSIFICATION: "/productClassification",
    UPDATE_PRODUCT_CLASSIFICATION: "/productClassification",

    GET_ALL_UOM: "/uoms/",
    CREATE_UOM: "/uoms/",
    GET_A_UOM: "/uoms",
    UPDATE_UOM: "/uoms",
    GET_ALL_UOM_CONVERSION: "/uom-conversion-matrix/",
    GET_A_UOM_CONVERSION: "/uom-conversion-matrix",
    CREATE_UOM_CONVERSION: "/uom-conversion-matrix/",
    UPDATE_UOM_CONVERSION: "/uom-conversion-matrix",

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

    //Branches
    GET_ALL_CC: "/location_branches/COLLECTION_CENTER",
    GET_A_CC: "/location_branches/COLLECTION_CENTER",
    GET_ALL_DC: "/location_branches/DISTRIBUTION_CENTER",
    GET_A_DC: "/location_branches/DISTRIBUTION_CENTER",
    GET_ALL_SEASONAL_CC: "/location_branches/SEASONAL_COLLECTION_CENTER",
    GET_A_SEASONAL_CC: "/location_branches/SEASONAL_COLLECTION_CENTER",
    GET_ALL_WAREHOUSE: "/location_branches/WAREHOUSE",
    GET_A_WAREHOUSE: "/location_branches/WAREHOUSE",
    POST_BRANCH: "/location_branches",
    UPDATE_BRANCH: "/location_branches",
}