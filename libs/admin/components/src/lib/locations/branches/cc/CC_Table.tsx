import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { Add } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BranchListCols } from "../BranchListCols";
import { ADMIN_API_URL, BranchType, useGetAllBranches } from "@prime-fresh/admin_api";
import { ADMIN_ROUTES, branchesDataState, setBranchesData, setOpenFor } from "@prime-fresh/admin/modules";
import { useAppSelector } from "@prime-fresh/modules";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";

export function CCTable() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const apiRef = useGridApiRef();

    const { data, isLoading } = useGetAllBranches(ADMIN_API_URL.GET_ALL_CC);
    console.log(data);
    
    React.useEffect(() => {
        data ? dispatch(setBranchesData(data)) : dispatch(setBranchesData([]));
    }, [data, dispatch]);
    
    const {branches} = useAppSelector(branchesDataState);
   
    const handleCreate = () => {
        dispatch(setOpenFor('create'));
        navigate(`${ADMIN_ROUTES.CREATE_BRANCHES}/${BranchType[0]}`);
    };

    return (
        <Box sx={{ flex: 1 }}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Button
                    variant="outlined"
                    size="medium"
                    startIcon={<Add />}
                    sx={{ marginY: 2 }}
                    fullWidth={false}
                    onClick={() => handleCreate()}
                >
                    Add CC
                </Button>
                <TableToolbar apiRef={apiRef} />
            </Stack>
            <DataTable
                apiRef={apiRef}
                loading={isLoading}
                rows={branches}
                columns={BranchListCols()}
            />
        </Box>
    );
}
