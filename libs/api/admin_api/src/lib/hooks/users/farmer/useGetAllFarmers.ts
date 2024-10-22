import { Farmer } from "@prime-fresh/admin_modules";
import { useGetAllData } from "@prime-fresh/common_api";

export const useGetAllFarmers = (url: string) => {
  return useGetAllData<null, Farmer[]>(url, ['getFarmers']);
};