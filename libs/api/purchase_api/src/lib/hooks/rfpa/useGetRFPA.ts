import { useGetData } from "@prime-fresh/common_api";
import { GetRFPA } from "../../models";

export const useGetRFPA = (url: string, id: string) => {
    return useGetData<null, GetRFPA>(url, id, ['getRFPA', id]);
}