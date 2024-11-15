import { RootState } from "../store.purchase";
import { GetRFPA, PostRFPA } from "@prime-fresh/purchase_api";
type rfpaDataState = {
    rfpa: GetRFPA[];
    selectedRFPA: GetRFPA | undefined;
    previewRFPA: PostRFPA | undefined;
};
export declare const setRFPAData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetRFPA[], "rfpaData/setRFPAData">, setSelectedRFPA: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetRFPA | undefined, "rfpaData/setSelectedRFPA">, setPreviewRFPA: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<PostRFPA | undefined, "rfpaData/setPreviewRFPA">;
export declare const rfpaDataState: (state: RootState) => rfpaDataState;
export declare const rfpaDataReducer: import("@reduxjs/toolkit").Reducer<rfpaDataState>;
export {};
