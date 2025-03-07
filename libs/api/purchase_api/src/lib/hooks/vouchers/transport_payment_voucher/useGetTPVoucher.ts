import { useGetData } from "@prime-fresh/common_api";
import { GetTPvoucher } from "../../../models";

export const useGetTPVoucher = (url: string, id: string) => {
    return useGetData<null, GetTPvoucher>(url, id, ['getGRN']);
}