import { PostBranches } from '@prime-fresh/services';
import { initValAddress } from './address.initial-value';

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