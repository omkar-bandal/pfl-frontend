export type IDocumentType = 'Procurement' | 'Sale' | 'Operation';

export interface IApprover {
  hierarchy: number | null;
  minAmtCanApprove: number | null;
  maxAmtCanApprove: number | null;
  users: string[] | null;
}

export interface IApprovalFlow {
  id: string;
  type: IDocumentType | null;
  creator: string | null;
  verifiers: string[] | null;
  approvers: {
    firstApprover: IApprover | null;
    secondApprover: IApprover | null;
    thirdApprover: IApprover | null;
    fourthApprover: IApprover | null;
    fifthApprover: IApprover | null;
    sixthApprover: IApprover | null;
  };
  finalizers: {
    firstFinalizers: string[] | null;
    secondFinalizers: string[] | null;
  };
}

export interface IEmployeeReplacementReq {
  oldUserId: string | null;
  newUserId: string | null;
}
