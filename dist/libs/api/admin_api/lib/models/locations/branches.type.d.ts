import { Address, GetAddress } from '../address.type';

export declare enum BranchType {
    "COLLECTION_CENTER" = 0,
    "DISTRIBUTION_CENTER" = 1,
    "SEASONAL_COLLECTION_CENTER" = 2,
    "WAREHOUSE" = 3
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
};
