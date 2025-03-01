import { useParams } from "react-router-dom";
import { Box, LinearProgress } from "@mui/material";
import { DataDisplay } from "@prime-fresh/ui_shared";
import { useGetEmployeeById } from "@prime-fresh/admin/modules";

export const ViewEmployee = () => {
  const {id} = useParams<{id: string}>();
  const {data: Employee, isLoading} = useGetEmployeeById(id as string);
  const employee = Employee?.data ? Employee.data : {};
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