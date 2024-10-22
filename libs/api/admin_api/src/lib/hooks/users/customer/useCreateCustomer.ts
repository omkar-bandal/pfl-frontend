import { CustomerPost, Response } from "@prime-fresh/admin_modules";
import { useCreateData } from "@prime-fresh/common_api";

export const useCreateCustomer = (url: string) => {
    return useCreateData<CustomerPost, Response>(url)
}