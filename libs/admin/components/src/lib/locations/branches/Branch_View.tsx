// import { CircularProgress } from "@mui/material"
import { Box, LinearProgress } from "@mui/material";
import { ADMIN_API_URL, useGetABranch } from "@prime-fresh/admin_api";
import { DataDisplay } from "@prime-fresh/ui_shared";
import { useParams } from "react-router-dom";

export const ViewBranch = () => {
    const { id, branchType } = useParams<{ id: string, branchType: string }>();
    const branchId = id ? id : '';
    const branchtype = branchType ? branchType : '';

    const getBranchUrl = (branchType: string) => {
        if (branchType === "COLLECTION_CENTER") {
            return ADMIN_API_URL.GET_A_CC;
        } else if (branchType === "DISTRIBUTION_CENTER") {
            return ADMIN_API_URL.GET_A_DC;
        } else if (branchType === "SEASONAL_COLLECTION_CENTER") {
            return ADMIN_API_URL.GET_A_SEASONAL_CC;
        } else 
        {
            return ADMIN_API_URL.GET_A_WAREHOUSE;
        }
    }

    const urlBranch = getBranchUrl(branchtype);

    const { data: Branch, isLoading } = useGetABranch(urlBranch, branchId);
    const branch = Branch ? Branch : {};

    if (isLoading) {
        return (
            <Box>
                <LinearProgress />
            </Box>
        )
    }
    else {
        return (
            <DataDisplay header="Branch Details" data={branch} />
        )
    }
}

