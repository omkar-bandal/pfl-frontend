import { PostInwardProducts, PostInwardRegister } from "@prime-fresh/inventory_api";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { getCurrentDate } from "@prime-fresh/shared/utils";

export const InwardProductInitialValue: PostInwardProducts = {
    product: '',
    count: '',
    size: '',
    qty: 0,
    uom: '',
    weight: '',
    productContainerWeight: 0,
    netWeight: 0,
    grossWeight: 0
}

export const InwardRegisterInitialValue: PostInwardRegister = {
    deliveryChallanNo: '',
    grnNo: '',
    companyName: '',
    batchNo: '',
    date: getCurrentDate(),
    source: 'vendor',
    inwardBy: '',
    inwardCost: 0,
    inwardProduct: [InwardProductInitialValue],
    inwardQtyInKg: 0,
    inwardType: '',
    location: '',
    purchasedBy: '',
    purchasedQty: 0,
    remarks: '',
    selectedParty: '',
    totalWeightInKg: 0,
}