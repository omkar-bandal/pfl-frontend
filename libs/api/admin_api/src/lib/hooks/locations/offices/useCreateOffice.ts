import { Offices, Response } from "@prime-fresh/admin_modules"
import { useCreateData } from "@prime-fresh/common_api"

export const useCreateOffice = (url: string) => {
    return useCreateData<Offices, Response>(url)
}