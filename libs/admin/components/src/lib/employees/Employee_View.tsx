// import { Employee } from "../../api/admin/models"
import { useParams } from "react-router-dom";

// import { CircularProgress } from "@mui/material";
import { ADMIN_API_URL, useGetEmployee } from "@prime-fresh/admin_api";
import { Box, LinearProgress } from "@mui/material";
import { DataDisplay } from "@prime-fresh/ui_shared";

export const ViewEmployee = () => {
  const {id} = useParams<{id: string}>();
  const {data: Employee, isLoading} = useGetEmployee(ADMIN_API_URL.GET_AN_EMPLOYEE, id as string);
  const employee = Employee ? Employee : {};
  console.log(Employee);
  if (isLoading) {
    return (
      <Box>
        <LinearProgress />
      </Box>
    )
  }
  else {
    return (
      <DataDisplay header="Employee Details" data={employee} />
    )
  }
}

export default ViewEmployee;