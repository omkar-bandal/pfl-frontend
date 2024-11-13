// import { Employee } from "../../api/admin/models"
import { useParams } from "react-router-dom";

// import { CircularProgress } from "@mui/material";
import { ADMIN_API_URL, useGetEmployee } from "@prime-fresh/admin_api";

const ViewEmployee = () => {
  const {id} = useParams<{id: string}>();
  const {data: Employee} = useGetEmployee(ADMIN_API_URL.GET_AN_EMPLOYEE, id as string);
  console.log(Employee);
  return (
    <>
    {/* {Employee ? <DataDisplay header="Employee Details" data={Employee}/> : <CircularProgress />} */}
    </>
  )
}

export default ViewEmployee;