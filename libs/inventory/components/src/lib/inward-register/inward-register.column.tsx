import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export const useInwardRegisterColumns = (): CustomGridColDef[] => {
    const navigate = useNavigate();
    
    return useMemo(() => [
        { 
            field: "createdDate", 
            headerName: "Created Date", 
            width: 130,
            align: 'center',
            valueGetter: (value: string) => value? value : '-', 
        },
        { 
            field: "createdTime", 
            headerName: "Created Time", 
            width: 130,
            align: 'center',
            valueGetter: (value: string) => value? value : '-', 
        },
        {
            field: "inwardType",
            headerName: "Inward Type",
            width: 130,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value? value : "-",
        },
        {
            field: "companyName",
            headerName: "Company",
            width: 200,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "location",
            headerName: "Location",
            width: 100,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "date",
            headerName: "Date",
            width: 100,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "batchNo",
            headerName: "Batch No",
            width: 150,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "source",
            headerName: "Source",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: 'edit',
            headerName: 'Edit',
            width: 80,
            sortable: false,
            filterable: false,
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="edit" onClick={() => navigate(`${inventoryRouteConstants.UPDATE_INWARD_REGISTER}/${params.row.id}`)}>
                    <Edit color="secondary" />
                </IconButton>
            ),
        },
    ], [navigate])
}