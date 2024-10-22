import { Address } from "./address.interface";
import { EmployeeStatus } from "./employeeStatus.interface";
import { Status } from "./status.interface";

export interface Role{
  id: string;
  name: string;
  roleCode: string;
}

export interface Employee{
  id: string;
  employeeCode: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
  designation: string;
  username: string;
  phoneNumber: string;
  cugNo: string;
  email: string;
  companyEmail: string;
  address: Address;
  joiningDate: string;
  relocationDate: string;
  relocationPlace: string;
  recommendedBy: string;
  employeeStatus: EmployeeStatus;
  status: Status;
  role: Role;
  reportingAuthorityFunctional: string;
  reportingAuthorityAdministrative: string;
}

export interface EmployeeReq{
  users: Employee[]
}

export interface EmployeeRes{
  message: string;
  status: string;
}

export interface EmployeeCredential{
  employeeCode: string;
  password: string;
}