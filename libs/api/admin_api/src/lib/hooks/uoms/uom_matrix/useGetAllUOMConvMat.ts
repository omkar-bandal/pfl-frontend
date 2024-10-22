import { UOMConversionMatrix } from "@prime-fresh/admin_modules";
import {useGetAllData} from "@prime-fresh/common_api";

export const useGetAllUOMConversionMatrixs = (url: string) => {
  return useGetAllData<null, UOMConversionMatrix[]>(url, ['getUOMConversionMatrixs']);
};