import { Address } from './address.model';

export type FarmerPartialData = {
    id: string;
    fullName: string;
    primaryMobileNo: string;
    secondaryMobileNo: string;
    email: string;
    farmerCode: string;
    residensialAddress: Address;
    farmAddress: Address;
};
