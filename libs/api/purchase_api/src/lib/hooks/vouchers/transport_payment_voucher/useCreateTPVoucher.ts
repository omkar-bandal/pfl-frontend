import { Response } from "@prime-fresh/admin_modules";
import { useCreateData } from "@prime-fresh/common_api";

export const useCreateTPVoucher = (url: string) => {
    return useCreateData<FormData, Response>(url);
}