import { Address, GetAddress } from "../../shared";

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
    name: string | null;
    address: Address;
    cFirstName: string | null;
    cMiddleName: string | null;
    cLastName: string | null;
    contactNumber: string | null;
    officeEmail: string | null;
    notes: string | null;
}

export enum OfficeType {
    "registered-office",
    "corporate-office"
}