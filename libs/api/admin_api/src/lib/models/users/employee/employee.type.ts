import { Address } from '@prime-fresh/common_api';

export type EmployeeStatus = 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';

export type EmployeeRoles = 'admin' | 'employee' | 'verifier' | 'approver' |'finalizer';

export interface IPermission {
  documentDefinition: string | null;
  canCreate: boolean;
  canView: boolean;
  canEdit: boolean;
  canDelete: boolean;
  canDownload: boolean;
}
export interface IEmployee {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  employeeId?: string | null;
  password?: string | null;

  //Personal Info
  firstName: string | null;
  middleName: string | null;
  lastName: string | null;
  username: string | null;
  primaryMobNo: string | null;
  secondaryMobNo: string | null;
  primaryEmail: string | null;
  secondaryEmail: string | null;
  residentialAddress: Address;
  isAddressSame: boolean;
  permanentAddress: Address;

  //Office Info
  companyName: string[];
  department: string [];
  joiningDate: string | null;
  designation: string | null;
  cugNo: string | null;
  workEmail: string | null;
  joiningLocation: string | null;
  currentWorkLocation: string | null;
  otherWorkLocationInput: string | null;
  accessLocation: string[];
  roles: string[];

  //Permission Config
  permissions: IPermission[];

  //Employee Status
  status?: EmployeeStatus;
}

// export interface ICreatePermissions extends IBasePermission {
//   documentDefinition: string | null;
// };

// export interface IGetPermissions extends IBasePermission {
//   documentDefinition: {
//     id: string;
//     name: string;
//     uniqueKey: string;
//     documentType: string;
//   };
// };

// export type ReportingManagers = {
//   level: string | null;
//   reportingTo: {
//     id: string | null;
//   }[];
// };

// currentLevel: { id: string; name: string; hierarchy: number } | null;
// reportingManagers: {
//   level: {
//     id: string;
//     name: string;
//     hierarchy: number;
//   };
//   reportingTo: {
//     id: string;
//     firstName: string;
//     middleName: string;
//     lastName: string;
//     employeeId: string;
//     status: string;
//   }[];
// }[];
