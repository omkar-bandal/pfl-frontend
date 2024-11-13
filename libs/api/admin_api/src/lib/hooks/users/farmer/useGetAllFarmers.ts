import { GetFarmer } from "../../../models";
import { useGetAllData } from "@prime-fresh/common_api";

export const useGetAllFarmers = (url: string) => {
  return useGetAllData<null, GetFarmer[]>(url, ['getFarmers']);
};