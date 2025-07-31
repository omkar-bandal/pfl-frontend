import { RootState } from "../store.admin";
import { GetOffices, OfficeType, PostOffices } from "@prime-fresh/admin_api";
type OfficesDataState = {
    offices: GetOffices[];
    officeType: OfficeType;
    selectedOffices: GetOffices | undefined;
    officeFormPreview: PostOffices | null;
};
export declare const setOfficesData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetOffices[], "officesData/setOfficesData">, setOfficeType: import("@reduxjs/toolkit").ActionCreatorWithPayload<OfficeType, "officesData/setOfficeType">, setOfficeFormPreview: import("@reduxjs/toolkit").ActionCreatorWithPayload<PostOffices, "officesData/setOfficeFormPreview">;
export declare const officesDataStates: (state: RootState) => OfficesDataState;
export declare const officesDataReducer: import("@reduxjs/toolkit").Reducer<OfficesDataState>;
export {};
