import { useUpdateData } from "@prime-fresh/common_api";
import { Customer, Response } from "@prime-fresh/admin_modules";

export const useUpdateCustomer = (url: string, id: string) => {
    return useUpdateData<Customer, Response>(url, id);
}