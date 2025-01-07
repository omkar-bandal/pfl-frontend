import { PostInwardProducts, PostInwardRegister } from "@prime-fresh/inventory_api";
// eslint-disable-next-line @nx/enforce-module-boundaries

export const InwardProductInitialValue: PostInwardProducts = {
    product: '',
    count: '',
    size: '',
    qty: 0,
    uom: '',
    weight: 0,
    productContainerWeight: 0,
    netWeight: 0,
    grossWeight: 0
}

export const InwardRegisterInitialValue: PostInwardRegister = {
    deliveryChallanNo: '',
    grnNo: '',
    companyName: '',
    batchNo: '',
    date: '',
    source: 'vendor',
    selectedParty: '',
    inwardBy: '',
    inwardCost: 0,
    inwardProducts: [InwardProductInitialValue],
    inwardQtyInKg: 0,
    inwardType: '',
    location: '',
    purchasedBy: '',
    purchasedQty: 0,
    remarks: '',
    totalWeightInKg: 0,
}