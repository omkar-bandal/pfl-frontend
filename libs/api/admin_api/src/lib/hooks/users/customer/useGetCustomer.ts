import { Customer } from "@prime-fresh/admin_modules";
import { useGetData } from "@prime-fresh/common_api";

export const useGetCustomer = (url: string, id: string) => {
  return useGetData<null, Customer>(url, id, ['getCustomer']);
};