import { GetPMPvoucher, PostPMPvoucher } from "@prime-fresh/purchase_api"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.purchase";

type pmpVoucherState = {
    pmpVouchers: GetPMPvoucher[];
    selectedPMPVoucher: GetPMPvoucher | undefined;
    previewPMPVoucher: PostPMPvoucher | undefined;
}
const initialState : pmpVoucherState = {
    pmpVouchers: [],
    selectedPMPVoucher: undefined,
    previewPMPVoucher: undefined,
}

const pmpVoucherSlice = createSlice({
    name: "pmp_voucher",
    initialState,
    reducers: {
        setPMPVouchers: (state, action: PayloadAction<GetPMPvoucher[]>) =>{
            state.pmpVouchers = action.payload;
        },
        setSelectedPMPVoucher: (state, action: PayloadAction<GetPMPvoucher | undefined>) => {
            state.selectedPMPVoucher = action.payload;
        },
        setPreviewPMPVoucher: (state, action: PayloadAction<PostPMPvoucher | undefined>) => {
            state.previewPMPVoucher = action.payload;
        }
    }
})
export const {setPMPVouchers, setPreviewPMPVoucher, setSelectedPMPVoucher } = pmpVoucherSlice.actions;

export const pmpVoucherState = (state: RootState) => state.pmp_voucher;

export const pmpVoucherReducer = pmpVoucherSlice.reducer;