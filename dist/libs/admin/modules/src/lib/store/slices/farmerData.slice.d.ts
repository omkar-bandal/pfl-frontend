import { RootState } from "../store.admin";
import { GetFarmer } from "@prime-fresh/admin_api";
import { FarmerPartialData } from "@prime-fresh/common_api";
type farmerDataState = {
    allFarmers: GetFarmer[];
    allFarmersPartialData: FarmerPartialData[];
    selectedFarmerPartialData: FarmerPartialData | null | undefined;
};
export declare const setFarmerData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetFarmer[], "farmerData/setFarmerData">, setAllFarmersPartialData: import("@reduxjs/toolkit").ActionCreatorWithPayload<FarmerPartialData[], "farmerData/setAllFarmersPartialData">, setSelectedFarmerPartialData: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<FarmerPartialData | null | undefined, "farmerData/setSelectedFarmerPartialData">;
export declare const farmersDataState: (state: RootState) => farmerDataState;
export declare const farmerDataReducer: import("@reduxjs/toolkit").Reducer<farmerDataState>;
export {};
