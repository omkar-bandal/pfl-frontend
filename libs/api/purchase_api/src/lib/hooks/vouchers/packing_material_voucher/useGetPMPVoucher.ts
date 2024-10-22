import { useGetData } from "@prime-fresh/common_api";
import { GetPMPvoucher } from "../../../models";

export const useGetPMPVoucher = (url: string, id: string) => {
    return useGetData<null, GetPMPvoucher>(url, id, ['getGRN']);
}