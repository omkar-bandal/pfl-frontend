import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { ADMIN_API_URL, useGetAllOffices } from "@prime-fresh/admin_api";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";
import { useNavigate, useParams } from "react-router-dom";
import { OfficeColumns } from "./office.columns";
import { Add } from "@mui/icons-material";

export function OfficeTable() {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();

    const {officeType} = useParams<{officeType: string}>();
    const type = officeType? officeType : "";
    console.log(type);

    const { data: branches, isLoading } = useGetAllOffices(ADMIN_API_URL.GET_ALL_OFFICES, type);
    console.log(branches);
   
    const handleCreate = () => {
        navigate(`${ADMIN_ROUTES.CREATE_OFFICE}/${type}`);
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
                    onClick={() => handleCreate()}>
                    Add Office
                </Button>
                <TableToolbar apiRef={apiRef} />
            </Stack>
            <DataTable
                apiRef={apiRef}
                loading={isLoading}
                rows={branches}
                columns={OfficeColumns()}
            />
        </Box>
    );
}
