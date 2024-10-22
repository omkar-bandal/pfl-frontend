import { Farmer } from "@prime-fresh/admin_modules";
import {useGetData} from "@prime-fresh/common_api";

export const useGetFarmer = (url: string, id: string) => {
    return useGetData<null, Farmer>(url, id, ['getFarmer']);
  };