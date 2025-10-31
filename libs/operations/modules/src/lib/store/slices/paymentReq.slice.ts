import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.operations";
import { GetPaymentRequest, PostPaymentRequest } from '@prime-fresh/services';

type paymentReqState = {
    paymentReq: GetPaymentRequest[]; 
    selectedPaymentReq: GetPaymentRequest | undefined;
    previewPaymentReq: PostPaymentRequest | undefined;
}
const initialState : paymentReqState = {
   paymentReq: [],
   selectedPaymentReq: undefined,
   previewPaymentReq: undefined,
}

const paymentReqSlice = createSlice({
    name: "payment_request",
    initialState,
    reducers: {
        setPaymentReqs: (state, action: PayloadAction<GetPaymentRequest[]>) =>{
            state.paymentReq = action.payload;
        },
        setSelectedPaymentReq: (state, action: PayloadAction<GetPaymentRequest | undefined>) => {
            state.selectedPaymentReq = action.payload;
        },
        setPreviewPaymentReq: (state, action: PayloadAction<PostPaymentRequest | undefined>) => {
            state.previewPaymentReq = action.payload;
        }
    }
})
export const {setPaymentReqs, setPreviewPaymentReq, setSelectedPaymentReq} = paymentReqSlice.actions;

export const paymentReqState = (state: RootState) => state.payment_request;

export const paymentReqReducer = paymentReqSlice.reducer;