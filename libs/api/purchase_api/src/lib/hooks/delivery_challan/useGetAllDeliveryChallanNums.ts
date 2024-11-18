import { useGetAllData } from "@prime-fresh/common_api";
import { GetAllChallanNumbers } from "../../models";

export const useGetAllDeliveryChallanNums = (url: string) => {
    return useGetAllData<null, GetAllChallanNumbers[]>(url, ['getAllDeliveryChallanNumbers']);
  };