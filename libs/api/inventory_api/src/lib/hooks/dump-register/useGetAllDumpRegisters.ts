import { useGetAllData } from "@prime-fresh/common_api"
import { GetDumpRegister } from "../../models"

export const useGetAllDumpRegisters = (url: string) => {
    return useGetAllData<null, GetDumpRegister[]>(url, ["get-all-dump-registers"]);
}