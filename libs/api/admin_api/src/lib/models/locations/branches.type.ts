import { Address, GetAddress } from "../address.type";

export enum BranchType {
    "COLLECTION_CENTER",
    "DISTRIBUTION_CENTER",
    "SEASONAL_COLLECTION_CENTER",
    "WAREHOUSE"
}

export interface GetBranches {
    id: string;
    name: string;
    address: GetAddress;
    contactNumber: string;
    cFirstName: string;
    cMiddleName: string;
    cLastName: string;
    notes: string;
    totalCapacity: number;
    currentCapacity: number;
    balanceCapacity: number;
    type: string;
}
export type PostBranches = {
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
    type: string;
}

export type GetFilteredBranchData = {
    id: string,
    name: string,
    type: string,
}