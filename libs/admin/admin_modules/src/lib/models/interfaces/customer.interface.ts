import { Address } from './address.interface';

export interface CustomerTypes{
  id: string,
  name: string,
}

export interface CustomerCategory{
  id: string,
  name: string,
}

export interface KeyMobileNumbers{
  accDeptFName: string;
  accDeptMName: string;
  accDeptLName: string;
  accDeptMobileNo: string;
  ownerFName: string;
  ownerMName: string;
  ownerLName: string;
  ownerMobileNo: string;
  mandiLicenceNo: string;
  mandiLicenceCopy: string;
  regiNo: string;
  regiCopy: string;
  electricityBill: string;
  consumenrNo: string;
  electricityBillCopy: string;
  notElectricityBillReason: string;
  customerBlacklisted: string;
  ifBlacklistedReason: string;
  blackListedBy: string;
  visitingCard: string;
  visitinContactNo: string;
  visitingCardCopy: string;
  notVisitingCardReason: string;
  ref1FName: string;
  ref1MName: string;
  ref1LName: string;
  ref1Address: Address;
  ref1ContactNo: string;
  ref1Email: string;
  ref2FName: string;
  ref2MName: string;
  ref2LName: string;
  ref2Address: Address;
  ref2ContactNo: string;
  ref2Email: string;
}

export interface BillingDetails {
  billingName: string,
  contactPersonFName: string,
  contactPersonMName: string,
  contactPersonLName: string,
  commonlyKnownAs: string;
  billingAddress: Address,
  billingAddressProofCopy: string,
  primaryContactNo: string,
  secondaryContactNo: string,
  emailPrimary: string,
  emailSecondary: string,
  billingFormatCopy: string
}

export interface DeliveryDetails {
  deliveryAddress: Address,
  deliveryAddressProofCopy:string
  deliveryTime: Date,
  receivingPersonFName: string,
  receivingPersonMName: string,
  receivingPersonLName: string,
  primaryContactNo: string,
  secondaryContactNo: string,
  emailPrimary: string,
  emailSecondary: string
}

export interface StatutoryDetails {
  panNo: string,
  panCopy: string,
  aadharNo: string,
  addharCopy: string,
  gstn: string,
  regiCertificateCopy: string,
  billBookCopy: string,
  certificationsDetails: string,
  otherCertifications: string,
  corpRegiDetails: string,
  otherCorpRegiDetails: string,
  incorpoCertificateCopy: string,
  cinNo: string
}

export interface BankDetails {
  ifCancelledCheque: string,
  notCancelledChequeReason: string,
  cancelledChequeCopy: string,
  accType: string,
  otherAccType: string,
  bankStatementCopy: string,
  bankAccHolderFName: string,
  bankAccHolderMName: string,
  bankAccHolderLName: string,
  bankName: string,
  bankBranch: string,
  bankAccNo: string,
  ifscCode: string,
  bankAddress: Address
}

export interface ProductSpecification {
  articleName: string,
  specifications: string,
  parameters: string,
  packingMaterialSpec: string,
  rejectionCriteria: string,
  comment: string
}

export interface PaymentTerms {
  paymentMade: string,
  otherPaymentMade: string,
  paymentMode: string,
  otherPaymentMode: string,
  marginDeposit: string,
  rtv: string,
  agreementExecuted: string,
  lc:string,
  bg:string,
  securityDepoCheqNo: string,
  securityDepoAmt: number,
  //Initial Exposure Limit (IEL)
  IELinAmt: number,
  IELRecommendedBy: string,
  IELRecommendedDate: Date,
  //Revision of Exposure Limit (REL)
  RELinAmt: number,
  RELRecommendedBy: string,
  RELRecommendedDate: Date,
  reason: string;
  docEvidenceCopy: string,
}

export interface OfficeUseOnly{
  proposerBDName: string,
  pflCoordinator: string,
  recommendedBy: string,
  dispatchLocationPfl: string,
  approvedBy: string,
  relationshipManager: string,
  avgBillingMonthly: number,
  volumeMonthly: number,
  customerVerification: string,
  verificationAgency: string,
  validityPeriod: string,
  dueDiligenceDone: string,
  creditWorthinessDue: string,
  keyAccountPersonAssigned: string,
  sinceWhen: string,
  ledgerCreatedDate: Date,
  ledgerCreatedBy: string,
  ledgerVerifiedApprovedBy: string,
  additionalNotes: string
  customerCode: string,
  createdBy: string,
  createdDate: Date,
}


export interface Customer {
  id: string,
  organisationName: string,
  customerTypes: CustomerTypes,
  customerCategory: CustomerCategory,
  organisationType: string,
  otherType: string,
  customerAddress: Address,
  primaryContactNo: string,
  secondaryContactNo: string,
  emailPrimary: string,
  emailSecondary: string,
  keyMobileNumbers: KeyMobileNumbers,
  billingDetails: BillingDetails,
  deliveryDetails: DeliveryDetails,
  statutoryDetails: StatutoryDetails,
  bankDetails: BankDetails,
  productSpecification: ProductSpecification[],
  paymentTerms: PaymentTerms,
  officeUseOnly: OfficeUseOnly,
}

export interface CustomerPost{
  organisationName: string,
  customerTypes: CustomerTypes,
  customerCategory: CustomerCategory,
  organisationType: string,
  otherType: string,
  customerAddress: Address,
  primaryContactNo: string,
  secondaryContactNo: string,
  emailPrimary: string,
  emailSecondary: string,
  keyMobileNumbers: KeyMobileNumbers,
  billingDetails: BillingDetails,
  deliveryDetails: DeliveryDetails,
  statutoryDetails: StatutoryDetails,
  bankDetails: BankDetails,
  productSpecification: ProductSpecification[],
  paymentTerms: PaymentTerms,
  officeUseOnly: OfficeUseOnly,
}