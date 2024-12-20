import { useGetData } from "@prime-fresh/common_api"
import { GetLaborRegistration } from "../../../models"

export const useGetALaborData = (url: string, id: string) => {
    return useGetData<null, GetLaborRegistration>(url, id, ["get-a-labor-data"]);
}