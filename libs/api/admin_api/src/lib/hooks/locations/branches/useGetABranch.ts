import {useGetData} from "@prime-fresh/common_api";
import { GetBranches } from "../../../models";

export const useGetABranch = (url: string, id: string) => {
    return useGetData<null, GetBranches>(url, id, ['getABranch'])
}