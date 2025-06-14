/* eslint-disable @typescript-eslint/no-explicit-any */
import { Address } from '../address.interface';

export interface IMaterials {
    id?: string;
    itemName: string | null;
    itemQty: number | null;
    itemUom: string | null;
    rate: number | null;
    amt: number;
}

export interface IPackingMaterialPaymentVoucher {
    id: string;
    createdDate?: string;
    createdTime?: string;
    requestedBy?: string;
    requestingDepartment?: string;
    voucherNo?: string;
    grnNo: string | null;
    companyName: string | null;
    debitCreditTo: string | null;
    payReceivedFrom: string | null;
    location: string | null;
    sellerName: string | null;
    contactNo: string | null;
    altContactNo: string | null;
    address: Address;
    purpose: string | null;
    paymentMode: string | null;
    totalAmt: number | null;
    amtWords: string | null;
    materials: IMaterials[];
    receiverName: string | null;
    kyc: boolean;
    remark: string | null;
    anyAttachment: any;
    approvalStatus?: string | null;
}