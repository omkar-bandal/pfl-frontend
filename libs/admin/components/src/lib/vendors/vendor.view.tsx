import { useParams } from "react-router-dom";
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
      <></>
    )
  }
}

