import { Offices } from "@prime-fresh/admin_modules"
import {useGetData} from "@prime-fresh/common_api"

export const useGetAOffice = (url: string, id: string) => {
    return useGetData<null, Offices>(url, id, ['getAOffice'])
}