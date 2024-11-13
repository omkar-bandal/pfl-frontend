// import { Employee } from "../../api/admin/models"
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { ADMIN_API_URL, useGetFarmer } from "@prime-fresh/admin_api";

export const FarmerView = () => {
  const {id} = useParams<{id: string}>();
  const {data: Farmer} = useGetFarmer(ADMIN_API_URL.GET_A_FARMER, id as string);
  console.log(Farmer);
  return (
    <>
    {/* {Farmer ? <DataDisplay header="Farmer Details" data={Farmer}/> : <CircularProgress />} */}
    </>
  )
}

