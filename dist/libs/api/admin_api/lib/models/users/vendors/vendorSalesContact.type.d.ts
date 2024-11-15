export type PostVendorSalesContact = {
    contactFName: string;
    contactMName: string;
    contactLName: string;
    directContactNumber: string;
    mobileNumber: string;
    email: string;
};
export type GetVendorSalesContact = {
    id: string;
} & PostVendorSalesContact;
