import { useGetAllData } from "@prime-fresh/common_api";
import { GetTempLabor } from "../../../models";

export const useGetAllTempLaborData = (url: string) => {
    return useGetAllData<null, GetTempLabor[]>(url, ["get-all-temp-labor-data"]);
}