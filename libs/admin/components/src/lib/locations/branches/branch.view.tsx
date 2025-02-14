import { Box, LinearProgress } from "@mui/material";
import { useGetBranchById } from "@prime-fresh/admin/modules";
import { DataDisplay } from "@prime-fresh/ui_shared";
import { useParams } from "react-router-dom";

export const BranchView = () => {
    const { id } = useParams<{ id: string }>();
    const branchId = id ? id : '';
    const { data: Branch, isLoading } = useGetBranchById(branchId)
    const branch = Branch?.data ? Branch.data : {};

    return (
        isLoading ? (
            <Box>
                <LinearProgress />
            </Box>
        ) :

            <DataDisplay header="Branch Details" data={branch} />
    )
}


