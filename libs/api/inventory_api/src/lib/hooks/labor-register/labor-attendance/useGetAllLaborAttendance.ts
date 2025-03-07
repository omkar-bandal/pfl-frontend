import { useGetAllData } from "@prime-fresh/common_api"
import { GetLaborAttendance } from "../../../models";

export const useGetAllLaborAttendance = (url: string) => {
    return useGetAllData<null, GetLaborAttendance[]>(url, ["get-all-labor-attendance"]);
}