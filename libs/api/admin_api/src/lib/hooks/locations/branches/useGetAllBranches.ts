import { Branches } from "@prime-fresh/admin_modules";
import {useGetAllData} from "@prime-fresh/common_api";

export const useGetAllBranches = (url: string) => {
    return useGetAllData<null, Branches[]>(url, ['getAllBranches']);
  };