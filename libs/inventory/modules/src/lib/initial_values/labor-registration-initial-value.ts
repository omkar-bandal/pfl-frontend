import { PostLaborBankDetails, PostLaborFamilyDetails, PostLaborRegistration, PostLaborWorkExperience } from "@prime-fresh/inventory_api";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { addressInitialValue } from "@prime-fresh/shared/utils";

export const laborBankDetailsInitialValue: PostLaborBankDetails = {
    bankName: "",
    branchName: "",
    accountNumber: "",
    ifscCode: "",
    aadharNo: "",
    panNo: "",
    electionCardNo: ""
}
export const laborFamilyDetailsInitialValue: PostLaborFamilyDetails = {
    relation: "",
    nameAsPerAadhar: "",
    mobileNumber: "",
    age: 0
}
export const laborWorkExperienceInitialValue: PostLaborWorkExperience = {
    previousFarmOrWorkPlace: "",
    workType: "",
    workLocation: "",
    workDuration: 0,
    wagesPerDayOrMonth: 0
}

export const laborRegistrationInitialValue: PostLaborRegistration = {
    representativeName: "",
    siteName: "",
    laborType: "",
    laborName: "",
    nameAsPerAadhar: "",
    nameAsPerBank: "",
    presentAddress: addressInitialValue,
    permanentAddress: addressInitialValue,
    mobileNumber: "",
    emergencyContactNo: "",
    emergencyContactName: "",
    relationWithEmergencyContact: "",
    healthIssues: "",
    birthDate: "",
    gender: "",
    bloodGroup: "",
    educationQualification: "",
    pfUanNo: "",
    maritalStatus: "",
    email: "",
    bankDetails: laborBankDetailsInitialValue,
    familyDetails: [laborFamilyDetailsInitialValue],
    workExperience: [laborWorkExperienceInitialValue],
    preferredWorkingLocation: "",
    preferredWorkType: "",
    referenceName: "",
    referencePosition: "",
    referenceMobileNumber: ""
}