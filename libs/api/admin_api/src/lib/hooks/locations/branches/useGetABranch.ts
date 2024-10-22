import { Branches } from "@prime-fresh/admin_modules"
import {useGetData} from "@prime-fresh/common_api";

export const useGetABranch = (url: string, id: string) => {
    return useGetData<null, Branches>(url, id, ['getABranch'])
}