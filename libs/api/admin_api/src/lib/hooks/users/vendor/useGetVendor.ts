import { Vendor } from "@prime-fresh/admin_modules";
import {useGetData} from "@prime-fresh/common_api";

export const useGetVendor = (url: string, id: string) => {
    return useGetData<null, Vendor>(url, id, ['getVendor']);
  };