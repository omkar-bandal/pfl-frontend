import { GetDeliveryChallan, PostDeliveryChallan } from "@prime-fresh/purchase_api"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.purchase";

type deliveryChallanState = {
    dcs: GetDeliveryChallan[];
    selectedDC: GetDeliveryChallan | undefined;
    previewDC: PostDeliveryChallan | GetDeliveryChallan | undefined;
}
const initialState : deliveryChallanState = {
    dcs: [],
    selectedDC: undefined,
    previewDC: undefined,
}

export const deliveryChallanSlice = createSlice({
    name: "delivery_challan",
    initialState,
    reducers: {
        setDCs: (state, action: PayloadAction<GetDeliveryChallan[]>) =>{
            state.dcs = action.payload;
        },
        setSelectedDC: (state, action: PayloadAction<GetDeliveryChallan | undefined>) => {
            state.selectedDC = action.payload;
        },
        setPreviewDC: (state, action: PayloadAction<PostDeliveryChallan | GetDeliveryChallan | undefined>) => {
            state.previewDC = action.payload;
        }
    }
})
export const { setDCs, setPreviewDC, setSelectedDC } = deliveryChallanSlice.actions;

export const dcState = (state: RootState) => state.delivery_challan;

export const deliveryChallanReducer = deliveryChallanSlice.reducer;