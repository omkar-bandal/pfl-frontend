import {useGetAllData} from "@prime-fresh/common_api";
import { GetProduct } from "../../../models";

export const useGetAllProducts = (url: string) => {
  return useGetAllData<null, GetProduct[]>(url, ['getProducts']);
};