import { PostOffices } from "@prime-fresh/admin_api";
import { initValAddress } from "./address.initial-value";

export const OfficeInitialValues: PostOffices = {
    name: null,
    address: initValAddress,
    cFirstName: null,
    cMiddleName: null,
    cLastName: null,
    contactNumber: null,
    officeEmail: null,
    notes: null,
}