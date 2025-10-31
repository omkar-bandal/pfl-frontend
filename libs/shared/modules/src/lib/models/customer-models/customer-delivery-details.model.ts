import type { Address } from "../address.model";

export type ICustomerDeliveryDetails = {
    id?: string;
    deliveryAddress: Address;
    deliveryAddressProofCopy: string | null
    deliveryTime: string | null;
    receivingPersonFName: string | null;
    receivingPersonMName: string | null;
    receivingPersonLName: string | null;
    primaryContactNo: string | null;
    secondaryContactNo: string | null;
    emailPrimary: string | null;
    emailSecondary: string | null
}