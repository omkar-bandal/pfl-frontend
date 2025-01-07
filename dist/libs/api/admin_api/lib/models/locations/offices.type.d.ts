import { Address, GetAddress } from '../address.type';

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
};
export type PostOffices = {
    name: string;
    address: Address;
    cFirstName: string;
    cMiddleName: string;
    cLastName: string;
    contactNumber: string;
    officeEmail: string;
    notes: string;
};
export declare enum OfficeType {
    "REGISTERED_OFFICE" = 0,
    "CORPORATE_OFFICE" = 1
}
