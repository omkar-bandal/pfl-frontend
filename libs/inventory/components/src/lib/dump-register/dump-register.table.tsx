import React from "react";
import { Box, Grid2 } from "@mui/material";
import { inventoryRouteConstants, useGetAllDumpRegisters } from "@prime-fresh/inventory/modules";
import { IDumpRegister } from "@prime-fresh/inventory_api";
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { useDumpRegisterColumns } from "./dump-register.column";
import { usePermission } from "@prime-fresh/modules";


export const DumpRegisterTable = () => {
    const navigate = useNavigate();
    const { canEdit, canView } = usePermission('dump-register');
    const dumpRegisterColumns = useDumpRegisterColumns(canEdit, canView);
    const { 
        paginationModel,
        sortModel,
        handleSortingChange,
        handlePaginationChange,
        queryParams,
        columnVisibilityModel,
        displayColumnVisibilityPanel,
        handleColumnVisibilityModelChange,
        handleCloseColumnVisibilityPanel,
        handleOpenColumnVisibilityPanel
    } = useDataTable({ columnDef: dumpRegisterColumns, initialPageSize: 10 });

    const { data, isLoading, isError, error } = useGetAllDumpRegisters(queryParams);

    const dumps = data ? data : null;
    const rowCountRef = React.useRef(dumps?.allRecords || 0);
    const rowCount = React.useMemo(() => {
        if (dumps?.allRecords !== undefined) {
            rowCountRef.current = dumps.allRecords;
        }
        return rowCountRef.current;
    }, [dumps]);
    console.log(dumps);
    React.useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])

    const handleCreate = () => {
        navigate(inventoryRouteConstants.CREATE_DUMP_REGISTER);
    }

    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={1}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Dump Register' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                    <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
                    <ColumnVisibilityPanel
                        popoverId="dumps-col-def"
                        columns={dumpRegisterColumns}
                        columnVisibilityModel={columnVisibilityModel}
                        displayColumnVisibilityModel={displayColumnVisibilityPanel}
                        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
                        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                    />
                </Grid2>
            </Grid2>
            <DataGridTable<IDumpRegister>
                loading={isLoading}
                rows={dumps?.data || []}
                columns={dumpRegisterColumns}
                mode="server"
                initialPageSize={10}
                totalRows={rowCount}
                paginationModel={paginationModel}
                onPaginationModelChange={handlePaginationChange}
                sortModel={sortModel}
                onSortModelChange={handleSortingChange}
                columnVisibilityModel={columnVisibilityModel}
            />
        </Box >
    )
}