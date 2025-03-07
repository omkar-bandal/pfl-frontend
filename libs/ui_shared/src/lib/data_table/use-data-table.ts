import { GridFilterModel, GridPaginationModel, GridSortModel } from "@mui/x-data-grid";
import { useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface QueryParams {
    page: number;
    limit: number;
    filter: Record<string, any>;
    sort: string;
  }
  
  interface UseDataTableProps {
    initialPageSize?: number;
  }
  
  export const useDataTable = ({ initialPageSize = 10 }: UseDataTableProps = {}) => {
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
      page: 0,
      pageSize: initialPageSize,
    });
    const [sortModel, setSortModel] = useState<GridSortModel>([]);
    const [filterModel, setFilterModel] = useState<GridFilterModel>({ items: [] });
    const [queryParams, setQueryParams] = useState<QueryParams>({
      page: 1,
      limit: initialPageSize,
      filter: {},
      sort: '',
    });
  
    const handlePaginationChange = (newPaginationModel: GridPaginationModel) => {
      setPaginationModel((prev) => ({
        ...prev,
        ...newPaginationModel,
      }));
      setQueryParams((prev) => ({
        ...prev,
        page: newPaginationModel.page + 1,
        limit: newPaginationModel.pageSize,
      }));
    };
  
    const handleSortingChange = (sorting: GridSortModel) => {
      console.log("Sorting Model:", sorting);
      console.log("Sorting Field",sorting[0].field);
      console.log("Sorting Type", sorting[0].sort);
      const sort = sorting.length > 0 ? `${sorting[0].field}:${sorting[0].sort}` : '';
      console.log("sort", sort);
      setSortModel(sorting);
      setQueryParams((prev) => ({ ...prev, sort }));
    };
  
    const handleFiltersChange = (filters: GridFilterModel) => {
      console.log(filters);
      setFilterModel(filters);
      // setQueryParams((prev) => ({ ...prev, filter: filterObj }));
    };
  
    return {
      paginationModel,
      filterModel,
      sortModel,
      queryParams,
      setPaginationModel,
      handlePaginationChange,
      handleSortingChange,
      handleFiltersChange,
    };
  };
  