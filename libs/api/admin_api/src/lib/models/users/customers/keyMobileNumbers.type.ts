import { Address } from "../../address.type";

export type PostKeyMobileNumbers = {
    accDeptFName: string;
    accDeptMName: string;
    accDeptLName: string;
    accDeptMobileNo: string;
    ownerFName: string;
    ownerMName: string;
    ownerLName: string;
    ownerMobileNo: string;
    mandiLicenceNo: string;
    mandiLicenceCopy: File | null;
    regiNo: string;
    regiCopy: File | null;
    electricityBill: string;
    consumenrNo: string;
    electricityBillCopy: File | null;
    notElectricityBillReason: string;
    customerBlacklisted: string;
    ifBlacklistedReason: string;
    blackListedBy: string;
    visitingCard: string;
    visitinContactNo: string;
    visitingCardCopy: File | null;
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

export type GetKeyMobileNumbers = {
    id: string
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