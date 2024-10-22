import { Farmer, Response } from "@prime-fresh/admin_modules";
import { useUpdateData } from "@prime-fresh/common_api";

export const useUpdateFarmer = (url: string, id: string) => {
    return useUpdateData<Farmer, Response>(url, id);
}