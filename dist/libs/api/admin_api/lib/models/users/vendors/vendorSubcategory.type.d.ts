import { GetVendorCategory } from './vendorCategory.type';

export type PostVendorSubcategory = {
    name: string;
    category: string;
};
export type GetVendorSubcategory = {
    id: string;
    name: string;
    category: GetVendorCategory;
};
