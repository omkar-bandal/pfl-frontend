import { Address, GetAddress } from '../address.type';

export declare enum BranchType {
    "collection-center" = 0,
    "distribution-center" = 1,
    "seasonal-collection-center" = 2,
    "warehouse" = 3
}
export interface GetBranches {
    id: string;
    name: string;
    prefix: string;
    address: GetAddress;
    contactNumber: string;
    cFirstName: string;
    cMiddleName: string;
    cLastName: string;
    notes: string;
    totalCapacity: number;
    currentCapacity: number;
    balanceCapacity: number;
    type: "collection-center" | "distribution-center" | "seasonal-collection-center" | "warehouse";
}
export type PostBranches = {
    name: string | null;
    prefix: string | null;
    address: Address;
    contactNumber: string | null;
    cFirstName: string | null;
    cMiddleName: string | null;
    cLastName: string | null;
    notes: string | null;
    totalCapacity: number;
    currentCapacity: number;
    balanceCapacity: number;
};
export type GetFilteredBranchData = {
    id: string;
    name: string;
    type: "collection-center" | "distribution-center" | "seasonal-collection-center" | "warehouse";
};
