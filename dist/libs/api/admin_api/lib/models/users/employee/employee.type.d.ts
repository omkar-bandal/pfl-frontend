import { Address } from '../../../../../../common_api/src/index.ts';

export type EmployeeStatus = 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
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
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    username: string | null;
    primaryMobNo: string | null;
    secondaryMobNo: string | null;
    primaryEmail: string | null;
    secondaryEmail: string | null;
    residentialAddress: Address;
    permanentAddress: Address;
    companyName: string | null;
    department: string | null;
    joiningDate: string | null;
    designation: string | null;
    cugNo: string | null;
    workEmail: string | null;
    joiningLocation: string | null;
    currentWorkLocation: string | null;
    otherWorkLocationInput: string | null;
    accessLocation: string[];
    permissions: IPermission[];
    status?: EmployeeStatus;
}
