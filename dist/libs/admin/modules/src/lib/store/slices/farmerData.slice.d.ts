import { RootState } from "../store.admin";
import { GetFarmer } from "@prime-fresh/admin_api";
type farmerDataState = {
    allFarmers: GetFarmer[];
    selectedFarmer: GetFarmer | null | undefined;
};
export declare const setFarmerData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetFarmer[], "farmerData/setFarmerData">, setSelectedFarmer: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetFarmer | null | undefined, "farmerData/setSelectedFarmer">;
export declare const farmersDataState: (state: RootState) => farmerDataState;
export declare const farmerDataReducer: import("@reduxjs/toolkit").Reducer<farmerDataState>;
export {};
