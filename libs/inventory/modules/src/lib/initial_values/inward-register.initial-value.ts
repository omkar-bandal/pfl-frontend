import { IInwardProducts, IInwardRegister } from "@prime-fresh/inventory_api";
// eslint-disable-next-line @nx/enforce-module-boundaries

export const InwardProductInitialValue: IInwardProducts = {
    productName: null,
    origin: null,
    variety: null,
    count: null,
    size: null,
    uom: null,
    quantity: null,
    unitPrice: null,
    amount: null,
    packingMaterialWeight: null,
    grossWeight: null,
    netWeight: null,
    weight: null,
}

export const InwardRegisterInitialValue: Omit<IInwardRegister, 'id'> = {
    deliveryChallanNo: null,
    grnNo: null,
    companyName: null,
    batchNo: null,
    date: null,
    source: 'vendor',
    selectedParty: null,
    inwardBy: null,
    inwardCost: null,
    inwardProducts: [InwardProductInitialValue],
    inwardQtyInKg: null,
    inwardType: 'purchase',
    location: null,
    purchasedBy: null,
    purchasedQty: null,
    remarks: null,
    totalWeightInKg: null,
}