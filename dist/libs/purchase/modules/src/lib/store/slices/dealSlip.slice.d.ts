import { GetDealSlip } from "@prime-fresh/purchase_api";
import { RootState } from "../store.purchase";
type dealSlipDataState = {
    dealSlip: GetDealSlip[];
    selectedDealSlip: GetDealSlip | undefined;
};
export declare const setDealSlipData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetDealSlip[], "dealSlipData/setDealSlipData">, setSelectedDealSlip: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetDealSlip | undefined, "dealSlipData/setSelectedDealSlip">;
export declare const dealSlipDataState: (state: RootState) => dealSlipDataState;
export declare const dealSlipDataReducer: import("@reduxjs/toolkit").Reducer<dealSlipDataState>;
export {};
