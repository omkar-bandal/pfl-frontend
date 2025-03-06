export type AmountQuantity = {
    totalQuantityInKg: number;
    totalAmount: number;
};

export type VendorCategorySubcategory = AmountQuantity & {
    vendorCategoryName: string;
    vendorSubCategoryName: string;
};

export type CustomerCategorySubcategory = AmountQuantity & {
    customerCategoryName: number;
    customerSubCategoryName: string;
};

export type TotalQtyAmount = {
    totalQuantity: number,
    totalAmount: number
}

export type GRNsData = {
    filterType: string;
    totalGRNs: number;
    totalPurchase: AmountQuantity;
    totalExpenditure: number;
    totalPurchaseByFarmer: AmountQuantity;
    totalpurchaseByVendor: AmountQuantity;
    totalPurchaseByvendorCategoryandsubcategory: VendorCategorySubcategory[];
};

export type DeliveryChallanData = {
    filterType: string;
    totalChallans: number;
    totalSaleQtyAndAmount: AmountQuantity;
    totalExpenditure: number;
    totalSaleQtyAndAmountforCustomerCategory: CustomerCategorySubcategory[];
    getQtyAndAmountForSecondSale: TotalQtyAmount;
};

export type DumpRejectionData = TotalQtyAmount;

export type DashboardData = {
    grns: GRNsData;
    deliverychallan: DeliveryChallanData;
    dump: DumpRejectionData;
    rejection: DumpRejectionData;
};

export type DashboardFilterParams = {
    filterType: string,
    companyName: string,
    locationName: string,
    startDate: string,
    endDate: string,
    specificDate: string
}

