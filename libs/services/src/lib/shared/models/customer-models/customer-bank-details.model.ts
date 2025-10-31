import type { Address } from "../address.model";

export interface ICustomerBankDetails {
    id?: string;
    ifCancelledCheque: string | null;
    notCancelledChequeReason: string | null;
    cancelledChequeCopy: string | null;
    accType: string | null;
    otherAccType: string | null;
    bankStatementCopy: string | null;
    bankAccHolderFName: string | null;
    bankAccHolderMName: string | null;
    bankAccHolderLName: string | null;
    bankName: string | null;
    bankBranch: string | null;
    bankAccNo: string | null;
    ifscCode: string | null;
    bankAddress: Address
}