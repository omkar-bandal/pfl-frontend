import {useGetAllData} from "@prime-fresh/common_api";
import { GetVendorSubcategory } from "../../../models";

export const useGetAllVendorSubCat = (url: string) => {
    return useGetAllData<null, GetVendorSubcategory[]>(url, ['getVendor']);
  };