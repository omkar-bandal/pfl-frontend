import { useGetData } from "@prime-fresh/common_api";
import { GetCustomer } from "../../../models";

export const useGetCustomer = (url: string, id: string) => {
  return useGetData<null, GetCustomer>(url, id, ['getCustomer']);
};