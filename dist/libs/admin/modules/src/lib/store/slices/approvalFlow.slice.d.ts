import { RootState } from "../store.admin";
type ApprovalFlowStateType = {
    showReplaceForm: boolean;
};
export declare const setShowReplaceForm: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"approvalFlow/setShowReplaceForm">;
export declare const approvalFlowStates: (state: RootState) => ApprovalFlowStateType;
export declare const approvalFlowReducer: import("@reduxjs/toolkit").Reducer<ApprovalFlowStateType>;
export {};
