import { useGetData } from "@prime-fresh/common_api"
import { GetVendorCategory } from "../../../../models"

export const useGetAVendorCat = (url: string, id: string) => {
    return useGetData<null, GetVendorCategory>(url, id, ['getAVendorCategory'])
}