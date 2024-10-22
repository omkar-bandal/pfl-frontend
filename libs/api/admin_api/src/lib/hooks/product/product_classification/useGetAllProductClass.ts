import { ProductClassification } from "@prime-fresh/admin_modules";
import {useGetAllData} from "@prime-fresh/common_api";

export const useGetAllProductClassification = (url: string) => {
  return useGetAllData<null, ProductClassification[]>(url, ['getProductsClassification']);
};