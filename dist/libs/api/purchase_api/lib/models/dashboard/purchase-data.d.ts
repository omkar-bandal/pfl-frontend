export type DatewiseData = {
    date: string;
    quantity: number;
    amount: number;
};
export type PurchaseQtyAmt = {
    dateWise: DatewiseData[];
    totalAmount: number;
    totalQuantityInKg: number;
};
export type DateRangeWiseData = {
    quantity: number;
    amount: number;
};
