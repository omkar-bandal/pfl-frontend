import { initValAddress } from '@prime-fresh/shared/modules';
import { ILaborBankDetails, ILaborFamilyDetails, ILaborRegistration, ILaborWorkExperience } from '@prime-fresh/services';

export const laborBankDetailsInitialValue: ILaborBankDetails = {
  bankName: null,
  branchName: null,
  accountNumber: null,
  ifscCode: null,
  aadharNo: null,
  panNo: null,
  electionCardNo: null,
};
export const laborFamilyDetailsInitialValue: ILaborFamilyDetails = {
  relation: null,
  nameAsPerAadhar: null,
  mobileNumber: null,
  age: null,
};
export const laborWorkExperienceInitialValue: ILaborWorkExperience = {
  previousFarmOrWorkPlace: null,
  workType: null,
  workLocation: null,
  workDuration: null,
  wagesPerDayOrMonth: null,
};

export const laborRegistrationInitialValue: Omit<ILaborRegistration, 'id'> = {
  representativeName: null,
  siteName: null,
  laborType: null,
  laborName: null,
  nameAsPerAadhar: null,
  nameAsPerBank: null,
  presentAddress: initValAddress,
  permanentAddress: initValAddress,
  mobileNumber: null,
  emergencyContactNo: null,
  emergencyContactName: null,
  relationWithEmergencyContact: null,
  healthIssues: null,
  birthDate: null,
  gender: null,
  bloodGroup: null,
  educationQualification: null,
  pfUanNo: null,
  maritalStatus: null,
  email: null,
  bankDetails: laborBankDetailsInitialValue,
  familyDetails: [laborFamilyDetailsInitialValue],
  workExperience: [laborWorkExperienceInitialValue],
  preferredWorkingLocation: null,
  preferredWorkType: null,
  referenceName: null,
  referencePosition: null,
  referenceMobileNumber: null,
};
