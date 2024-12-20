import { useGetAllData } from "@prime-fresh/common_api"
import { GetFilteredBranchData } from "../../../models"

export const useGetAllFilteredBranches = (url: string) => {
    return useGetAllData<null, GetFilteredBranchData[]>(url, ["get-all-filtered-branches"]);
}