// import { Employee } from "../../api/admin/models"
import { useParams } from "react-router-dom";
import { ADMIN_API_URL, useGetFarmer } from "@prime-fresh/admin_api";
import { DataDisplay } from "@prime-fresh/ui_shared";
import { Box, LinearProgress } from "@mui/material";

export const ViewFarmer = () => {
  const {id} = useParams<{id: string}>();
  const {data: Farmer, isLoading} = useGetFarmer(ADMIN_API_URL.GET_A_FARMER, id as string);
  const farmer = Farmer ? Farmer : {};
  console.log(Farmer);
  if (isLoading) {
    return (
      <Box>
        <LinearProgress />
      </Box>
    )
  }
  else {
    return (
      <DataDisplay header="Farmer Details" data={farmer} />
    )
  }
}

