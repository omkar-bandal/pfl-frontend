import {useGetAllData} from "@prime-fresh/common_api";
import { GetBranches } from "../../../models";

export const useGetAllBranches = (url: string) => {
    return useGetAllData<null, GetBranches[]>(url, ['getAllBranches']);
  };