import { Farmer, Response } from "@prime-fresh/admin_modules";
import { useCreateData } from "@prime-fresh/common_api";

export const useCreateFarmer = (url: string) => {
    return useCreateData<Farmer, Response>(url)
}