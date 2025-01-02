import { Address } from "../../address.type";

export type PostVendorBankDetails = {
    beneficiaryFName: string | null;
    beneficiaryMName: string | null;
    beneficiaryLName: string | null;
    bankName: string | null;
    branchAddress: Address;
    typeOfAcc: string | null;
    ifscCode: string | null;
    swiftNo: string | null;
    invoiceCurrency: string | null;
    cancelledChequeCopy: File | null;
  }

export type GetVendorBankDetails = {id: string} & PostVendorBankDetails;