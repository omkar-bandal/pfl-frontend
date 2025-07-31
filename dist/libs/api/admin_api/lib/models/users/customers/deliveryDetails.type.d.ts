import { Address, GetAddress } from '../../../../../../common_api/src/index.ts';

export type PostDeliveryDetails = {
    deliveryAddress: Address;
    deliveryAddressProofCopy: string | null;
    deliveryTime: string | null | null;
    receivingPersonFName: string | null;
    receivingPersonMName: string | null;
    receivingPersonLName: string | null;
    primaryContactNo: string | null;
    secondaryContactNo: string | null;
    emailPrimary: string | null;
    emailSecondary: string | null;
};
export type GetDeliveryDetails = {
    id: string;
    deliveryAddress: GetAddress;
    deliveryAddressProofCopy: string | null;
    deliveryTime: string | null;
    receivingPersonFName: string | null;
    receivingPersonMName: string | null;
    receivingPersonLName: string | null;
    primaryContactNo: string | null;
    secondaryContactNo: string | null;
    emailPrimary: string | null;
    emailSecondary: string | null;
};
