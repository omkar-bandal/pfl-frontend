// import { CircularProgress } from "@mui/material"
import { Box, LinearProgress } from "@mui/material";
import { ADMIN_API_URL, useGetABranch } from "@prime-fresh/admin_api";
import { DataDisplay } from "@prime-fresh/ui_shared";
import { useParams } from "react-router-dom";

export const BranchView = () => {
    const { id } = useParams<{ id: string }>();
    const branchId = id ? id : '';
    const { data: Branch, isLoading } = useGetABranch(ADMIN_API_URL.GET_A_BRANCH, branchId);
    const branch = Branch ? Branch : {};

    return (
        isLoading ? (
            <Box>
                <LinearProgress />
            </Box>
        ) :

            <DataDisplay header="Branch Details" data={branch} />
    )
}


