import { Address } from '@prime-fresh/common_api';

export type Permissions = {
  documentDefinition: string | null;
  canCreate: boolean;
  canView: boolean;
  canEdit: boolean;
  canDelete: boolean;
  canDownload: boolean;
};

export type GetPermissions = {
  documentDefinition: {
    id: string;
    name: string;
    uniqueKey: string;
    documentType: string;
  };
  canCreate: boolean;
  canView: boolean;
  canEdit: boolean;
  canDelete: boolean;
  canDownload: boolean;
};

export type ReportingManagers = {
  level: string | null;
  reportingTo: {
    id: string | null;
  }[];
};

export type PostEmployee = {
  firstName: string | null;
  middleName: string | null;
  lastName: string | null;
  username: string | null;
  primaryMobNo: string | null;
  secondaryMobNo: string | null;
  primaryEmail: string | null;
  secondaryEmail: string | null;
  companyName: string | null;
  joiningDate: string | null;
  designation: string | null;
  cugNo: string | null;
  workEmail: string | null;
  currentLevel: string | null;
  joiningLocation: string | null;
  currentWorkLocation: string | null;
  otherWorkLocationInput: string | null;
  accessLocation: { id: string }[];
  residentialAddress: Address;
  permanentAddress: Address;
  reportingManagers: ReportingManagers[];
  permissions: Permissions[];
};

export type GetEmployee = {
  id: string;
  firstName: string | null;
  middleName: string | null;
  lastName: string | null;
  username: string | null;
  password: string | null;
  primaryMobNo: string | null;
  secondaryMobNo: string | null;
  primaryEmail: string | null;
  secondaryEmail: string | null;
  companyName: { id: string; companyName: string } | null;
  joiningDate: string | null;
  designation: string | null;
  cugNo: string | null;
  workEmail: string | null;
  currentLevel: { id: string; name: string; hierarchy: number } | null;
  joiningLocation: string | null;
  currentWorkLocation: string | null;
  otherWorkLocationInput: string | null;
  accessLocation: { id: string }[];
  residentialAddress: Address;
  permanentAddress: Address;
  reportingManagers: {
    level: {
      id: string;
      name: string;
      hierarchy: number;
    };
    reportingTo: {
      id: string;
      firstName: string;
      middleName: string;
      lastName: string;
      employeeId: string;
      status: string;
    }[];
  }[];
  permissions: GetPermissions[];
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
};
