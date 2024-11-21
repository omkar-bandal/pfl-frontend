import { useGetAllData } from "@prime-fresh/common_api";
import { GetPaymentRequest } from "../../models";

export const useGetAllPaymentRequest = (url: string) => {
  return useGetAllData<null, GetPaymentRequest[]>(url, ['getAllPaymentRequest']);
};