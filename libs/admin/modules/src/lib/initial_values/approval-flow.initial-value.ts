import { IApprovalFlow, IApprover, IEmployeeReplacementReq } from '@prime-fresh/admin_api';

export const approverInitialValue: IApprover = {
  hierarchy: null,
  minAmtCanApprove: null,
  maxAmtCanApprove: null,
  users: null,
};
export const approvalFlowInitialValue: Omit<IApprovalFlow, 'id'> = {
  type: null,
  creator: null,
  verifiers: null,
  approvers: {
    firstApprover: approverInitialValue,
    secondApprover: approverInitialValue,
    thirdApprover: approverInitialValue,
    fourthApprover: approverInitialValue,
    fifthApprover: approverInitialValue,
    sixthApprover: approverInitialValue,
  },
  finalizers: {
    firstFinalizers: null,
    secondFinalizers: null,
  },
};

export const employeeReplacementInitialValue: IEmployeeReplacementReq = {
  oldUserId: null,
  newUserId: null,
};
