import { Address } from "./address.interface";

export enum OfficeType {
    "REGISTERED_OFFICE",
    "CORPORATE_OFFICE"
}

export interface Offices {
    id: string;
    name: string;
    address: Address;
    cFirstName: string;
    cMiddleName: string;
    cLastName: string;
    contactNumber: string;
    officeEmail: string;
    notes: string;
    type: OfficeType
}