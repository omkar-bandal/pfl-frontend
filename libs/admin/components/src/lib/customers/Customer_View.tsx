// import { Employee } from "../../api/admin/models"
import { useParams } from "react-router-dom";
import { useGetCustomer, ADMIN_API_URL } from '@prime-fresh/admin_api';

export const CustomerView = () => {
  const {id} = useParams<{id: string}>();
  const {data: Customer} = useGetCustomer(ADMIN_API_URL.GET_A_CUSTOMER, id as string);
  console.log(Customer);
  return (
    <>
    </>
  )
}

