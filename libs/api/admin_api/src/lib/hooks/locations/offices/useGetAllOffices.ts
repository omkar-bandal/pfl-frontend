import { Offices } from "@prime-fresh/admin_modules";
import {useGetAllData} from "@prime-fresh/common_api";

export const useGetAllOffices = (url: string) => {
    return useGetAllData<null, Offices[]>(url, ['getAllOffices']);
  };