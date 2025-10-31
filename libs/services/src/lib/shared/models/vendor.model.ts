import type { Address } from './address.model';

export type VendorClassificationType =
  | 'fresh fruits'
  | 'mangoes'
  | 'vegetables'
  | 'onion'
  | 'potato'
  | 'tomato'
  | 'value added product'
  | 'packing material'
  | 'service'
  | 'stationary'
  | 'crockery'
  | 'marketing product'
  | 'staff wellfare'
  | 'other';

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
  classification: VendorClassificationType | null;
  category: string | null;
  subcategory: string | null;
  inFandVBusinessSince: string | null;
  dateOfIncorporation: string | null;
  officeAddress: Address;
  officeContactNo: string | null;
  officeEmail: string | null;
  website: string | null;
  //Other Details
  listOfAllProducts: string[];
  mainProduct: string | null;
  listOfPackingMaterial: string[];
  mainPackingMaterial: string | null;
  otherProductOrService: string | null;
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
  paymentMode: string | null;
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
  createdBy?: string | null;
  createdDate?: string | null;
  createdTime?: Date;
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
  officeAddress: Address;
}
