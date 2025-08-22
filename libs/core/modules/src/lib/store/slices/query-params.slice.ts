import { QueryParams } from "@prime-fresh/common_api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.core";

type QueryParamsStateType = {
  queryParams: QueryParams,
}
const initialState: QueryParamsStateType = {
  queryParams: {
    page: 0,
    limit: 6,
    search: null,
    sort: ''
  }
};

export const queryParamsSlice = createSlice({
  name: 'queryParams',
  initialState,
  reducers: {
    setQueryParams: (state, action: PayloadAction<QueryParams>) => {
      state.queryParams = action.payload;
    }, 
    setPage: (state, action:PayloadAction<number>) => {
      state.queryParams.page = action.payload;
    },
    nextPage: (state) => {
      state.queryParams.page += 1;
    },
    prevPage: (state) => {
      state.queryParams.page -= 1;
    },
    setSearchText: (state, action: PayloadAction<string | null>) => {
      state.queryParams.search = action.payload;
    } 
  },
})
export const { setQueryParams, setPage, nextPage, setSearchText, prevPage } = queryParamsSlice.actions;
export const queryParamsState = (state: RootState) => state.queryParams.queryParams;
export const queryParamsReducer = queryParamsSlice.reducer;