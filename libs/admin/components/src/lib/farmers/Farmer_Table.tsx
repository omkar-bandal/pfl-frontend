import React, { useMemo, useRef, useState } from "react";
import { Autocomplete, Box, Button, Stack, TextField } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { Add } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { FarmerListCols } from "./Columns";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, farmersDataState, setOpenFor } from '@prime-fresh/admin/modules';
import { useAppSelector } from "@prime-fresh/modules";
import { GetFarmer } from "@prime-fresh/admin_api";
import { DataGridTable, TableToolbar, useDataTable } from '@prime-fresh/ui_shared';
import { axiosInstance, COM_API_URL, handleError } from "@prime-fresh/common_api";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { debounce } from "@prime-fresh/shared/utils";

export function FarmerTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const apiRef = useGridApiRef();
  const { paginationModel, sortModel, filterModel, handleSortingChange, handlePaginationChange, handleFiltersChange, queryParams } = useDataTable();
  // const { data, isLoading } = useGetAllFarmers(ADMIN_API_URL.GET_ALL_FARMERS);
  

  interface GetFarmerData {
    data: GetFarmer[];
    totalfarmers: number;
    totalPages: number;
    page: number;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetchFarmers = async (page: number, limit: number, sort: string): Promise<GetFarmerData> => {
    let url = `${COM_API_URL.BASE_URL}/farmers/?page=${page + 1}&limit=${limit}`;
    if (sort && sort.length > 0)
      url = `${COM_API_URL.BASE_URL}/farmers/?page=${page + 1}&limit=${limit}&sort=${sort}`
    try {
      const result: AxiosResponse = await axiosInstance.get(url);
      console.log("all farmers: ", result.data);
      return result.data;
    } catch (error) {
      handleError(error);
    }
  }
  const { data, isLoading } = useQuery(
    {
      queryKey: ['getFarmers', queryParams],
      queryFn: () => fetchFarmers(queryParams.page, queryParams.limit, queryParams.sort),
      keepPreviousData: true, // Add this option
    } as UseQueryOptions<GetFarmerData, Error, GetFarmerData, (string | number)[]>);
  const rowCountRef = useRef(data?.totalfarmers || 0);

  const rowCount = useMemo(() => {
    if (data?.totalfarmers !== undefined) {
      rowCountRef.current = data.totalfarmers;
    }
    return rowCountRef.current;
  }, [data?.totalfarmers]);

  const handleCreate = () => {
    dispatch(setOpenFor('create'));
    navigate(ADMIN_ROUTES.CREATE_FARMER)
  };

  
  return (
    <Box sx={{ flex: 1 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          size="medium"
          startIcon={<Add />}
          sx={{ marginY: 2 }}
          fullWidth={false}
          onClick={handleCreate}
        >
          Add Farmer
        </Button>
        
        <TableToolbar apiRef={apiRef} />
      </Stack>
      {/* <DataTable
          apiRef={apiRef}
          loading={isLoading}
          rows={allFarmers}
          columns={FarmerListCols()}
        /> */}
      <DataGridTable
        apiRef={apiRef}
        loading={isLoading}
        rows={data?.data}
        columns={FarmerListCols()}
        mode="server"
        initialPageSize={10}
        totalRows={rowCount}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationChange}
        sortModel={sortModel}
        onSortModelChange={handleSortingChange}
        filterModel={filterModel}
        onFilterModelChange={handleFiltersChange}
      />
    </Box>
  );
}
