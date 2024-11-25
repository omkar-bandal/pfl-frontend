export const ADMIN_ROUTES = {
    //Admin
    ADMIN: "/admin",

    //Dashboard
    DASHBOARD_ADMIN: "/admin/dashboard",

    //Users
    USERS: "/admin/users",

    //Employee
    EMPLOYEE: "/admin/users/employee",
    GET_ALL_EMPLOYEES: "/admin/users/employee/getall",
    CREATE_EMPLOYEE: "/admin/users/employee/create",
    VIEW_EMPLOYEE: "/admin/users/employee/view",
    EDIT_EMPLOYEE: "/admin/users/employee/update",

    //Customer
    CUSTOMER: "/admin/users/customer",
    GET_ALL_CUSTOMERS: "/admin/users/customers/getall",
    VIEW_CUSTOMER: "/admin/users/customer/view",
    EDIT_CUSTOMER: "/admin/users/customer/update",
    
    //Vendor
    VENDOR: "/admin/users/vendor",
    GET_ALL_VENDORS: "/admin/users/vendors/getall",
    VIEW_VENDOR: "/admin/users/vendor/view",
    EDIT_VENDOR: "/admin/users/vendor/update",
    
    GET_ALL_VENDORS_CAT: "/admin/users/vendors/categories/getall",
    CREATE_VENDORS_CAT: "/admin/users/vendors/category/create",

    GET_ALL_VENDORS_SUBCAT: "/admin/users/vendors/subcategories/getall",
    CREATE_VENDORS_SUBCAT: "/admin/users/vendors/subcategory/create",

    //Farmer
    FARMER: "/admin/users/farmer",
    GET_ALL_FARMERS: "/admin/users/farmers/getall",
    VIEW_FARMER: "/admin/users/farmer/view",
    EDIT_FARMER: "/admin/users/farmer/update",
    
    //Products
    PRODUCTS: "/admin/products",
    GET_ALL_PRODUCTS: "/admin/products/products/getall",
    GET_A_PRODUCT: "/admin/products/products/view",

    GET_ALL_PRODUCT_CLASS: "/admin/products/products_classification",
    GET_A_PRODUCT_CLASS: "/admin/products/products_classification/view",
    CREATE_PRODUCT_CLASS: "/admin/products/products_classification/create",
    UPDATE_PRODUCT_CLASS: "/admin/products/products_classification/update",
    
    GET_ALL_PRODUCT_CAT: "/admin/products/products_category",
    GET_A_PRODUCT_CAT: "/admin/products/products_category/view",
    CREATE_PRODUCT_CAT: "/admin/products/products_category/create",
    UPDATE_PRODUCT_CAT: "/admin/products/products_category/update",

    GET_ALL_PRODUCT_SUBCAT: "/admin/products/products_subcategory",
    GET_A_PRODUCT_SUBCAT: "/admin/products/products_subcategory/view",
    CREATE_PRODUCT_SUBCAT: "/admin/products/products_subcategory/create",
    UPDATE_PRODUCT_SUBCAT: "/admin/products/products_subcategory/update",
    
    //UOMs
    UOM: "/admin/UOM",
    GET_ALL_UOMs: "/admin/UOM/getall",
    CREATE_UOM: "/admin/UOM/create",
    UPDATE_UOM: "/admin/UOM/edit",
    VIEW_UOM: "/admin/UOM/view",
    GET_ALL_UOMs_CONV_MATRIX: "/admin/UOM/UOM-Conversion-Matrix/getall",
    CREATE_UOMs_CONV_MATRIX: "/admin/UOM/UOM-Conversion-Matrix/create",
    UPDATE_UOMs_CONV_MATRIX: "/admin/UOM/UOM-Conversion-Matrix/edit",
    VIEW_UOMs_CONV_MATRIX: "/admin/UOM/UOM-Conversion-Matrix/view",
    
    //Locations
    LOCATIONS: "/admin/locations",
    LOCATIONS_REGISTERED_OFFICE: "/admin/locations/registered_office",
    LOCATIONS_CORPORATE_OFFICE: "/admin/locations/corporate_office",
    CREATE_REGISTERED_OFFICE: "/admin/locations/registered_office/create",
    CREATE_CORPORATE_OFFICE: "/admin/locations/corporate_office/create",
    EDIT_REGISTERED_OFFICE: "/admin/locations/registered_office/edit",
    EDIT_CORPORATE_OFFICE: "/admin/locations/corporate_office/edit",
    VIEW_REGISTERED_OFFICE: "/admin/locations/registered_office/view",
    VIEW_CORPORATE_OFFICE: "/admin/locations/corporate_office/view",
    GET_REGISTERED_OFFICE: "/admin/locations/registered_office/getall",
    GET_CORPORATE_OFFICE: "/admin/locations/corporate_office/getall",
    CREATE_OFFICE: "/admin/locations/office/create",
    EDIT_OFFICE: "/admin/locations/office/edit",
    VIEW_OFFICE: "/admin/locations/office/view",
    
    //Branches
    BRANCHES: "/admin/locations/branches",
    LOCATIONS_BRANCHES_CC: "/admin/locations/branches/collection_center",
    LOCATIONS_BRANCHES_DC: "/admin/locations/branches/distribution_center",
    LOCATIONS_BRANCHES_SEASONAL_CC: "/admin/locations/branches/seasonal_collection_center",
    LOCATIONS_BRANCHES_WAREHOUSES_WH: "/admin/locations/branches/warehouses",
    CREATE_BRANCHES: "/admin/locations/branches/create",
    EDIT_BRANCHES: "/admin/locations/branches/edit",
    VIEW_BRANCHES: "/admin/locations/branches/view",
    
    //Registeration
    CREATE_CUSTOMER: "/create/customers",
    CREATE_VENDOR: "/create/vendor",
    CREATE_FARMER: "/create/farmer",
    CREATE_PRODUCT: "/create/product",
    
}