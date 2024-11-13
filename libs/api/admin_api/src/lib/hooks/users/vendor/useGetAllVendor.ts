import {useGetAllData} from "@prime-fresh/common_api";
import { GetVendor } from "../../../models";

export const useGetAllVendors = (url: string) => {
  return useGetAllData<null, GetVendor[]>(url, ['getAllVendors']);
};