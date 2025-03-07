import { Address } from './address.model';

export type VendorPartialData = {
    id: string;
    category: string;
    subcategory: string;
    companyName: string;
    officeContactNo: string;
    contactPersonName: string;
    officeEmail: string;
    vendorCode: string;
    officeAddress: Address;
};
