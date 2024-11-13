import {useGetAllData} from "@prime-fresh/common_api";
import { GetUOMConversionMatrix } from "../../../models";

export const useGetAllUOMConversionMatrixs = (url: string) => {
  return useGetAllData<null, GetUOMConversionMatrix[]>(url, ['getUOMConversionMatrixs']);
};