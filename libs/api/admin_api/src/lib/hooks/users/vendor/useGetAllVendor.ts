import { Vendor } from "@prime-fresh/admin_modules";
import {useGetAllData} from "@prime-fresh/common_api";

export const useGetAllVendors = (url: string) => {
  return useGetAllData<null, Vendor[]>(url, ['getAllVendors']);
};