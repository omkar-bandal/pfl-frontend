import {useGetData} from "@prime-fresh/common_api"
import { GetOffices } from "../../../models"

export const useGetAOffice = (url: string, id: string) => {
    return useGetData<null, GetOffices>(url, id, ['getAOffice'])
}