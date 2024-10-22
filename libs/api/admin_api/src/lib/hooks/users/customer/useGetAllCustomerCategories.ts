import { CustomerCategory } from "@prime-fresh/admin_modules";
import { useGetAllData } from "@prime-fresh/common_api";

export const useGetAllCustomerCategories = (url: string) => {
    return useGetAllData<null, CustomerCategory[]>(url, ["getAllCustomerCategories"]);
}