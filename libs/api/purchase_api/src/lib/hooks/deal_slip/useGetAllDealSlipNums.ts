import { useGetAllData } from "@prime-fresh/common_api";
import { GetAllDealSlipNums } from "../../models";

export const useGetAllDealSlipNums = (url: string) => {
    return useGetAllData<null, GetAllDealSlipNums[]>(url, ['getAllDealSlipNumbers']);
  };