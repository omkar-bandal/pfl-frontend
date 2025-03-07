import { PostBranches } from "@prime-fresh/admin_api";
import {initValAddress} from "@prime-fresh/shared/modules";

export const BranchesInitialValues: PostBranches = {
    name:  null,
    prefix:  null,
    address: initValAddress,
    contactNumber:  null,
    cFirstName:  null,
    cMiddleName:  null,
    cLastName:  null,
    notes:  null,
    totalCapacity: 0,
    currentCapacity: 0,
    balanceCapacity: 0,
}