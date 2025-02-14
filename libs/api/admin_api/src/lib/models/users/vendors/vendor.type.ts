import { Address, GetAddress } from "@prime-fresh/common_api";
import { GetVendorBankDetails, PostVendorBankDetails } from "./vendorBankDetails.type";
import { GetVendorSalesContact, PostVendorSalesContact } from "./vendorSalesContact.type";

export type GetVendor = {
    id: string | null;
    companyName: string | null;
    category: string | null;
    subcategory: string | null;
    inFandVBusinessSince: string | null;
    dateOfIncorporation: Date;
    officeAddress: GetAddress;
    officeContactNo: string | null;
    email: string | null;
    website: string | null;
    //Other Details
    mainProduct: string | null;
    listOfAllProducts: string | null;
    dispatchCenter: string | null;
    warehouseLocations: string | null;
    packingCenterLocation: string | null;
    ifGstnCopy: boolean;
    gstn: string | null;
    gstnCopy: string | null;
    ifPanCardCopy: boolean;
    panNo: string | null;
    panCardCopy: string | null;
    ifMsmeCopy: boolean;
    msmeNo: string | null;
    msmeCopy: string | null;
    tradeLicenseNumber: string | null;
    proposedPaymentTerms: string | null;
    creditTerms: string | null;
    anyDetailsTeamAndInfra: string | null;
    submittedBy: string | null;
    registeredBy: string | null;
    registeredDate: Date;
    //Vendor Sales Contact
    vendorSaleInfo: GetVendorSalesContact;
    //Vendor Bank Details
    vendorBankDetails: GetVendorBankDetails;  
    //Vendor References
    ref1FName: string | null;
    ref1MName: string | null;
    ref1LName: string | null;
    ref1PrimaryCNumb: string | null;
    ref1AltrCNumb: string | null;
    ref1Address: GetAddress;
    ref1Email: string | null;
    ref2FName: string | null;
    ref2MName: string | null;
    ref2LName: string | null;
    ref2PrimaryCNumb: string | null;
    ref2AltrCNumb: string | null;
    ref2Address: GetAddress;
    ref2Email: string | null;
    vendorGrade: string | null;
    vendorCode: string | null;
    status: string | null;
  }

  export type PostVendor = {
    companyName: string | null;
    category: string | null;
    subcategory: string | null;
    inFandVBusinessSince: string | null;
    dateOfIncorporation: string | null;
    officeAddress: Address;
    officeContactNo: string | null;
    officeEmail: string | null;
    website: string | null;
    //Other Details
    mainProduct: string | null;
    listOfAllProducts: string[] | [];
    dispatchCenter: string | null;
    warehouseLocations: string | null;
    packingCenterLocation: string | null;
    ifGstnCopy: boolean;
    gstn: string | null;
    gstnCopy: File | null;
    ifPanCardCopy: boolean;
    panNo: string | null;
    panCardCopy: File | null;
    ifMsmeCopy: boolean;
    msmeNo: string | null;
    msmeCopy: File | null;
    tradeLicenseNumber: string | null;
    proposedPaymentTerms: string | null;
    creditTerms: string | null;
    anyDetailsTeamAndInfra: string | null;
    
    //Vendor Sales Contact
    vendorSaleInfo: PostVendorSalesContact;
    //Vendor Bank Details
    vendorBankDetails: PostVendorBankDetails;  
    //Vendor References
    ref1FName: string | null;
    ref1MName: string | null;
    ref1LName: string | null;
    ref1PrimaryCNumb: string | null;
    ref1AltrCNumb: string | null;
    ref1Address: Address;
    ref1Email: string | null;
    ref2FName: string | null;
    ref2MName: string | null;
    ref2LName: string | null;
    ref2PrimaryCNumb: string | null;
    ref2AltrCNumb: string | null;
    ref2Address: Address;
    ref2Email: string | null;
  }

  export type GetAllFilteredVendorData = {
    id: string,
    category: string,
    subcategory: string,
    companyName: string,
    officeContactNo: string,
    contactPersonName: string,
    officeEmail: string,
    vendorCode: string,
    officeAddress: Address
  }