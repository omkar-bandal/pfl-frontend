import { Address } from "@prime-fresh/services";

export interface IVendorBankDetails {
  id?: string;
  beneficiaryFName: string | null;
  beneficiaryMName: string | null;
  beneficiaryLName: string | null;
  bankName: string | null;
  branchAddress: Address;
  typeOfAcc: string | null;
  ifscCode: string | null;
  swiftNo: string | null;
  invoiceCurrency: string | null;
  cancelledChequeCopy: File | null;
}

export interface IVendorSalesContact {
  id?: string;
  contactFName: string | null;
  contactMName: string | null;
  contactLName: string | null;
  directContactNumber: string | null;
  mobileNumber: string | null;
  email: string | null;
}

export interface IVendor {
  id: string;
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
  //Vendor Sales Contact
  vendorSaleInfo: IVendorSalesContact;
  //Vendor Bank Details
  vendorBankDetails: IVendorBankDetails;
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
  vendorGrade?: string | null;
  vendorCode?: string | null;
  status?: string | null;
  submittedBy?: string | null;
  registeredBy?: string | null;
  registeredDate?: Date;
}

export interface IVendorPartialData {
    id: string;
    category: string;
    subcategory: string;
    companyName: string;
    officeContactNo: string;
    contactPersonName: string;
    officeEmail: string;
    vendorCode: string;
    officeAddress: Address
  }