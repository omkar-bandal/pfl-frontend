import { Offices, Response } from "@prime-fresh/admin_modules";
import { useUpdateData } from "@prime-fresh/common_api";

export const useUpdateOffice = (url: string, id: string) => {
    return useUpdateData<Offices, Response>(url, id);
}