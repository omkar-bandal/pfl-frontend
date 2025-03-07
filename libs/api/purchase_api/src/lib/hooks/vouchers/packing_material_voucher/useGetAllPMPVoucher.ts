import { useGetAllData } from "@prime-fresh/common_api";
import { GetPMPvoucher } from "../../../models";

export const useGetAllPMPVoucher = (url: string) => {
  return useGetAllData<null, GetPMPvoucher[]>(url, ['getAllGRN']);
};