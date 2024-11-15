import { RootState } from "../store.admin";
import { GetOffices, OfficeType } from "@prime-fresh/admin_api";
type OfficesDataState = {
    offices: GetOffices[];
    officeType: OfficeType;
    selectedOffices: GetOffices | undefined;
};
export declare const setOfficesData: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetOffices[], "officesData/setOfficesData">, setOfficeType: import("@reduxjs/toolkit").ActionCreatorWithPayload<OfficeType, "officesData/setOfficeType">;
export declare const officesDataState: (state: RootState) => OfficesDataState;
export declare const officesDataReducer: import("@reduxjs/toolkit").Reducer<OfficesDataState>;
export {};
