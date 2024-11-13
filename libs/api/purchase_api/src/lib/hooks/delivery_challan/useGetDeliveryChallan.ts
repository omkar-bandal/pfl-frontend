import { useGetData } from "@prime-fresh/common_api";
import { GetDeliveryChallan } from "../../models";

export const useGetDeliveryChallan = (url: string, id: string) => {
    return useGetData<null, GetDeliveryChallan>(url, id, ['getDeliveryChallan']);
}