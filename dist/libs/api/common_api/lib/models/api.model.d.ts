export interface ApiBaseState<T> {
    data: T | null;
    allRecords: number;
    totalPages: number;
    page: number;
}
export type ErrorModel = Error;
export type ResultModel = {
    status: string;
    message: string;
};
export interface ApprovalModel {
    action: 'approve' | 'reject' | 'escalate' | null;
    reason: string | null;
    documentdef?: string | null;
}
export interface ApprovalModelState extends ApprovalModel {
    documentId: string | null;
}
