import { VendorCategory } from "@prime-fresh/admin_modules";
import {useGetAllData} from "@prime-fresh/common_api";

export const useGetAllVendorCat = (url: string) => {
    return useGetAllData<null, VendorCategory[]>(url,['getAllVendorCat']);
  };