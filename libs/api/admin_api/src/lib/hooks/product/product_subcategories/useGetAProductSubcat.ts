import { useGetData } from "@prime-fresh/common_api"
import { GetProductSubcategory } from "../../../models"

export const useGetAProductSubcat = (url: string, id: string) => {
    return useGetData<null, GetProductSubcategory>(url, id, ['getAProductSubcategory'])
}