import { useGetData } from "@prime-fresh/common_api";
import { GetTempLabor } from "../../../models";

export const useGetATempLaborData = (url: string, id: string) => {
    return useGetData<null, GetTempLabor>(url, id, ["get-a-temp-labor-data"]);
}