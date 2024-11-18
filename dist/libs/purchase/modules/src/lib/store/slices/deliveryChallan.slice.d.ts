import { GetDeliveryChallan, PostDeliveryChallan } from "@prime-fresh/purchase_api";
import { RootState } from "../store.purchase";
type deliveryChallanState = {
    dcs: GetDeliveryChallan[];
    selectedDC: GetDeliveryChallan | undefined;
    previewDC: PostDeliveryChallan | GetDeliveryChallan | undefined;
};
export declare const setDCs: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetDeliveryChallan[], "delivery_challan/setDCs">, setPreviewDC: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<PostDeliveryChallan | GetDeliveryChallan | undefined, "delivery_challan/setPreviewDC">, setSelectedDC: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetDeliveryChallan | undefined, "delivery_challan/setSelectedDC">;
export declare const dcState: (state: RootState) => deliveryChallanState;
export declare const deliveryChallanReducer: import("@reduxjs/toolkit").Reducer<deliveryChallanState>;
export {};
