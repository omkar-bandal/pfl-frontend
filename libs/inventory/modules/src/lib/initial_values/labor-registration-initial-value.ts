// eslint-disable-next-line @nx/enforce-module-boundaries
import { PostLaborBankDetails, PostLaborFamilyDetails, PostLaborRegistration, PostLaborWorkExperience } from "@prime-fresh/inventory_api";
import { initValAddress } from "@prime-fresh/shared/modules";

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
    presentAddress: initValAddress,
    permanentAddress: initValAddress,
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