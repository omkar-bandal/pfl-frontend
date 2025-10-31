import { Address } from '../../shared';

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
