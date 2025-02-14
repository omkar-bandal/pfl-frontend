import { Address, GetAddress } from "@prime-fresh/common_api";
import { GetRole } from "./role.type";

export type GetEmployee = {
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
    address: GetAddress;
    joiningDate: string;
    relocationDate: string;
    relocationPlace: string;
    recommendedBy: string;
    employeeStatus: string;
    status: string;
    role: GetRole;
    reportingAuthorityFunctional: string;
    reportingAuthorityAdministrative: string;
  }
export type PostEmployee = {
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
    employeeStatus: string;
    status: string;
    role: string;
    reportingAuthorityFunctional: string;
    reportingAuthorityAdministrative: string;
  }