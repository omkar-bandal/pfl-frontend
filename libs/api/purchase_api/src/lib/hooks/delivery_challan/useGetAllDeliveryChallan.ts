import { useGetAllData } from "@prime-fresh/common_api";
import { GetDeliveryChallan } from "../../models";

export const useGetAllDeliveryChallan = (url: string) => {
  return useGetAllData<null, GetDeliveryChallan[]>(url, ['getAllDeliveryChallan']);
};