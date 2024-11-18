import { GetGRN, PostGRN } from "@prime-fresh/purchase_api";
import { RootState } from "../store.purchase";
type grnDataState = {
    grn: GetGRN[];
    selectedGRN: GetGRN | undefined;
    previewGRN: PostGRN | GetGRN | undefined;
    subTotalAmt: number;
    totalAmt: number;
    totAmtWords: string;
};
export declare const setGRNData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetGRN[], "grnData/setGRNData">, setSelectedGRN: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetGRN | undefined, "grnData/setSelectedGRN">, setPreviewGRN: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<PostGRN | GetGRN | undefined, "grnData/setPreviewGRN">, setSubTotalAmt: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "grnData/setSubTotalAmt">, setTotalAmt: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "grnData/setTotalAmt">, setTotAmtWords: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "grnData/setTotAmtWords">;
export declare const grnDataState: (state: RootState) => grnDataState;
export declare const grnDataReducer: import("@reduxjs/toolkit").Reducer<grnDataState>;
export {};
