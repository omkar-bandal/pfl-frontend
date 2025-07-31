import { RootState } from "../store.admin";
import { GetVendor, PostVendor } from "@prime-fresh/admin_api";
import { VendorPartialData } from "@prime-fresh/common_api";
type vendorDataState = {
    allVendors: GetVendor[] | [];
    allVendorssPartialData: VendorPartialData[];
    selectedVendorPartialData: VendorPartialData | null | undefined;
    vendorFormPreview: PostVendor | null;
};
export declare const setVendorData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetVendor[], "vendorData/setVendorData">, setAllVendorsPartialData: import("@reduxjs/toolkit").ActionCreatorWithPayload<VendorPartialData[], "vendorData/setAllVendorsPartialData">, setSelectedVendorPartialData: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<VendorPartialData | null | undefined, "vendorData/setSelectedVendorPartialData">, setVendorFormPreview: import("@reduxjs/toolkit").ActionCreatorWithPayload<PostVendor, "vendorData/setVendorFormPreview">;
export declare const vendorsDataStates: (state: RootState) => vendorDataState;
export declare const vendorDataReducer: import("@reduxjs/toolkit").Reducer<vendorDataState>;
export {};
