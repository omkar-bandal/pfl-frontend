import { Address, GetAddress } from '../../../../../../common_api/src/index.ts';

export type GetBillingDetails = {
    id: string;
    billingName: string | null;
    contactPersonFName: string | null;
    contactPersonMName: string | null;
    contactPersonLName: string | null;
    commonlyKnownAs: string | null;
    billingAddress: GetAddress;
    billingAddressProofCopy: string | null;
    primaryContactNo: string | null;
    secondaryContactNo: string | null;
    emailPrimary: string | null;
    emailSecondary: string | null;
    billingFormatCopy: string | null;
};
export type PostBillingDetails = {
    billingName: string | null;
    contactPersonFName: string | null;
    contactPersonMName: string | null;
    contactPersonLName: string | null;
    commonlyKnownAs: string | null;
    billingAddress: Address;
    billingAddressProofCopy: File | null;
    primaryContactNo: string | null;
    secondaryContactNo: string | null;
    emailPrimary: string | null;
    emailSecondary: string | null;
    billingFormatCopy: File | null;
};
