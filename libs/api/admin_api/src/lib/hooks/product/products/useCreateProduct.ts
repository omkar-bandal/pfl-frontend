import { Product, Response } from "@prime-fresh/admin_modules";
import { useCreateData } from "@prime-fresh/common_api";

export const useCreateProduct = (url: string) => {
    return useCreateData<Product, Response>(url)
}