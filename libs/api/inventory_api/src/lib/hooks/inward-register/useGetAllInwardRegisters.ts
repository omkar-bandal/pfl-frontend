import { useGetAllData } from "@prime-fresh/common_api"
import { GetInwardRegister } from "../../models"

export const useGetAllInwardRegisters = (url: string) => {
    return useGetAllData<null, GetInwardRegister[]>(url, ['get-all-inward-registers'])
}