import { useGetData } from "@prime-fresh/common_api";
import { GetLPvoucher } from "../../../models";

export const useGetLPVoucher = (url: string, id: string) => {
    return useGetData<null, GetLPvoucher>(url, id, ['getGRN']);
}