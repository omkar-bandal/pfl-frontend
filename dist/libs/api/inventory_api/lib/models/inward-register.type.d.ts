import { GetVendor, GetFarmer } from '../../../../admin_api/src/index.ts';

export type PostInwardProducts = {
    product: string;
    count: string;
    size: string;
    weight: string;
    uom: string;
    qty: number;
    productContainerWeight: number;
    netWeight: number;
    grossWeight: number;
};
export type GetInwardProducts = {
    id: string;
} & PostInwardProducts;
export type PostInwardRegister = {
    grnNo: string;
    deliveryChallanNo: string;
    inwardType: string;
    companyName: string;
    location: string;
    date: string;
    totalWeightInKg: number;
    batchNo: string;
    selectedParty: string;
    inwardProduct: PostInwardProducts[];
    source: string;
    purchasedBy: string;
    purchasedQty: number;
    inwardQtyInKg: number;
    inwardCost: number;
    remarks: string;
    inwardBy: string;
};
export type GetInwardRegister = {
    id: string;
    grnNo: string;
    deliveryChallanNo: string;
    inwardType: string;
    companyName: string;
    location: string;
    date: Date;
    batchNo: string;
    source: string;
    selectedParty: string;
    selectedVendor?: GetVendor;
    selectedFarmer?: GetFarmer;
    inwardProduct: GetInwardProducts;
    totalWeightInKg: number;
    purchasedQty: number;
    purchasedBy: string;
    inwardBy: string;
    inwardQtyInKg: number;
    inwardCost: number;
    remarks: string;
};
