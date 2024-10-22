import { useGetData } from "@prime-fresh/common_api";
import { GetMCvoucher } from "../../../models";

export const useGetMCVoucher = (url: string, id: string) => {
    return useGetData<null, GetMCvoucher>(url, id, ['getGRN']);
}