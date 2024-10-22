import { Customer } from "@prime-fresh/admin_modules";
import { useGetAllData } from "@prime-fresh/common_api";

export const useGetAllCustomers = (url: string) => {
  return useGetAllData<null, Customer[]>(url, ['getAllCustomers']);
};