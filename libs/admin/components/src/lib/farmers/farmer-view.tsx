// import { Employee } from "../../api/admin/models"
import { useParams } from "react-router-dom";
import { DataDisplay } from "@prime-fresh/ui_shared";
import { Box, LinearProgress } from "@mui/material";
import { useGetFarmerById } from "@prime-fresh/admin/modules";

export const ViewFarmer = () => {
  const {id} = useParams<{id: string}>();
  const {data: Farmer, isLoading} = useGetFarmerById(id as string);
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

