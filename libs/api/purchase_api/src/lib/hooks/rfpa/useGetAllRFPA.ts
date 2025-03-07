import { useGetAllData } from "@prime-fresh/common_api";
import { GetRFPA } from "../../models";

export const useGetAllRFPA = (url: string) => {
  return useGetAllData<null, GetRFPA[]>(url, ['getAllRFPA']);
};