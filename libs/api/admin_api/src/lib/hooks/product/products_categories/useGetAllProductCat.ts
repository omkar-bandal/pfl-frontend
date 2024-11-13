import {useGetAllData} from "@prime-fresh/common_api";
import { GetProductCategory } from "../../../models";

export const useGetAllProductsCat = (url: string) => {
  return useGetAllData<null , GetProductCategory[]>(url, ['getProductCat']);
};