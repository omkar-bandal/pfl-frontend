import { Address, GetAddress } from "@prime-fresh/common_api";

export type PostBankDetails = {
    ifCancelledCheque: string | null,
    notCancelledChequeReason: string | null,
    cancelledChequeCopy: File | null,
    accType: string | null,
    otherAccType: string | null,
    bankStatementCopy: File | null,
    bankAccHolderFName: string | null,
    bankAccHolderMName: string | null,
    bankAccHolderLName: string | null,
    bankName: string | null,
    bankBranch: string | null,
    bankAccNo: string | null,
    ifscCode: string | null,
    bankAddress: Address
}

export type GetBankDetails = {
    id: string;
    ifCancelledCheque: string | null,
    notCancelledChequeReason: string | null,
    cancelledChequeCopy: string | null,
    accType: string | null,
    otherAccType: string | null,
    bankStatementCopy: string | null,
    bankAccHolderFName: string | null,
    bankAccHolderMName: string | null,
    bankAccHolderLName: string | null,
    bankName: string | null,
    bankBranch: string | null,
    bankAccNo: string | null,
    ifscCode: string | null,
    bankAddress: GetAddress
}