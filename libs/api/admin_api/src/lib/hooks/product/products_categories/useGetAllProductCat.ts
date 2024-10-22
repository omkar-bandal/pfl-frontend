import {ProductCategory } from "@prime-fresh/admin_modules";
import {useGetAllData} from "@prime-fresh/common_api";

export const useGetAllProductsCat = (url: string) => {
  return useGetAllData<null , ProductCategory[]>(url, ['getProductCat']);
};