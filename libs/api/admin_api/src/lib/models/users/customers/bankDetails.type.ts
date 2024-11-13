import { Address, GetAddress } from "../../address.type"

export type PostBankDetails = {
    ifCancelledCheque: string,
    notCancelledChequeReason: string,
    cancelledChequeCopy: File | null,
    accType: string,
    otherAccType: string,
    bankStatementCopy: File | null,
    bankAccHolderFName: string,
    bankAccHolderMName: string,
    bankAccHolderLName: string,
    bankName: string,
    bankBranch: string,
    bankAccNo: string,
    ifscCode: string,
    bankAddress: Address
}

export type GetBankDetails = {
    id: string;
    ifCancelledCheque: string,
    notCancelledChequeReason: string,
    cancelledChequeCopy: string,
    accType: string,
    otherAccType: string,
    bankStatementCopy: string,
    bankAccHolderFName: string,
    bankAccHolderMName: string,
    bankAccHolderLName: string,
    bankName: string,
    bankBranch: string,
    bankAccNo: string,
    ifscCode: string,
    bankAddress: GetAddress
}