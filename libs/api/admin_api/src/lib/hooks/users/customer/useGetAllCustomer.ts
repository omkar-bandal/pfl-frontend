import { useGetAllData } from "@prime-fresh/common_api";
import { GetCustomer } from "../../../models";

export const useGetAllCustomers = (url: string) => {
  return useGetAllData<null, GetCustomer[]>(url, ['getAllCustomers']);
};