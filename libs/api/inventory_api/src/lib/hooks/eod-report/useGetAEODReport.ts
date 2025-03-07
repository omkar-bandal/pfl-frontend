import { useGetData } from "@prime-fresh/common_api"
import { GetEODReport } from "../../models";

export const useGetAEODReport = (url: string, id: string) => {
    return useGetData<null, GetEODReport>(url, id, ["get-a-eod-report"]);
}