export type FormProducts = {
    productName: string | null;
    origin: string | null;
    variety: string | null;
    count: string | null;
    size: string | null;
};
export type FormProductUoM = {
    uom: string | null;
};
export type FormProductQtyAmt = {
    quantity: number | null;
    unitPrice: number | null;
    amount: number | null;
};
export type FormProductWeight = {
    grossWeight: number | null;
    packingMaterialWeight: number | null;
    netWeight: number | null;
};
