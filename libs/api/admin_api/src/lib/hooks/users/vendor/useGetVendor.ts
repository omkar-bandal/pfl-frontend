import {useGetData} from "@prime-fresh/common_api";
import { GetVendor } from "../../../models";

export const useGetVendor = (url: string, id: string) => {
    return useGetData<null, GetVendor>(url, id, ['getVendor']);
  };