export interface IFarmerCount {
    totalFarmers: number;
}
export interface IEmployeeCount {
    TotalEmployees: number;
}
export interface IVendorCount {
    vendors: {
        totalCount: number;
        byCategoryRaw: {
            category: string;
            count: number;
        }[];
    };
}
export interface ICustomerCount {
    customer: {
        totalCustomer: number;
        typeCountsRaw: {
            name: string;
            count: number;
        }[];
        categoryCountsRaw: [];
    };
}
export interface IProductCount {
    products: {
        totalCount: 10;
        byClassification: {
            classification: string;
            count: number;
        }[];
        byCategory: {
            category: string;
            count: number;
        }[];
        bySubcategory: {
            subcategory: string;
            count: number;
        }[];
    };
}
export interface IBranchesCount {
    Branches: {
        totalCount: number;
        byType: {
            type: string;
            count: number;
        }[];
    };
}
export interface DashboardCounts {
    employeeCount?: IEmployeeCount;
    farmerCount?: IFarmerCount;
    vendorCount?: IVendorCount;
    customerCount?: ICustomerCount;
    productCount?: IProductCount;
    branchesCount?: IBranchesCount;
}
