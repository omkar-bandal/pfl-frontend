import {useGetAllData} from "@prime-fresh/common_api";
import { GetVendorCategory } from "../../../../models";

export const useGetAllVendorCat = (url: string) => {
    return useGetAllData<null, GetVendorCategory[]>(url,['getAllVendorCat']);
  };