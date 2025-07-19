import { DocumentStatus, ApprovalSummany } from "@prime-fresh/common_api";
export interface ISecondSaleProducts {
    id?: string;
    productName: string | null;
    count: string | null;
    size: string | null;
    uom: string | null;
    quantity: number | null;
    unitPrice: number | null;
    amount: number | null;
    grossWeight: number | null;
    packingMaterialWeight: number | null;
    netWeight: number | null;
}
export interface ISecondSaleRegister {
    id: string;
    documentId?: string | null;
    documentDef?: string | null;
    createdBy?: string | null;
    createdDate?: string | null;
    createdTime?: string | null;
    companyName: string | null;
    location: string | null;
    dcNo: string | null;
    saleDate: string | null;
    buyerName: string | null;
    buyerMobNo: string | null;
    reasonForSale: string | null;
    approvedBy: string | null;
    soldBy: string | null;
    secondSaleProducts: ISecondSaleProducts[];
    totalNetWeight: number | null;
    totalAmt: number | null;
    totalAmtInWords: string | null;
    paidAmount: string | null;
    paymentMode: string | null;
    pendingAmt: string | null;
    remarks: string | null;
    comments: string | null;
    submittedBy: string | null;
    mobileNo: string | null;
    overAllStatus?: DocumentStatus;
    approvalSummary?: ApprovalSummany;
}