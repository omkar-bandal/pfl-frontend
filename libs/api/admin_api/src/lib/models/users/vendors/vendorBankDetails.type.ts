import { Address } from "../../address.type";

export type PostVendorBankDetails = {
    beneficiaryFName: string;
    beneficiaryMName: string;
    beneficiaryLName: string;
    bankName: string;
    branchAddress: Address;
    typeOfAcc: string;
    ifscCode: string;
    swiftNo: string;
    invoiceCurrency: string;
    cancelledChequeCopy: File | null;
  }

export type GetVendorBankDetails = {id: string} & PostVendorBankDetails;