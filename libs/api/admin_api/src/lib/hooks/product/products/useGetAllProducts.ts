import { Product } from "@prime-fresh/admin_modules";
import {useGetAllData} from "@prime-fresh/common_api";

export const useGetAllProducts = (url: string) => {
  return useGetAllData<null, Product[]>(url, ['getProducts']);
};