import { IGRN } from '@prime-fresh/purchase_api';
import { RootState } from '../store.purchase';
type grnDataState = {
    grn: IGRN[];
    selectedGRN: IGRN | undefined;
    grnFormPreview: Omit<IGRN, 'id'> | undefined;
    grnActionType: 'approve' | 'reject' | null;
    reasonForGRNAction: string;
};
export declare const setGRNData: import("@reduxjs/toolkit").ActionCreatorWithPayload<IGRN[], "grnData/setGRNData">, setSelectedGRN: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<IGRN | undefined, "grnData/setSelectedGRN">, setGRNFormPreview: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Omit<IGRN, "id"> | undefined, "grnData/setGRNFormPreview">, setGRNActionType: import("@reduxjs/toolkit").ActionCreatorWithPayload<"approve" | "reject" | null, "grnData/setGRNActionType">, setReasonForGRNAction: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "grnData/setReasonForGRNAction">;
export declare const grnDataState: (state: RootState) => grnDataState;
export declare const grnDataReducer: import("@reduxjs/toolkit").Reducer<grnDataState>;
export {};
