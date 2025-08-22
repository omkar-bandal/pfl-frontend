/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { GridPaginationModel, GridSortModel } from "@mui/x-data-grid";
import { CustomGridColDef } from "./models";
import { QueryParams } from "@prime-fresh/common_api";

// export interface QueryParams {
//   page: number;
//   limit: number;
//   sort: string;
// }

// interface UseDataTableProps {
//   initialPageSize?: number;
//   columnDef?: CustomGridColDef[],
// }

// export const useDataTable = ({ initialPageSize = 10, columnDef }: UseDataTableProps = {}) => {

//   const columnDefination = columnDef
//     ? columnDef.reduce((acc, col) => ({ ...acc, [col.field]: true }), {})
//     : {};

//   const [columnVisibilityModel, setColumnVisibilityModel] = useState<{ [field: string]: boolean }>(columnDefination);

//   const [displayColumnVisibilityPanel, setDisplayColumnVisibilityPanel] = useState<HTMLButtonElement | null>(null);

//   const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
//     page: 0,
//     pageSize: initialPageSize,
//   });
//   const [sortModel, setSortModel] = useState<GridSortModel>([]);
//   const [queryParams, setQueryParams] = useState<QueryParams>({
//     page: 1,
//     limit: initialPageSize,
//     sort: '',
//   });

//   const handleCloseColumnVisibilityPanel = () => {
//     setDisplayColumnVisibilityPanel(null);
//   }

//   const handleOpenColumnVisibilityPanel = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setDisplayColumnVisibilityPanel(event.currentTarget);
//   };

//   const handleColumnVisibilityModelChange = (field: string) => {
//     const newModel = { ...columnVisibilityModel, [field]: !columnVisibilityModel[field] };
//     setColumnVisibilityModel(newModel);
//   };

//   const handlePaginationChange = (newPaginationModel: GridPaginationModel) => {
//     setPaginationModel((prev) => ({
//       ...prev,
//       ...newPaginationModel,
//     }));
//     setQueryParams((prev) => ({
//       ...prev,
//       page: newPaginationModel.page + 1,
//       limit: newPaginationModel.pageSize,
//     }));
//   };

//   const handleSortingChange = (sorting: GridSortModel) => {
//     const sort = sorting.length > 0 ? `${sorting[0].field}:${sorting[0].sort}` : '';
//     setSortModel(sorting);
//     setQueryParams((prev) => ({ ...prev, sort }));
//   };

//   return {
//     paginationModel,
//     sortModel,
//     queryParams,
//     displayColumnVisibilityPanel,
//     handleCloseColumnVisibilityPanel,
//     handleOpenColumnVisibilityPanel,
//     setPaginationModel,
//     columnVisibilityModel,
//     setColumnVisibilityModel,
//     handleColumnVisibilityModelChange,
//     handlePaginationChange,
//     handleSortingChange,
//   };
// };


interface UseDataTableProps {
  initialPageSize?: number;
  columnDef?: CustomGridColDef[];
}

export const useDataTable = ({ initialPageSize = 10, columnDef }: UseDataTableProps = {}) => {
  // If column definitions are provided, initialize each column as visible.
  const initialColumnVisibility = columnDef
    ? columnDef.reduce((acc, col) => ({ ...acc, [col.field]: col.hide !== true }), {})
    : {};


  const [columnVisibilityModel, setColumnVisibilityModel] = useState<{ [field: string]: boolean }>(
    initialColumnVisibility
  );
  const [displayColumnVisibilityPanel, setDisplayColumnVisibilityPanel] = useState<HTMLButtonElement | null>(null);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: initialPageSize,
  });
  const [sortModel, setSortModel] = useState<GridSortModel>([]);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 1,
    limit: initialPageSize,
    sort: '',
    filter: null,
  });
  const [search, setSearch] = useState<string | null>(null);

  const handleCloseColumnVisibilityPanel = () => {
    setDisplayColumnVisibilityPanel(null);
  };

  const handleOpenColumnVisibilityPanel = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDisplayColumnVisibilityPanel(event.currentTarget);
  };

  const handleColumnVisibilityModelChange = (field: string) => {
    const newModel = { ...columnVisibilityModel, [field]: !columnVisibilityModel[field] };
    setColumnVisibilityModel(newModel);
  };

  const handlePaginationChange = (newPaginationModel: GridPaginationModel) => {
    setPaginationModel(newPaginationModel);
    setQueryParams((prev) => ({
      ...prev,
      page: newPaginationModel.page + 1, // Convert from 0-indexed to 1-indexed
      limit: newPaginationModel.pageSize,
    }));
  };

  const handleSortingChange = (sorting: GridSortModel) => {
    let sort = '';
    if (sorting.length > 0) {
      sort = `${sorting[0].field}:${sorting[0].sort}`;
    }
    setSortModel(sorting);
    setQueryParams((prev) => ({ ...prev, sort }));
  };

  const handleFilterParamsChange = (filterParams: Record<string, any>) => {
    setQueryParams((prev) => ({ ...prev, filter: filterParams }));
  }

  return {
    paginationModel,
    sortModel,
    queryParams,
    search,
    setSearch,
    displayColumnVisibilityPanel,
    handleCloseColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel,
    setPaginationModel,
    columnVisibilityModel,
    setColumnVisibilityModel,
    handleColumnVisibilityModelChange,
    handlePaginationChange,
    handleSortingChange,
    handleFilterParamsChange,
  };
};