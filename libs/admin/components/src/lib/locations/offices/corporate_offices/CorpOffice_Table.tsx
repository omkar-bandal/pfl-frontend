import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { OfficeListCols } from "../OfficeListCols";
import { ADMIN_API_URL, OfficeType, useGetAllOffices } from "@prime-fresh/admin_api";
import { ADMIN_ROUTES, setOfficesData } from "@prime-fresh/admin/modules";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";

export function CorporateOfficeTable() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const apiRef = useGridApiRef();
    const { data, isLoading } = useGetAllOffices(ADMIN_API_URL.GET_ALL_CORP_OFFICES);

    React.useEffect(() => {
        data ? dispatch(setOfficesData(data)) : dispatch(setOfficesData([]));
    }, [data, dispatch]);
    console.log(data);

    const handleCreate = () => {
        console.log('create corp office');
        navigate(`${ADMIN_ROUTES.CREATE_OFFICE}/${OfficeType[1]}`);
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
                    onClick={handleCreate}
                >
                    Add Office
                </Button>
                <TableToolbar apiRef={apiRef} />
            </Stack>
            <DataTable
                apiRef={apiRef}
                loading={isLoading}
                rows={data}
                columns={OfficeListCols()}
            />
        </Box>
    );
}
