import { useGetData } from "@prime-fresh/common_api"
import { GetVendorSubcategory } from "../../../../models"

export const useGetAVendorSubCat = (url: string, id: string) => {
    return useGetData<null, GetVendorSubcategory>(url, id, ['getAVendorSubcategory'])
}