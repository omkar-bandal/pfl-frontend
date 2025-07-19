import { GetVendorCategory } from "./vendorCategory.type";
export interface IVendorSubcategory {
    id: string;
    name: string;
    category?: GetVendorCategory;
}
export type GetVendorSubcategory = {
    id: string;
    name: string;
    category: GetVendorCategory;
}
export type PostVendorSubcategory = {
    name: string;
    category: string;
}

