export type DocumentStatus = "hold" | "VERIFIED" | "approved" | "COMPLETE" | "REJECT" | "query";

export interface ApprovalSummaryBlock {
  name: string,
  status: DocumentStatus
}
export interface ApprovalSummany {
  verified?: ApprovalSummaryBlock,
  firstApproved: ApprovalSummaryBlock,
  secondApproved?: ApprovalSummaryBlock,
  thirdApproved?: ApprovalSummaryBlock,
  firstFinalized?: ApprovalSummaryBlock,
  secondFinalized?: ApprovalSummaryBlock
}

export interface ApprovalRequest {
  status: DocumentStatus;
  reason: string;
}
