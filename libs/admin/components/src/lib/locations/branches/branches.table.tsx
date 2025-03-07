import { useEffect } from "react";
import { Box, Grid2 } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { useNavigate, useParams } from "react-router-dom";
import { BranchColumns } from "./branch.columns";
import { ADMIN_ROUTES, useGetAllBranches } from "@prime-fresh/admin/modules";
import { AddNewButton, DataTable, PageTitle, toast } from "@prime-fresh/ui_shared";

export function BranchTable() {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();

    const { branchType } = useParams<{ branchType: string }>();
    const type = branchType ? branchType : "";

    const { data, isLoading, isError, error } = useGetAllBranches(type);
    const branches = data?.data ? data.data : [];

    useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.');
        }
    }, [isError, error]);

    const handleCreate = () => {
        navigate(`${ADMIN_ROUTES.CREATE_BRANCHES}/${type}`);
    };

    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={1}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Branches' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                </Grid2>
            </Grid2>
            <DataTable
                apiRef={apiRef}
                loading={isLoading}
                rows={branches}
                columns={BranchColumns()}
            />
        </Box>
    );
}
