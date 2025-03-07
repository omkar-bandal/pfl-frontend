// import { Employee } from "../../api/admin/models"
import { useParams } from "react-router-dom";
// import { CircularProgress } from "@mui/material";
import { DataDisplay } from "@prime-fresh/ui_shared";
import { Box, LinearProgress } from "@mui/material";
import { useGetVendorById } from "@prime-fresh/admin/modules";

export const ViewVendor = () => {
  const { id } = useParams<{ id: string }>();
  const { data: Vendor, isLoading } = useGetVendorById(id as string);
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

