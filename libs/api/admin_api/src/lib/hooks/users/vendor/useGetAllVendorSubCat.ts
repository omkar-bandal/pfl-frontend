import { VendorSubcategory } from "@prime-fresh/admin_modules";
import {useGetAllData} from "@prime-fresh/common_api";

export const useGetAllVendorSubCat = (url: string) => {
    return useGetAllData<null, VendorSubcategory[]>(url, ['getVendor']);
  };