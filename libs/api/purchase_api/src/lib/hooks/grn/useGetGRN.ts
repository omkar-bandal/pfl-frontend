import { useGetData } from "@prime-fresh/common_api";
import { GetGRN } from "../../models";

export const useGetGRN = (url: string, id: string) => {
    return useGetData<null, GetGRN>(url, id, ['getGRN']);
}