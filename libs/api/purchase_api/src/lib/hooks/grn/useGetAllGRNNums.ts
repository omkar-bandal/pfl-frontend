import { useGetAllData } from "@prime-fresh/common_api";
import { GetAllGRNnumbers } from "../../models";

export const useGetAllGRNNums = (url: string) => {
    return useGetAllData<null, GetAllGRNnumbers[]>(url, ['getAllGRNNumbers']);
  };