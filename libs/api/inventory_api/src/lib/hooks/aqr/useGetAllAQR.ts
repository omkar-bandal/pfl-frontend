import { useGetAllData } from "@prime-fresh/common_api"
import { GetAQR } from "../../models";

export const useGetAllAQR = (url: string) => {
    return useGetAllData<null, GetAQR[]>(url, ["get-all-aqr"]);
}