import { GetMCvoucher, PostMCvoucher } from "@prime-fresh/purchase_api"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.purchase";

type mcVoucherState = {
    mcVouchers: GetMCvoucher[];
    selectedMCVoucher: GetMCvoucher | undefined;
    previewMCVoucher: PostMCvoucher | undefined;
}
const initialState : mcVoucherState = {
    mcVouchers: [],
    selectedMCVoucher: undefined,
    previewMCVoucher: undefined,
}

const mcVoucherSlice = createSlice({
    name: "mc_voucher",
    initialState,
    reducers: {
        setMCVouchers: (state, action: PayloadAction<GetMCvoucher[]>) =>{
            state.mcVouchers = action.payload;
        },
        setSelectedMCVoucher: (state, action: PayloadAction<GetMCvoucher | undefined>) => {
            state.selectedMCVoucher = action.payload;
        },
        setPreviewMCVoucher: (state, action: PayloadAction<PostMCvoucher | undefined>) => {
            state.previewMCVoucher = action.payload;
        }
    }
})
export const {setMCVouchers, setPreviewMCVoucher, setSelectedMCVoucher } = mcVoucherSlice.actions;

export const mcVoucherState = (state: RootState) => state.mc_voucher;

export const mcVoucherReducer = mcVoucherSlice.reducer;