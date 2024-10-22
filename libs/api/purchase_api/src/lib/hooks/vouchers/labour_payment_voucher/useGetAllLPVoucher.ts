import { useGetAllData } from "@prime-fresh/common_api";
import { GetLPvoucher } from "../../../models";

export const useGetAllLPVoucher = (url: string) => {
  return useGetAllData<null, GetLPvoucher[]>(url, ['getAllGRN']);
};