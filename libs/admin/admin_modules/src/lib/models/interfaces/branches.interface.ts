import { Address } from "./address.interface";

export enum BranchType {
    "COLLECTION_CENTER",
    "DISTRIBUTION_CENTER",
    "SEASONAL_COLLECTION_CENTER",
    "WAREHOUSE"
}

export interface Branches {
    id: string;
    name: string;
    address: Address;
    contactNumber: string;
    cFirstName: string;
    cMiddleName: string;
    cLastName: string;
    notes: string;
    totalCapacity: number;
    currentCapacity: number;
    balanceCapacity: number;
    type: BranchType,
}