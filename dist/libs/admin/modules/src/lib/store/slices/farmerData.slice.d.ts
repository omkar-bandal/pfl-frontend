import { RootState } from "../store.admin";
import { GetAllFilteredFarmerData, GetFarmer } from "@prime-fresh/admin_api";
type farmerDataState = {
    allFarmers: GetFarmer[];
    allFarmersFiltered: GetAllFilteredFarmerData[];
    selectedFarmer: GetAllFilteredFarmerData | null | undefined;
};
export declare const setFarmerData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetFarmer[], "farmerData/setFarmerData">, setFilteredFarmerData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetAllFilteredFarmerData[], "farmerData/setFilteredFarmerData">, setSelectedFarmer: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetAllFilteredFarmerData | null | undefined, "farmerData/setSelectedFarmer">;
export declare const farmersDataState: (state: RootState) => farmerDataState;
export declare const farmerDataReducer: import("@reduxjs/toolkit").Reducer<farmerDataState>;
export {};
