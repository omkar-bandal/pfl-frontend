import { Box, Grid2} from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { ADMIN_ROUTES, useGetAllOffices } from "@prime-fresh/admin/modules";
import { AddNewButton, DataTable, PageTitle, toast } from "@prime-fresh/ui_shared";
import { useNavigate, useParams } from "react-router-dom";
import { OfficeColumns } from "./office.columns";
import { useEffect } from "react";

export function OfficeTable() {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();

    const { officeType } = useParams<{ officeType: string }>();
    const type = officeType ? officeType : "";
    console.log(type);

    const { data, isLoading, isError, error } = useGetAllOffices(type);
    const branches = data?.data ? data.data : [];
    console.log(branches);
    useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])


    const handleCreate = () => {
        navigate(`${ADMIN_ROUTES.CREATE_OFFICE}/${type}`);
    };

    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={1}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Offices' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                </Grid2>
            </Grid2>
            <DataTable
                apiRef={apiRef}
                loading={isLoading}
                rows={branches}
                columns={OfficeColumns()}
            />
        </Box>
    );
}
