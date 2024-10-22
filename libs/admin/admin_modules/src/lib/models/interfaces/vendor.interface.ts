// import { Address } from './address.interface';
import { Address } from './address.interface';
import { Status } from './status.interface';

export interface VendorCategory {
  id: string;
  name: string;
}

export interface VendorSubcategory {
  id: string;
  name: string;
  category: string;
}

export interface VendorSalesContact {
  contactFName: string;
  contactMName: string;
  contactLName: string;
  directContactNumber: string;
  mobileNumber: string;
  email: string;
}
export interface VendorBankDetails {
  beneficiaryFName: string;
  beneficiaryMName: string;
  beneficiaryLName: string;
  bankName: string;
  branchAddress: Address;
  typeOfAcc: string;
  ifscCode: string;
  swiftNo: string;
  invoiceCurrency: string;
  cancelledChequeCopy: string;
}

export interface Vendor {
  id?: string;
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
  vendorSaleInfo: VendorSalesContact;

  //Vendor Bank Details
  vendorBankDetails: VendorBankDetails;

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
  vendorGrade?: string;
  vendorCode?: string;
  status?: Status;
}
export interface VendorPost{
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
  vendorSaleInfo: VendorSalesContact;

  //Vendor Bank Details
  vendorBankDetails: VendorBankDetails;

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



 