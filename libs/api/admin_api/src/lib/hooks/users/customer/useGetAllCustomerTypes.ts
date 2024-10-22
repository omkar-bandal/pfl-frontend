import { CustomerTypes } from "@prime-fresh/admin_modules";
import {useGetAllData} from "@prime-fresh/common_api";

export const useGetAllCustomerTypes = (url: string) => {
    return useGetAllData<null, CustomerTypes[]>(url, ['getAllCustomerTypes']);
  };