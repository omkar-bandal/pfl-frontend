import { Address, GetAddress } from "../../address.type"

export type PostDeliveryDetails = {
    deliveryAddress: Address,
    deliveryAddressProofCopy: string
    deliveryTime: Date,
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
    deliveryTime: Date,
    receivingPersonFName: string,
    receivingPersonMName: string,
    receivingPersonLName: string,
    primaryContactNo: string,
    secondaryContactNo: string,
    emailPrimary: string,
    emailSecondary: string
}