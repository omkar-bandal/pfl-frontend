export const ADMIN_ROUTES = {
    //Admin
    ADMIN: "/admin",

    //Dashboard
    DASHBOARD_ADMIN: "/admin/dashboard",

    //Users
    USERS: "/admin/users",

    //Employee
    EMPLOYEE: "/admin/users/Employee",
    GET_ALL_EMPLOYEES: "/admin/users/Employee/getall",
    CREATE_EMPLOYEE: "/admin/users/Employee/create",
    VIEW_EMPLOYEE: "/admin/users/Employee/view",
    EDIT_EMPLOYEE: "/admin/users/Employee/update",

    //Customer
    CUSTOMER: "/admin/users/Customer",
    GET_ALL_CUSTOMERS: "/admin/users/Customers/getall",
    VIEW_CUSTOMER: "/admin/users/Customer/view",
    EDIT_CUSTOMER: "/admin/users/Customer/update",
    
    //Vendor
    VENDOR: "/admin/users/Vendor",
    GET_ALL_VENDORS: "/admin/users/Vendors/getall",
    VIEW_VENDOR: "/admin/users/Vendor/view",
    EDIT_VENDOR: "/admin/users/Vendor/update",
    
    GET_ALL_VENDORS_CAT: "/admin/users/vendors/Vendor_Categories/getall",
    CREATE_VENDORS_CAT: "/admin/users/vendors/category/create",
    UPDATE_VENDORS_CAT: "/admin/users/vendors/category/update",

    GET_ALL_VENDORS_SUBCAT: "/admin/users/vendors/Vendor_Subcategories/getall",
    CREATE_VENDORS_SUBCAT: "/admin/users/vendors/subcategory/create",
    UPDATE_VENDORS_SUBCAT: "/admin/users/vendors/subcategory/update",

    //Farmer
    FARMER: "/admin/users/Farmer",
    GET_ALL_FARMERS: "/admin/users/Farmers/getall",
    VIEW_FARMER: "/admin/users/Farmer/view",
    EDIT_FARMER: "/admin/users/Farmer/update",
    
    //Products
    PRODUCTS: "/admin/Products",
    GET_ALL_PRODUCTS: "/admin/Products/Products/getall",
    GET_A_PRODUCT: "/admin/Products/Products/view",

    GET_ALL_PRODUCT_CLASS: "/admin/Products/Products_Classification/getall",
    GET_A_PRODUCT_CLASS: "/admin/Products/Products_Classification/view",
    CREATE_PRODUCT_CLASS: "/admin/Products/Products_Classification/create",
    UPDATE_PRODUCT_CLASS: "/admin/Products/Products_Classification/update",
    
    GET_ALL_PRODUCT_CAT: "/admin/Products/Products_Category/getall",
    GET_A_PRODUCT_CAT: "/admin/Products/Products_Category/view",
    CREATE_PRODUCT_CAT: "/admin/Products/Products_Category/create",
    UPDATE_PRODUCT_CAT: "/admin/Products/Products_Category/update",

    GET_ALL_PRODUCT_SUBCAT: "/admin/Products/Products_Subcategory/getall",
    GET_A_PRODUCT_SUBCAT: "/admin/Products/Products_Subcategory/view",
    CREATE_PRODUCT_SUBCAT: "/admin/Products/Products_Subcategory/create",
    UPDATE_PRODUCT_SUBCAT: "/admin/Products/Products_Subcategory/update",
    
    //UOMs
    UOM: "/admin/UOM",
    GET_ALL_UOMs: "/admin/UOM/getall",
    CREATE_UOM: "/admin/UOM/create",
    UPDATE_UOM: "/admin/UOM/edit",
    VIEW_UOM: "/admin/UOM/view",
    GET_ALL_UOMs_CONV_MATRIX: "/admin/UOM/UOM_Conversion_Matrix/getall",
    CREATE_UOMs_CONV_MATRIX: "/admin/UOM/UOM_Conversion_Matrix/create",
    UPDATE_UOMs_CONV_MATRIX: "/admin/UOM/UOM_Conversion_Matrix/edit",
    VIEW_UOMs_CONV_MATRIX: "/admin/UOM/UOM_Conversion_Matrix/view",
    
    //Locations
    LOCATIONS: "/admin/locations",
    LOCATIONS_REGISTERED_OFFICE: "/admin/locations/Registered_Office/getall",
    LOCATIONS_CORPORATE_OFFICE: "/admin/locations/Corporate_Office/getall",
    CREATE_REGISTERED_OFFICE: "/admin/locations/Registered_Office/create",
    CREATE_CORPORATE_OFFICE: "/admin/locations/Corporate_Office/create",
    EDIT_REGISTERED_OFFICE: "/admin/locations/Registered_Office/edit",
    EDIT_CORPORATE_OFFICE: "/admin/locations/Corporate_Office/edit",
    VIEW_REGISTERED_OFFICE: "/admin/locations/Registered_Office/view",
    VIEW_CORPORATE_OFFICE: "/admin/locations/Corporate_Office/view",
    GET_REGISTERED_OFFICE: "/admin/locations/Registered_Office/getall",
    GET_CORPORATE_OFFICE: "/admin/locations/Corporate_Office/getall",
    CREATE_OFFICE: "/admin/locations/Office/create",
    EDIT_OFFICE: "/admin/locations/Office/edit",
    VIEW_OFFICE: "/admin/locations/Office/view",
    
    //Branches
    BRANCHES: "/admin/locations/branches",
    LOCATIONS_BRANCHES_CC: "/admin/locations/branches/Collection_Center/getall",
    LOCATIONS_BRANCHES_DC: "/admin/locations/branches/Distribution_Center/getall",
    LOCATIONS_BRANCHES_SEASONAL_CC: "/admin/locations/branches/Seasonal_Collection_Center/getall",
    LOCATIONS_BRANCHES_WAREHOUSES_WH: "/admin/locations/branches/Warehouses/getall",
    CREATE_BRANCHES: "/admin/locations/branches/create",
    EDIT_BRANCHES: "/admin/locations/branches/edit",
    VIEW_BRANCHES: "/admin/locations/branches/view",
    
    //Registeration
    CREATE_CUSTOMER: "/create/customers",
    CREATE_VENDOR: "/create/vendor",
    CREATE_FARMER: "/create/farmer",
    CREATE_PRODUCT: "/create/product",
    
}