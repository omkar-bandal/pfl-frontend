// import { Employee } from "../../api/admin/models"
import { useParams } from "react-router-dom";
// import { CircularProgress } from "@mui/material";
import { ADMIN_API_URL, useGetVendor } from "@prime-fresh/admin_api";

export const ViewVendorView = () => {
  const {id} = useParams<{id: string}>();
  const {data: Vendor} = useGetVendor(ADMIN_API_URL.GET_A_VENDOR, id as string);
  console.log(Vendor);
  return (
    <>
    {/* {Vendor ? <DataDisplay header="Vendor Details" data={Vendor}/> : <CircularProgress />} */}
    </>
  )
}

