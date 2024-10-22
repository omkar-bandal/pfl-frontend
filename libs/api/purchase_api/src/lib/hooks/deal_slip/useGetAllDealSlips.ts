import { useGetAllData } from "@prime-fresh/common_api";
import { GetDealSlip } from "../../models";

export const useGetAllDealSlip = (url: string) => {
  return useGetAllData<null, GetDealSlip[]>(url, ['getAllDealSlip']);
};