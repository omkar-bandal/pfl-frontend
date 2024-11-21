// import { Employee } from "../../api/admin/models"
import { useParams } from "react-router-dom";
import { useGetCustomer, ADMIN_API_URL } from '@prime-fresh/admin_api';
import { Box, LinearProgress } from "@mui/material";
import { DataDisplay } from "@prime-fresh/ui_shared";

export const ViewCustomer = () => {
  const {id} = useParams<{id: string}>();
  const {data: Customer, isLoading} = useGetCustomer(ADMIN_API_URL.GET_A_CUSTOMER, id as string);
  const customer = Customer ? Customer : {};
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

