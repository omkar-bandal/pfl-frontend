import { useDeleteData } from "@prime-fresh/common_api";
import { Customer } from "@prime-fresh/admin_modules";

export const useDeleteCustomer = (url: string) => {
    return useDeleteData< Customer>(url);
}