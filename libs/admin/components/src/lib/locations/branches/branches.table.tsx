import React, { useEffect, useMemo, useRef } from "react";
import { Box, Grid2 } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useBranchColumns } from "./branch.columns";
import { ADMIN_ROUTES, useGetAllBranches } from "@prime-fresh/admin/modules";
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";

export function BranchTable() {
    const navigate = useNavigate();
    const { branchType } = useParams<{ branchType: string }>();
    const type = branchType ? branchType : "";
    const BranchTypeLabel = React.useMemo(() => type.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '), [type]);
    const branchColumns = useBranchColumns();
    const { paginationModel,
        sortModel,
        handleSortingChange,
        handlePaginationChange,
        queryParams,
        columnVisibilityModel,
        displayColumnVisibilityPanel,
        handleColumnVisibilityModelChange,
        handleCloseColumnVisibilityPanel,
        handleOpenColumnVisibilityPanel
    } = useDataTable({ columnDef: branchColumns, initialPageSize: 10 });

    const { data, isLoading, isError, error } = useGetAllBranches(type, queryParams);
    const branches = data ? data : null;
    console.log(branches);
    const rowCountRef = useRef(branches?.allRecords || 0);
    const rowCount = useMemo(() => {
        if (branches?.allRecords !== undefined) {
            rowCountRef.current = branches.allRecords;
        }
        return rowCountRef.current;
    }, [branches]);
    useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.');
        }
    }, [isError, error]);

    const handleNavigate = () => {
        navigate(`${ADMIN_ROUTES.CREATE_BRANCHES}/${type}`);
    };

    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={1}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle={BranchTypeLabel} />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleNavigate} />
                    <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
                    <ColumnVisibilityPanel
                        popoverId="branch-col-def"
                        columns={branchColumns}
                        columnVisibilityModel={columnVisibilityModel}
                        displayColumnVisibilityModel={displayColumnVisibilityPanel}
                        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
                        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                    />
                </Grid2>
            </Grid2>
            <DataGridTable
                loading={isLoading}
                rows={branches?.data || []}
                columns={branchColumns}
                mode="server"
                initialPageSize={10}
                totalRows={rowCount}
                paginationModel={paginationModel}
                onPaginationModelChange={handlePaginationChange}
                sortModel={sortModel}
                onSortModelChange={handleSortingChange}
                columnVisibilityModel={columnVisibilityModel}
            />
        </Box>
    );
}
