import type { Address } from "../address.model";

export interface ICustomerBillingDetails {
    id?: string,
    billingName: string | null,
    contactPersonFName: string | null,
    contactPersonMName: string | null,
    contactPersonLName: string | null,
    commonlyKnownAs: string | null;
    billingAddress: Address,
    billingAddressProofCopy: string | null,
    primaryContactNo: string | null,
    secondaryContactNo: string | null,
    emailPrimary: string | null,
    emailSecondary: string | null,
    billingFormatCopy: string | null
  }
