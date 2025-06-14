import { IMultiCashVoucher } from '@prime-fresh/purchase_api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.purchase';

type MCVoucherState = {
  mcVoucherFormPreview: Omit<IMultiCashVoucher, 'id'> | undefined;
};
const initialState: MCVoucherState = {
  mcVoucherFormPreview: undefined,
};

const mcVoucherSlice = createSlice({
  name: 'mc_voucher',
  initialState,
  reducers: {
    setMCVoucherFormPreview: (state, action: PayloadAction<Omit<IMultiCashVoucher, 'id'> | undefined>) => {
      state.mcVoucherFormPreview = action.payload;
    },
  },
});
export const { setMCVoucherFormPreview } = mcVoucherSlice.actions;

export const mcVoucherState = (state: RootState) => state.mc_voucher;

export const mcVoucherReducer = mcVoucherSlice.reducer;
