import { useGetAllData } from "@prime-fresh/common_api"
import { GetLaborRegistration } from "../../../models";

export const useGetAllLaborData = (url: string) => {
    return useGetAllData<null, GetLaborRegistration[]>(url, ["get-all-labor-data"]);
}