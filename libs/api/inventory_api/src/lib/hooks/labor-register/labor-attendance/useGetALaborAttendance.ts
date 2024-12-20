import { useGetData } from "@prime-fresh/common_api"
import { GetLaborAttendance } from "../../../models";

export const useGetALaborAttendance = (url: string, id: string) => {
    return useGetData<null, GetLaborAttendance>(url, id, ["get-a-labor-attendance"]);
}