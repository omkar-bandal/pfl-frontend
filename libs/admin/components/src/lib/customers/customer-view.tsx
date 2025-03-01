// import { Employee } from "../../api/admin/models"
import { useParams } from "react-router-dom";
import { Box, LinearProgress } from "@mui/material";
import { DataDisplay } from "@prime-fresh/ui_shared";
import { useGetCustomerById } from "@prime-fresh/admin/modules";

export const ViewCustomer = () => {
  const { id } = useParams<{ id: string }>();
  const { data: Customer, isLoading } = useGetCustomerById(id as string);
  const customer = Customer?.data ? Customer.data : {};
  console.log(Customer);
  if (isLoading) {
    return (
      <Box>
        <LinearProgress />
      </Box>
    )
  }
  else {
    return (
      <DataDisplay header="Customer Details" data={customer} />
    )
  }

}

