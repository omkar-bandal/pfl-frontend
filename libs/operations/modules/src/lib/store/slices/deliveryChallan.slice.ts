import { IDeliveryChallanTypeCustomer, IDeliveryChallanTypeStockTransfer } from '@prime-fresh/services';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.operations";

type deliveryChallanState = {
    previewDCTypeCustomer: IDeliveryChallanTypeCustomer | undefined;
    previewDCTypeStockTransfer: IDeliveryChallanTypeStockTransfer | undefined;
}
const initialState : deliveryChallanState = {
    previewDCTypeCustomer: undefined,
    previewDCTypeStockTransfer: undefined
}

const deliveryChallanSlice = createSlice({
    name: "delivery_challan",
    initialState,
    reducers: {
        setPreviewDCTypeCustomer: (state, action: PayloadAction<IDeliveryChallanTypeCustomer | undefined>) => {
            state.previewDCTypeCustomer = action.payload;
        },

        setPreviewDCTypeStockTransfer: (state, action: PayloadAction<IDeliveryChallanTypeStockTransfer | undefined>) => {
            state.previewDCTypeStockTransfer = action.payload;
        }
    }
})
export const { setPreviewDCTypeCustomer, setPreviewDCTypeStockTransfer } = deliveryChallanSlice.actions;

export const dcState = (state: RootState) => state.delivery_challan;

export const deliveryChallanReducer = deliveryChallanSlice.reducer;