import { Address, GetAddress } from "../../address.type";

export type GetBillingDetails = {
    id: string,
    billingName: string,
    contactPersonFName: string,
    contactPersonMName: string,
    contactPersonLName: string,
    commonlyKnownAs: string;
    billingAddress: GetAddress,
    billingAddressProofCopy: string,
    primaryContactNo: string,
    secondaryContactNo: string,
    emailPrimary: string,
    emailSecondary: string,
    billingFormatCopy: string
  }

export type PostBillingDetails = {
    billingName: string,
    contactPersonFName: string,
    contactPersonMName: string,
    contactPersonLName: string,
    commonlyKnownAs: string;
    billingAddress: Address,
    billingAddressProofCopy: File | null,
    primaryContactNo: string,
    secondaryContactNo: string,
    emailPrimary: string,
    emailSecondary: string,
    billingFormatCopy: File | null
  }