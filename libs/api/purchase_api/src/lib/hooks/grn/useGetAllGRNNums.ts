import { useGetAllData } from "@prime-fresh/common_api";
import { getAllGRNnumbers } from "../../models";

export const useGetAllGRNNums = (url: string) => {
    return useGetAllData<null, getAllGRNnumbers[]>(url, ['getAllGRNNumbers']);
  };