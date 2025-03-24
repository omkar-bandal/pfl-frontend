import { PostEmployee } from "@prime-fresh/admin_api";
import { initValAddress } from "./address.initial-value";

export const initValEmployee: PostEmployee = {
    firstName: null,
    lastName: null,
    username: null,
    phoneNumber: null,
    email: null,
    password: null,
    address: initValAddress,
    selectDepartment: null,
    level: null,
    joiningDate: null,
    reportingManager: null,
  }