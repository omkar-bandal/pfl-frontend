import { useGetData } from "@prime-fresh/common_api"
import { GetAQR } from "../../models";

export const useGetAAQR = (url: string, id: string) => {
    return useGetData<null, GetAQR>(url, id, ["get-a-aqr"]);
}