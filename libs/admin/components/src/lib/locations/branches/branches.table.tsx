import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { Add } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { BranchColumns } from "./branch.columns";
import { ADMIN_API_URL, useGetAllBranches } from "@prime-fresh/admin_api";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";

export function BranchTable() {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();

    const {branchType} = useParams<{branchType: string}>();
    const type = branchType? branchType : "";
    console.log(type);

    const { data: branches, isLoading } = useGetAllBranches(ADMIN_API_URL.GET_ALL_BRANCHES, type);
    console.log(branches);
   
    const handleCreate = () => {
        navigate(`${ADMIN_ROUTES.CREATE_BRANCHES}/${type}`);
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
                    onClick={() => handleCreate()}>
                    Add Branch
                </Button>
                <TableToolbar apiRef={apiRef} />
            </Stack>
            <DataTable
                apiRef={apiRef}
                loading={isLoading}
                rows={branches}
                columns={BranchColumns()}
            />
        </Box>
    );
}
