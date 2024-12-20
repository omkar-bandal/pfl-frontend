import { useGetAllData } from "@prime-fresh/common_api"
import { GetEODReport } from "../../models"

export const useGetAllEODReports = (url: string) => {
    return useGetAllData<null, GetEODReport[]>(url, ["get-all-eod-reports"]);
}