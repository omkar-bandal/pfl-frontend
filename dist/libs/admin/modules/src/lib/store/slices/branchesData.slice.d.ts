import { RootState } from "../store.admin";
import { BranchType, GetBranches } from "@prime-fresh/admin_api";
type BranchesDataState = {
    branches: GetBranches[] | undefined;
    BranchType: BranchType;
    selectedBranches: GetBranches | undefined;
};
export declare const setBranchesData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetBranches[], "branchesData/setBranchesData">, setBranchType: import("@reduxjs/toolkit").ActionCreatorWithPayload<BranchType, "branchesData/setBranchType">;
export declare const branchesDataState: (state: RootState) => BranchesDataState;
export declare const branchesDataReducer: import("@reduxjs/toolkit").Reducer<BranchesDataState>;
export {};
