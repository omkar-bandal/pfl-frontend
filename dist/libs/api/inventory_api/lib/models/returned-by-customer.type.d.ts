import { ApprovalSummany, DocumentStatus, FormProductQtyAmt, FormProducts, FormProductWeight } from '../../../../common_api/src/index.ts';

export type IReturnedProducts = {
    saleUoM: string | null;
    returnedUOM: string | null;
} & FormProducts & FormProductQtyAmt & FormProductWeight;
export type IReturnByCustomer = {
    id: string;
    documentId?: string | null;
    documentDef?: string | null;
    createdBy?: string | null;
    createdDate?: string;
    createdTime?: string;
    proformaInvNo: string | null;
    deliveryChallanNo: string | null;
    companyName: string | null;
    date: string | null;
    returnedProducts: IReturnedProducts[];
    remark: string | null;
    overAllStatus?: DocumentStatus;
    approvalSummary?: ApprovalSummany;
};
