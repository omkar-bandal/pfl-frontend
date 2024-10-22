import { ProductSubcategory } from "@prime-fresh/admin_modules";
import {useGetAllData} from "@prime-fresh/common_api";

export const useGetAllProductSubCat = (url: string) => {
  return useGetAllData<null, ProductSubcategory[]>(url, ['getProductSubcat']);
};