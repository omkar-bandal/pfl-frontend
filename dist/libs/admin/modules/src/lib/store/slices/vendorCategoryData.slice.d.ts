import { GetVendorCategory } from "@prime-fresh/admin_api";
import { RootState } from "../store.admin";
type VendorCategoryDataState = {
    allVendorCategories: GetVendorCategory[];
    selectedVendorCategory: GetVendorCategory | null;
};
export declare const setAllVendorCategories: import("@reduxjs/toolkit").ActionCreatorWithPayload<[] | GetVendorCategory[], "vendorCategoryData/setAllVendorCategories">, setSelectedVendorCategory: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetVendorCategory | null, "vendorCategoryData/setSelectedVendorCategory">;
export declare const vendorCategoryState: (state: RootState) => VendorCategoryDataState;
export declare const vendorCategoryDataReducer: import("@reduxjs/toolkit").Reducer<VendorCategoryDataState>;
export {};
