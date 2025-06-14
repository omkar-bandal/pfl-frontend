import { IPackingMaterialPaymentVoucher } from '@prime-fresh/purchase_api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.purchase';

type pmpVoucherState = {
  pmpVoucherFormPreview: Omit<IPackingMaterialPaymentVoucher, 'id'> | undefined;
};
const initialState: pmpVoucherState = {
  pmpVoucherFormPreview: undefined,
};

const pmpVoucherSlice = createSlice({
  name: 'pmp_voucher',
  initialState,
  reducers: {
    setPMPVoucherFormPreview: (
      state,
      action: PayloadAction<Omit<IPackingMaterialPaymentVoucher, 'id'> | undefined>
    ) => {
      state.pmpVoucherFormPreview = action.payload;
    },
  },
});
export const { setPMPVoucherFormPreview } = pmpVoucherSlice.actions;

export const pmpVoucherState = (state: RootState) => state.pmp_voucher;

export const pmpVoucherReducer = pmpVoucherSlice.reducer;
