import { RootState } from "../store.purchase";
import { GetPaymentRequest, PostPaymentRequest } from "@prime-fresh/purchase_api";
type paymentReqState = {
    paymentReq: GetPaymentRequest[];
    selectedPaymentReq: GetPaymentRequest | undefined;
    previewPaymentReq: PostPaymentRequest | undefined;
};
export declare const setPaymentReqs: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetPaymentRequest[], "payment_request/setPaymentReqs">, setPreviewPaymentReq: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<PostPaymentRequest | undefined, "payment_request/setPreviewPaymentReq">, setSelectedPaymentReq: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetPaymentRequest | undefined, "payment_request/setSelectedPaymentReq">;
export declare const paymentReqState: (state: RootState) => paymentReqState;
export declare const paymentReqReducer: import("@reduxjs/toolkit").Reducer<paymentReqState>;
export {};
