import { GetLPvoucher, PostLPvoucher } from "@prime-fresh/purchase_api"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.purchase";

type lpVoucherState = {
    lpVouchers: GetLPvoucher[];
    selectedLPVoucher: GetLPvoucher | undefined;
    previewLPVoucher: PostLPvoucher | GetLPvoucher | undefined;
}
const initialState : lpVoucherState = {
    lpVouchers: [],
    selectedLPVoucher: undefined,
    previewLPVoucher: undefined,
}

const lpVoucherSlice = createSlice({
    name: "lp_voucher",
    initialState,
    reducers: {
        setLPVouchers: (state, action: PayloadAction<GetLPvoucher[]>) =>{
            state.lpVouchers = action.payload;
        },
        setSelectedLPVoucher: (state, action: PayloadAction<GetLPvoucher | undefined>) => {
            state.selectedLPVoucher = action.payload;
        },
        setPreviewLPVoucher: (state, action: PayloadAction<PostLPvoucher | GetLPvoucher | undefined>) => {
            state.previewLPVoucher = action.payload;
        }
    }
})
export const {setLPVouchers, setPreviewLPVoucher, setSelectedLPVoucher } = lpVoucherSlice.actions;

export const lpVoucherState = (state: RootState) => state.lp_voucher;

export const lpVoucherReducer = lpVoucherSlice.reducer;