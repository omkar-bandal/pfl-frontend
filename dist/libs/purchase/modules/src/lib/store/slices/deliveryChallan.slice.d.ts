import { IDeliveryChallanTypeCustomer, IDeliveryChallanTypeStockTransfer } from "@prime-fresh/purchase_api";
import { RootState } from "../store.purchase";
type deliveryChallanState = {
    previewDCTypeCustomer: IDeliveryChallanTypeCustomer | undefined;
    previewDCTypeStockTransfer: IDeliveryChallanTypeStockTransfer | undefined;
};
export declare const setPreviewDCTypeCustomer: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<IDeliveryChallanTypeCustomer | undefined, "delivery_challan/setPreviewDCTypeCustomer">, setPreviewDCTypeStockTransfer: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<IDeliveryChallanTypeStockTransfer | undefined, "delivery_challan/setPreviewDCTypeStockTransfer">;
export declare const dcState: (state: RootState) => deliveryChallanState;
export declare const deliveryChallanReducer: import("@reduxjs/toolkit").Reducer<deliveryChallanState>;
export {};
