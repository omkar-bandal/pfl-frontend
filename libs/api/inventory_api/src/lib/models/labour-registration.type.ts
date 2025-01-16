import { Address, GetFilteredBranchData } from "@prime-fresh/admin_api";

export type PostLaborBankDetails = {
    bankName: string,
    branchName: string,
    accountNumber: string,
    ifscCode: string,
    aadharNo: string,
    panNo: string,
    electionCardNo: string
}

export type GetLaborBankDetails = {id: string} & PostLaborBankDetails;

export type PostLaborFamilyDetails = {
    relation: "Father" | "Mother" | "Spouse" | "",
    nameAsPerAadhar: string,
    mobileNumber: string,
    age: number
}

export type GetLaborFamilyDetails = {id: string} & PostLaborFamilyDetails;

export type PostLaborWorkExperience = {
    previousFarmOrWorkPlace: string,
    workType: string,
    workLocation: string,
    workDuration: number,
    wagesPerDayOrMonth: number
}

export type GetLaborWorkExperience = {id: string} & PostLaborWorkExperience;

export type PostLaborRegistration = {
    representativeName: string,
    siteName: string,
    laborType: "Skilled" | "Semi-skilled" | "Unskilled" | "",
    laborName: string,
    nameAsPerAadhar: string,
    nameAsPerBank: string,
    presentAddress: Address,
    permanentAddress: Address,
    mobileNumber: string,
    emergencyContactNo: string,
    emergencyContactName: string,
    relationWithEmergencyContact: string,
    healthIssues: string,
    birthDate: string,
    gender: "Male" | "Female" | "",
    bloodGroup: string,
    educationQualification: string,
    pfUanNo: string,
    maritalStatus: "Married" | "Unmarried" | "",
    email: string,
    bankDetails: PostLaborBankDetails,
    familyDetails: PostLaborFamilyDetails[],
    workExperience: PostLaborWorkExperience[],
    preferredWorkingLocation: string,
    preferredWorkType: string,
    referenceName: string,
    referencePosition: string,
    referenceMobileNumber: string
}

export type GetLaborRegistration = {
    id: string,
    representativeName: string,
    siteName: GetFilteredBranchData,
    laborType: string,
    laborName: string,
    nameAsPerAadhar: string,
    nameAsPerBank: string,
    presentAddress: Address,
    permanentAddress: Address,
    mobileNumber: string,
    emergencyContactNo: string,
    emergencyContactName: string,
    relationWithEmergencyContact: string,
    healthIssues: string,
    birthDate: string,
    gender: string,
    bloodGroup: string,
    educationQualification: string,
    pfUanNo: string,
    maritalStatus: string,
    email: string,
    bankDetails: GetLaborBankDetails,
    familyDetails: GetLaborFamilyDetails[],
    workExperience: GetLaborWorkExperience[],
    preferredWorkingLocation: string,
    preferredWorkType: string,
    referenceName: string,
    referencePosition: string,
    referenceMobileNumber: string
}

export type PostTempLabor = {
    laborName: string,
    contactNo: string,
}

export type GetTempLabor = {id: string} & PostTempLabor;