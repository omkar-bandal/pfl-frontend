export type DocumentStatus = "hold" | "VERIFIED" | "approved" | "FINALIZING" | "COMPLETE" | "reject" | "query";

export interface ApprovalSummaryBlock {
  name: string,
  status: DocumentStatus,
  reason?: string,
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
