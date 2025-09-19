import { Address, GetFilteredBranchData } from "@prime-fresh/admin_api";

export interface ILaborBankDetails {
    // id: string;
    bankName: string | null;
    branchName: string | null;
    accountNumber: string | null;
    ifscCode: string | null;
    aadharNo: string | null;
    panNo: string | null;
    electionCardNo: string | null;
}

export interface ILaborFamilyDetails {
    // id: string;
    relation: "Father" | "Mother" | "Spouse" | null;
    nameAsPerAadhar: string| null;
    mobileNumber: string| null;
    age: number| null;
}

export interface ILaborWorkExperience {
    // id: string;
    previousFarmOrWorkPlace: string | null;
    workType: string | null;
    workLocation: string | null;
    workDuration: number | null;
    wagesPerDayOrMonth: number | null;
}

export interface ILaborRegistration {
    id: string;
    representativeName: string | null;
    siteName: string | null;
    laborType: "Skilled" | "Semi-skilled" | "Unskilled" | null;
    laborName: string | null;
    nameAsPerAadhar: string | null;
    nameAsPerBank: string | null;
    presentAddress: Address;
    permanentAddress: Address;
    mobileNumber: string | null;
    emergencyContactNo: string | null;
    emergencyContactName: string | null;
    relationWithEmergencyContact: string | null;
    healthIssues: string | null;
    birthDate: string | null;
    gender: "Male" | "Female" | null;
    bloodGroup: string | null;
    educationQualification: string | null;
    pfUanNo: string | null;
    maritalStatus: "Married" | "Unmarried" | null;
    email: string | null;
    bankDetails: ILaborBankDetails;
    familyDetails: ILaborFamilyDetails[];
    workExperience: ILaborWorkExperience[];
    preferredWorkingLocation: string | null;
    preferredWorkType: string | null;
    referenceName: string | null;
    referencePosition: string | null;
    referenceMobileNumber: string | null;
}

export interface ITemporaryLabor {
    id: string;
    laborName: string | null;
    contactNo: string | null;
}

