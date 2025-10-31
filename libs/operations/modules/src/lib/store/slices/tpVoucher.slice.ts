import { ITranportPaymentVoucher } from '@prime-fresh/services';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.operations';

type tpVoucherState = {
  tpVoucherFormPreview: Omit<ITranportPaymentVoucher, 'id'> | undefined;
};
const initialState: tpVoucherState = {
  tpVoucherFormPreview: undefined,
};

const tpVoucherSlice = createSlice({
  name: 'tp_voucher',
  initialState,
  reducers: {
    setTPVoucherFormPreview: (state, action: PayloadAction<Omit<ITranportPaymentVoucher, 'id'> | undefined>) => {
      state.tpVoucherFormPreview = action.payload;
    },
  },
});
export const { setTPVoucherFormPreview } = tpVoucherSlice.actions;

export const tpVoucherState = (state: RootState) => state.tp_voucher;

export const tpVoucherReducer = tpVoucherSlice.reducer;
