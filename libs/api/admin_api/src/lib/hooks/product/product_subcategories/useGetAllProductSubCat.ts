import {useGetAllData} from "@prime-fresh/common_api";
import { GetProductSubcategory } from "../../../models";

export const useGetAllProductSubCat = (url: string) => {
  return useGetAllData<null, GetProductSubcategory[]>(url, ['getProductSubcat']);
};