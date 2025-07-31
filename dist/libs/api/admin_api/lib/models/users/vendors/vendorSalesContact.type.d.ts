export interface IVendorSalesContact {
    id?: string;
    contactFName: string | null;
    contactMName: string | null;
    contactLName: string | null;
    directContactNumber: string | null;
    mobileNumber: string | null;
    email: string | null;
}
export type PostVendorSalesContact = {
    contactFName: string | null;
    contactMName: string | null;
    contactLName: string | null;
    directContactNumber: string | null;
    mobileNumber: string | null;
    email: string | null;
};
export type GetVendorSalesContact = {
    id: string;
} & PostVendorSalesContact;
