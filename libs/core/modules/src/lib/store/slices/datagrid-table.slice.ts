/* eslint-disable @typescript-eslint/no-explicit-any */
// src/store/dataTablesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { QueryParams } from '@prime-fresh/services';
import type { GridPaginationModel, GridSortModel } from '@mui/x-data-grid';
import { RootState } from '../store.core';

export interface DataGridTableState {
  enableCheckboxSelection: boolean;
  columnVisibilityModel: { [field: string]: boolean };
  search: string | null;
  paginationModel: GridPaginationModel;
  queryParams: QueryParams;
  sortModel: GridSortModel;
}

export interface DataGridTablesState {
  [tableId: string]: DataGridTableState;
}

const defaultPageSize = 10;

const initialTableState = (pageSize = defaultPageSize): DataGridTableState => ({
  enableCheckboxSelection: false,
  columnVisibilityModel: {},
  search: null,
  paginationModel: { page: 0, pageSize },
  queryParams: { page: 1, limit: pageSize, sort: '', filter: null },
  sortModel: [],
});

const initialState: DataGridTablesState = {};

const datagridTablesSlice = createSlice({
  name: 'datagridTable',
  initialState,
  reducers: {
    initializeTable(
      state,
      action: PayloadAction<{ tableId: string; pageSize?: number; columnVisibility?: { [f: string]: boolean } }>
    ) {
      const { tableId, pageSize, columnVisibility } = action.payload;
      if (!state[tableId]) {
        state[tableId] = initialTableState(pageSize ?? defaultPageSize);
        if (columnVisibility) state[tableId].columnVisibilityModel = columnVisibility;
      }
    },

    removeTable(state, action: PayloadAction<{ tableId: string }>) {
      delete state[action.payload.tableId];
    },

    // Checkbox selection
    toggleCheckboxSelection(state, action: PayloadAction<{ tableId: string }>) {
      const { tableId } = action.payload;
      if (!state[tableId]) state[tableId] = initialTableState();
      state[tableId].enableCheckboxSelection = !state[tableId].enableCheckboxSelection;
    },

    // Column visibility model
    setColumnVisibilityModel(state, action: PayloadAction<{ tableId: string; model: { [field: string]: boolean } }>) {
      const { tableId, model } = action.payload;
      if (!state[tableId]) state[tableId] = initialTableState();
      state[tableId].columnVisibilityModel = model;
    },
    toggleColumnVisibility(state, action: PayloadAction<{ tableId: string; field: string }>) {
      const { tableId, field } = action.payload;
      if (!state[tableId]) state[tableId] = initialTableState();
      state[tableId].columnVisibilityModel[field] = !state[tableId].columnVisibilityModel[field];
    },

    // Search
    setSearch(state, action: PayloadAction<{ tableId: string; search: string | null }>) {
      const { tableId, search } = action.payload;
      if (!state[tableId]) state[tableId] = initialTableState();
      state[tableId].search = search;
    },

    // Pagination
    setPaginationModel(state, action: PayloadAction<{ tableId: string; model: GridPaginationModel }>) {
      const { tableId, model } = action.payload;
      if (!state[tableId]) state[tableId] = initialTableState();
      state[tableId].paginationModel = model;
      state[tableId].queryParams.page = model.page + 1;
      state[tableId].queryParams.limit = model.pageSize;
    },

    // Sort
    setSortModel(state, action: PayloadAction<{ tableId: string; model: GridSortModel }>) {
      const { tableId, model } = action.payload;
      if (!state[tableId]) state[tableId] = initialTableState();
      state[tableId].sortModel = model;
      if (model.length > 0) {
        state[tableId].queryParams.sort = `${model[0].field}:${(model[0].sort ?? '') as string}`;
      } else {
        state[tableId].queryParams.sort = '';
      }
    },

    // Filter params (user-provided filter object)
    setFilterParams(state, action: PayloadAction<{ tableId: string; filter: Record<string, any> | null }>) {
      const { tableId, filter } = action.payload;
      if (!state[tableId]) state[tableId] = initialTableState();
      state[tableId].queryParams.filter = filter;
    },

    // Full query params setter if needed
    setQueryParams(state, action: PayloadAction<{ tableId: string; params: QueryParams }>) {
      const { tableId, params } = action.payload;
      state[tableId] = { ...(state[tableId] ?? initialTableState()), queryParams: params };
    },
  },
});

export const {
  initializeTable,
  removeTable,
  toggleCheckboxSelection,
  setColumnVisibilityModel,
  toggleColumnVisibility,
  setSearch,
  setPaginationModel,
  setSortModel,
  setFilterParams,
  setQueryParams,
} = datagridTablesSlice.actions;

export const datagridTableActionCreators = {
  initializeTable,
  removeTable,
  toggleCheckboxSelection,
  setColumnVisibilityModel,
  toggleColumnVisibility,
  setSearch,
  setPaginationModel,
  setSortModel,
  setFilterParams,
  setQueryParams,
};

export const datagridTableStates = (state: RootState) => state.datagridTable;

export const datagridTableReducer = datagridTablesSlice.reducer;
