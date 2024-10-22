import { Branches, Response } from "@prime-fresh/admin_modules";
import { useUpdateData } from "@prime-fresh/common_api";

export const useUpdateBranch = (url: string, id: string) => {
    return useUpdateData<Branches, Response>(url, id);
}