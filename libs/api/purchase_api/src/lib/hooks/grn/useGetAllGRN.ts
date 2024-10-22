import { useGetAllData } from "@prime-fresh/common_api";
import { GetGRN } from "../../models";

export const useGetAllGRN = (url: string) => {
  return useGetAllData<null, GetGRN[]>(url, ['getAllGRN']);
};