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


    //Vendors
    GET_ALL_VENDORS: "/vendors/",
    GET_A_VENDOR: "/vendors",
    POST_VENDOR: "/vendors/",
    UPDATE_VENDOR: "/vendors",
    GET_ALL_VENDOR_CAT: "/vendor-categories/",
    GET_ALL_VENDOR_SUBCAT: "/vendor-subcategories/",

    //Prooducts
    GET_ALL_PRODUCTS: "/products/",
    CREATE_PRODUCTS: "/products/",
    GET_PRODUCT_CATEGORY: "/productCategory/",
    GET_PRODUCT_SUBCATEGORY: "/productSubcategory/",
    GET_PRODUCT_CLASSIFICATION: "/productClassification/",

    GET_UOM: "/uoms/",
    CREATE_UOM: "/uoms/",
    GET_UOM_CONVERSION: "/uom-conversion-matrix/",
    CREATE_UOM_CONVERSION: "/uom-conversion-matrix/",

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
    GET_ALL_DC: "/location_branches/DISTRIBUTION_CENTER",
    GET_ALL_SEASONAL_CC: "/location_branches/SEASONAL_COLLECTION_CENTER",
    GET_ALL_WAREHOUSE: "/location_branches/WAREHOUSE",
    POST_BRANCH: "/location_branches",
    UPDATE_BRANCH: "/location_branches",
}