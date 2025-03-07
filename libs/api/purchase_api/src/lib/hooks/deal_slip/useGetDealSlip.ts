import { useGetData } from "@prime-fresh/common_api";
import { GetDealSlip } from "../../models";

export const useGetDealSlip = (url: string, id: string) => {
    return useGetData<null, GetDealSlip>(url, id, ['getDealSlip']);
}