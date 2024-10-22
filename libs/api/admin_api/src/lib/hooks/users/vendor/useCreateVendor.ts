import { Response, Vendor } from "@prime-fresh/admin_modules";
import { useCreateData } from "@prime-fresh/common_api";

export const useCreateVendor = (url: string) => {
    return useCreateData<Vendor, Response>(url);
}