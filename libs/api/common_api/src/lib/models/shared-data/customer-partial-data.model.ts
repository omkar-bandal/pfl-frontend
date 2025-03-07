import { Address } from "./address.model"

export type CustomerPartialData = {
    id:string,
    organisationName:string,
    billingAddress: Address,
    deliveryAddress:Address,
    gstNumber: string,
    panNumber: string
}

export type CustomerNames = {
    id: string;
    organisationName: string;
}