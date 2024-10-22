import { UOM } from "@prime-fresh/admin_modules";
import {useGetAllData} from "@prime-fresh/common_api";

export const useGetAllUOMs = (url: string) => {
  return useGetAllData<null, UOM[]>(url, ['getUOMs']);
};