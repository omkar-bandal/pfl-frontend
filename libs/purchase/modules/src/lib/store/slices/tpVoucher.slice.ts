import { GetTPvoucher, PostTPvoucher } from "@prime-fresh/purchase_api"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.purchase";

type tpVoucherState = {
    tpVouchers: GetTPvoucher[];
    selectedTPVoucher: GetTPvoucher | undefined;
    previewTPVoucher: PostTPvoucher | GetTPvoucher | undefined;
}
const initialState : tpVoucherState = {
    tpVouchers: [],
    selectedTPVoucher: undefined,
    previewTPVoucher: undefined,
}

const tpVoucherSlice = createSlice({
    name: "tp_voucher",
    initialState,
    reducers: {
        setTPVouchers: (state, action: PayloadAction<GetTPvoucher[]>) =>{
            state.tpVouchers = action.payload;
        },
        setSelectedTPVoucher: (state, action: PayloadAction<GetTPvoucher | undefined>) => {
            state.selectedTPVoucher = action.payload;
        },
        setPreviewTPVoucher: (state, action: PayloadAction<PostTPvoucher | GetTPvoucher | undefined>) => {
            state.previewTPVoucher = action.payload;
        }
    }
})
export const {setPreviewTPVoucher, setSelectedTPVoucher, setTPVouchers } = tpVoucherSlice.actions;

export const tpVoucherState = (state: RootState) => state.tp_voucher;

export const tpVoucherReducer = tpVoucherSlice.reducer;