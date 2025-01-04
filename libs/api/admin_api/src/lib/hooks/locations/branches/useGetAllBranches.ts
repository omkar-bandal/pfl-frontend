import {useGetDataByQuery} from "@prime-fresh/common_api";
import { GetBranches } from "../../../models";

export const useGetAllBranches = (url: string, branchType: string) => {
    return useGetDataByQuery<null, GetBranches[]>(url, branchType, ['getAllBranches', branchType]);
  };