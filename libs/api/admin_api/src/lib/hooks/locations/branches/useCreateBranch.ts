import { Branches, Response } from "@prime-fresh/admin_modules"
import { useCreateData } from "@prime-fresh/common_api"

export const useCreateBranches = (url: string) => {
    return useCreateData<Branches, Response>(url)
}