import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGRN } from '@prime-fresh/services';
import { RootState } from '../store.operations';

type grnDataState = {
  grn: IGRN[];
  selectedGRN: IGRN | undefined;
  grnFormPreview: Omit<IGRN, 'id'> | undefined;
  grnActionType: 'approve' | 'reject' | null;
  reasonForGRNAction: string;
};
const initialState: grnDataState = {
  grn: [],
  selectedGRN: undefined,
  grnFormPreview: undefined,
  grnActionType: null,
  reasonForGRNAction: '',
};
const grnDataSlice = createSlice({
  name: 'grnData',
  initialState,
  reducers: {
    setGRNData: (state, action: PayloadAction<IGRN[]>) => {
      state.grn = action.payload;
    },
    setSelectedGRN: (state, action: PayloadAction<IGRN | undefined>) => {
      state.selectedGRN = action.payload;
    },
    setGRNFormPreview: (state, action: PayloadAction<Omit<IGRN, 'id'> | undefined>) => {
      state.grnFormPreview = action.payload;
    },
    setGRNActionType: (state, action: PayloadAction<'approve' | 'reject' | null>) => {
      state.grnActionType = action.payload;
    },
    setReasonForGRNAction: (state, action: PayloadAction<string>) => {
      state.reasonForGRNAction = action.payload;
    },
  },
});

export const { setGRNData, setSelectedGRN, setGRNFormPreview, setGRNActionType, setReasonForGRNAction } =
  grnDataSlice.actions;

export const grnDataState = (state: RootState) => state.grnData;

export const grnDataReducer = grnDataSlice.reducer;
