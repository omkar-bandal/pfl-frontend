import { useGetAllData } from "@prime-fresh/common_api";
import { GetMCvoucher } from "../../../models";

export const useGetAllMCVoucher = (url: string) => {
  return useGetAllData<null, GetMCvoucher[]>(url, ['getAllGRN']);
};