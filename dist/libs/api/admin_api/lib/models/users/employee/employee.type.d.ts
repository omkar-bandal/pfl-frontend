import { Address } from '../../../../../../common_api/src/index.ts';

export type GetEmployee = {
    id: string;
    createdAt: string;
    updatedAt: string;
    employeeId: string;
    firstName: string;
    lastName: string;
    username: string;
    phoneNumber: string;
    password: string | null;
    email: string;
    selectDepartment: string;
    level: string | null;
    joiningDate: string;
    relocationDate: string;
    relocationPlace: string;
    address: Address;
    reportingManager: string;
};
export type PostEmployee = {
    firstName: string | null;
    lastName: string | null;
    username: string | null;
    phoneNumber: string | null;
    email: string | null;
    password: string | null;
    selectDepartment: string | null;
    level: string | null;
    joiningDate: string | null;
    relocationDate: string | null;
    relocationPlace: string | null;
    address: Address;
    reportingManager: string | null;
};
