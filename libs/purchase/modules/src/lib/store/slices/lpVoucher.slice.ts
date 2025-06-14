import { ILaborPaymentVoucher } from '@prime-fresh/purchase_api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.purchase';

type lpVoucherState = {
  lpVoucherFormPreview: Omit<ILaborPaymentVoucher, 'id'> | null;
};
const initialState: lpVoucherState = {
  lpVoucherFormPreview: null,
};

const lpVoucherSlice = createSlice({
  name: 'lp_voucher',
  initialState,
  reducers: {
    setLPVoucherFormPreview: (state, action: PayloadAction<Omit<ILaborPaymentVoucher, 'id'> | null>) => {
      state.lpVoucherFormPreview = action.payload;
    },
  },
});
export const { setLPVoucherFormPreview } = lpVoucherSlice.actions;

export const lpVoucherState = (state: RootState) => state.lp_voucher;

export const lpVoucherReducer = lpVoucherSlice.reducer;
