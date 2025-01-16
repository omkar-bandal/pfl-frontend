import { RequestedBy } from './requestedBy.interface';

export interface GRNProducts {
    product: string;
    count: string;
    uom: string;
    quantity: number;
    rate: number;
    amt: number;
    rtv: string;
    purchaseDate: string;
    expectedHarvestDate: string;
    dispatchDate: string;
    deliveryDate: string;
    deliveryLocation: string;
    revisedRate: number;
    revisedQuantity: number;
}
export interface PostGRN {
    grnType: string;
    purchaseType: "fixed price sales" | "consignment sales / bikri" | "mgp sales";
    dealSlipId?: string;
    billNo: string;
    companyName: string;
    purchaseInstructionsBy: string;
    purchaseLocation: string;
    purchaseForSalesLocation: string;
    specialReq: string;
    source: "vendor" | "farmer";
    selectedParty: string;
    products: GRNProducts[];
    deliveryReceivingPerson: string;
    subTotalAmt: number;
    totalAmt: number;
    amtWords: string;
    freight: number;
    otherCharges: number;
    purchasedBy: string;
    receivedThrough: string;
    securityPerson: string;
    vehicleNo: string;
    timeIn: string;
    cratesIn: number;
    rmn: string;
    remark: string;
    billImage: File | null;
}
export interface GetGRN {
    id: string;
    grnType: string;
    purchaseType: "fixed price sales" | "consignment sales / bikri" | "mgp sales";
    grnNo?: string;
    createdDate?: string;
    createdTime?: string;
    requestedBy?: RequestedBy;
    requestingDepartment?: string;
    baseLocation?: string;
    dealSlipId: string;
    billNo: string;
    companyName: string;
    purchaseInstructionsBy: string;
    purchaseLocation: string;
    purchaseForSalesLocation: string;
    specialReq: string;
    source: "vendor" | "farmer";
    selectedParty: string;
    products: GRNProducts[];
    deliveryReceivingPerson: string;
    freight: number;
    subTotalAmt: number;
    totalAmt: number;
    amtWords: string;
    otherCharges: number;
    receivedThrough: string;
    vehicleNo: string;
    timeIn: string;
    cratesIn: number;
    purchasedBy: string;
    securityPerson: string;
    rmn: string;
    remark: string;
    approvalStatus?: string;
    approvalNote?: string;
    billImage: string;
}
export interface GetAllGRNnumbers {
    id: string;
    grnNo: string;
}
