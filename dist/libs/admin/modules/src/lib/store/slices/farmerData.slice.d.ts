import { RootState } from '../store.admin';
import { GetFarmer, PostFarmer } from '@prime-fresh/admin_api';
import { FarmerPartialData } from '@prime-fresh/common_api';
type farmerDataState = {
    allFarmers: GetFarmer[];
    allFarmersPartialData: FarmerPartialData[];
    selectedFarmerPartialData: FarmerPartialData | null | undefined;
    farmerFormPreview: PostFarmer | null;
};
export declare const setFarmerData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetFarmer[], "farmerData/setFarmerData">, setAllFarmersPartialData: import("@reduxjs/toolkit").ActionCreatorWithPayload<FarmerPartialData[], "farmerData/setAllFarmersPartialData">, setSelectedFarmerPartialData: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<FarmerPartialData | null | undefined, "farmerData/setSelectedFarmerPartialData">, setFarmerFormPreview: import("@reduxjs/toolkit").ActionCreatorWithPayload<PostFarmer, "farmerData/setFarmerFormPreview">;
export declare const farmersDataStates: (state: RootState) => farmerDataState;
export declare const farmerDataReducer: import("@reduxjs/toolkit").Reducer<farmerDataState>;
export {};
