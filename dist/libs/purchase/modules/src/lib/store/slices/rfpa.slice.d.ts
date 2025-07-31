import { RootState } from "../store.purchase";
import { IRFPA } from "@prime-fresh/purchase_api";
type rfpaDataState = {
    rfpaFormPreview: Omit<IRFPA, 'id'> | undefined;
};
export declare const setRFPAFormPreview: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Omit<IRFPA, "id"> | undefined, "rfpaData/setRFPAFormPreview">;
export declare const rfpaDataState: (state: RootState) => rfpaDataState;
export declare const rfpaDataReducer: import("@reduxjs/toolkit").Reducer<rfpaDataState>;
export {};
