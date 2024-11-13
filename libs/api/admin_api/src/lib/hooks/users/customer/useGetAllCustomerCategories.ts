import { CustomerCategory } from "../../../models";
import { useGetAllData } from "@prime-fresh/common_api";

export const useGetAllCustomerCategories = (url: string) => {
    return useGetAllData<null, CustomerCategory[]>(url, ["getAllCustomerCategories"]);
}