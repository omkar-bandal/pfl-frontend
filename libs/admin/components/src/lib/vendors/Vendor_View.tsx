// import { Employee } from "../../api/admin/models"
import { useParams } from "react-router-dom";
// import { CircularProgress } from "@mui/material";
import { ADMIN_API_URL, useGetVendor } from "@prime-fresh/admin_api";
import { DataDisplay } from "@prime-fresh/ui_shared";
import { Box, LinearProgress } from "@mui/material";

export const ViewVendor = () => {
  const { id } = useParams<{ id: string }>();
  const { data: Vendor, isLoading } = useGetVendor(ADMIN_API_URL.GET_A_VENDOR, id as string);
  const vendor = Vendor ? Vendor : {};
  console.log(Vendor);
  if (isLoading) {
    return (
      <Box>
        <LinearProgress />
      </Box>
    )
  }
  else {
    return (
      <DataDisplay header="Vendor Details" data={vendor} />
    )
  }
}

