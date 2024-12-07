import { useGetAllData } from "@prime-fresh/common_api";
import { GetAllRFPAnumbers } from "../../models";

export const useGetAllRFPANums = (url: string) => {
    return useGetAllData<null, GetAllRFPAnumbers[]>(url, ['getAllRFPANumbers']);
  };