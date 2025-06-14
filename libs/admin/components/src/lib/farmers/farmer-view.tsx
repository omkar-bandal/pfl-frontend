// import { Employee } from "../../api/admin/models"
import { useParams } from "react-router-dom";
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
     <></>
    )
  }
}

