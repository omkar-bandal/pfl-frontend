import { RootState } from "../store.admin";
import { BranchType, GetBranches, PostBranches } from "@prime-fresh/admin_api";
type BranchesDataState = {
    branches: GetBranches[] | undefined;
    BranchType: BranchType;
    selectedBranches: GetBranches | undefined;
    branchFormPreview: PostBranches | null;
};
export declare const setBranchesData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetBranches[], "branchesData/setBranchesData">, setBranchType: import("@reduxjs/toolkit").ActionCreatorWithPayload<BranchType, "branchesData/setBranchType">, setBranchFormPreview: import("@reduxjs/toolkit").ActionCreatorWithPayload<PostBranches, "branchesData/setBranchFormPreview">;
export declare const branchesDataStates: (state: RootState) => BranchesDataState;
export declare const branchesDataReducer: import("@reduxjs/toolkit").Reducer<BranchesDataState>;
export {};
