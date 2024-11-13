import { Address, GetAddress } from "../address.type";

export type GetOffices = {
    id: string;
    name: string;
    address: GetAddress;
    cFirstName: string;
    cMiddleName: string;
    cLastName: string;
    contactNumber: string;
    officeEmail: string;
    notes: string;
    type: string;
}

export type PostOffices = {
    name: string;
    address: Address;
    cFirstName: string;
    cMiddleName: string;
    cLastName: string;
    contactNumber: string;
    officeEmail: string;
    notes: string;
    type: string
}

export enum OfficeType {
    "REGISTERED_OFFICE",
    "CORPORATE_OFFICE"
}