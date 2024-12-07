import { Address, GetAddress } from "../../address.type";
import { GetVendorBankDetails, PostVendorBankDetails } from "./vendorBankDetails.type";
import { GetVendorSalesContact, PostVendorSalesContact } from "./vendorSalesContact.type";

export type GetVendor = {
    id: string;
    companyName: string;
    category: string;
    subcategory: string;
    inFandVBusinessSince: string;
    dateOfIncorporation: Date;
    officeAddress: GetAddress;
    officeContactNo: string;
    email: string;
    website: string;
    //Other Details
    mainProduct: string;
    listOfAllProducts: string;
    dispatchCenter: string;
    warehouseLocations: string;
    packingCenterLocation: string;
    ifGstnCopy: boolean;
    gstn: string;
    gstnCopy: string;
    ifPanCardCopy: boolean;
    panNo: string;
    panCardCopy: string;
    ifMsmeCopy: boolean;
    msmeNo: string;
    msmeCopy: string;
    tradeLicenseNumber: string;
    proposedPaymentTerms: string;
    creditTerms: string;
    anyDetailsTeamAndInfra: string;
    submittedBy: string;
    registeredBy: string;
    registeredDate: Date;
    //Vendor Sales Contact
    vendorSaleInfo: GetVendorSalesContact;
    //Vendor Bank Details
    vendorBankDetails: GetVendorBankDetails;  
    //Vendor References
    ref1FName: string;
    ref1MName: string;
    ref1LName: string;
    ref1PrimaryCNumb: string;
    ref1AltrCNumb: string;
    ref1Address: GetAddress;
    ref1Email: string;
    ref2FName: string;
    ref2MName: string;
    ref2LName: string;
    ref2PrimaryCNumb: string;
    ref2AltrCNumb: string;
    ref2Address: GetAddress;
    ref2Email: string;
    vendorGrade: string;
    vendorCode: string;
    status: string;
  }

  export type PostVendor = {
    companyName: string;
    category: string;
    subcategory: string;
    inFandVBusinessSince: string;
    dateOfIncorporation: Date;
    officeAddress: Address;
    officeContactNo: string;
    email: string;
    website: string;
    //Other Details
    mainProduct: string;
    listOfAllProducts: string;
    dispatchCenter: string;
    warehouseLocations: string;
    packingCenterLocation: string;
    ifGstnCopy: boolean;
    gstn: string;
    gstnCopy: File | null;
    ifPanCardCopy: boolean;
    panNo: string;
    panCardCopy: File | null;
    ifMsmeCopy: boolean;
    msmeNo: string;
    msmeCopy: File | null;
    tradeLicenseNumber: string;
    proposedPaymentTerms: string;
    creditTerms: string;
    anyDetailsTeamAndInfra: string;
    submittedBy: string;
    registeredBy: string;
    registeredDate: Date;
    //Vendor Sales Contact
    vendorSaleInfo: PostVendorSalesContact;
    //Vendor Bank Details
    vendorBankDetails: PostVendorBankDetails;  
    //Vendor References
    ref1FName: string;
    ref1MName: string;
    ref1LName: string;
    ref1PrimaryCNumb: string;
    ref1AltrCNumb: string;
    ref1Address: Address;
    ref1Email: string;
    ref2FName: string;
    ref2MName: string;
    ref2LName: string;
    ref2PrimaryCNumb: string;
    ref2AltrCNumb: string;
    ref2Address: Address;
    ref2Email: string;
  }

  export type GetAllFilteredVendorData = {
    id: string,
    companyName: string,
    officeContactNo: string,
    email: string,
    vendorCode: string,
    officeAddress: Address
  }