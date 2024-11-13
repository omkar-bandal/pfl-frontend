import {useGetAllData} from "@prime-fresh/common_api";
import { GetProductClassification } from "../../../models";

export const useGetAllProductClassification = (url: string) => {
  return useGetAllData<null, GetProductClassification[]>(url, ['getProductsClassification']);
};