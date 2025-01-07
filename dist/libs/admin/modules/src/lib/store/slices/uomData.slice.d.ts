import { RootState } from "../store.admin";
import { GetUOM, GetUOMConversionMatrix } from "@prime-fresh/admin_api";
type UOMDataState = {
    allUOMs: GetUOM[];
    selectedUOM: GetUOM | undefined;
    allUOMConvMat: GetUOMConversionMatrix[];
    selectedUOMConvMat: GetUOMConversionMatrix | undefined;
};
export declare const setUOMs: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetUOM[], "uomData/setUOMs">, setSelectedUOM: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetUOM | undefined, "uomData/setSelectedUOM">, setUOMConvMat: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetUOMConversionMatrix[], "uomData/setUOMConvMat">, setSelectedUOMConvMat: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetUOMConversionMatrix | undefined, "uomData/setSelectedUOMConvMat">;
export declare const uomsDataState: (state: RootState) => UOMDataState;
export declare const uomDataReducer: import("@reduxjs/toolkit").Reducer<UOMDataState>;
export {};
