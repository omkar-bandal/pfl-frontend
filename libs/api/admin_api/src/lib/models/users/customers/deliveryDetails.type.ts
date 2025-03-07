import { Address, GetAddress } from "@prime-fresh/common_api";

export type PostDeliveryDetails = {
    deliveryAddress: Address,
    deliveryAddressProofCopy: string
    deliveryTime: string | null,
    receivingPersonFName: string,
    receivingPersonMName: string,
    receivingPersonLName: string,
    primaryContactNo: string,
    secondaryContactNo: string,
    emailPrimary: string,
    emailSecondary: string
}

export type GetDeliveryDetails = {
    id: string,
    deliveryAddress: GetAddress,
    deliveryAddressProofCopy: string
    deliveryTime: string,
    receivingPersonFName: string,
    receivingPersonMName: string,
    receivingPersonLName: string,
    primaryContactNo: string,
    secondaryContactNo: string,
    emailPrimary: string,
    emailSecondary: string
}