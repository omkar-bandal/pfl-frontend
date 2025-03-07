import { useGetAllData } from "@prime-fresh/common_api";
import { GetTPvoucher } from "../../../models";

export const useGetAllTPVoucher = (url: string) => {
  return useGetAllData<null, GetTPvoucher[]>(url, ['getAllGRN']);
};