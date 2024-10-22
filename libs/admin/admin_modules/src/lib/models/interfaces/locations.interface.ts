import { Address } from "./address.interface";

export interface Locations {
    id: string,
    name: string,
    contactPersonFirstName: string,
    contactPersonMiddleName: string,
    contactPersonLastName: string,
    contactNumber: string,
    alternateContactNumber: string,
    email: string,
    notes: string,
    capacity: number,
    address: Address
}
export interface LocationsRes {
    status: string,
    data: Locations[],
}