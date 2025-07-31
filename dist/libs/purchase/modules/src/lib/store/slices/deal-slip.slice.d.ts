import { IDealSlip } from "@prime-fresh/purchase_api";
import { RootState } from "../store.purchase";
type dealSlipDataState = {
    dealSlipFormPreview: Omit<IDealSlip, 'id'> | null;
};
export declare const setDealSlipFormPreview: import("@reduxjs/toolkit").ActionCreatorWithPayload<Omit<IDealSlip, "id"> | null, "dealSlipData/setDealSlipFormPreview">;
export declare const dealSlipDataState: (state: RootState) => dealSlipDataState;
export declare const dealSlipDataReducer: import("@reduxjs/toolkit").Reducer<dealSlipDataState>;
export {};
