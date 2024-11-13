import { useGetData } from "@prime-fresh/common_api"
import { GetProductCategory } from "../../../models"

export const useGetAProductCat = (url: string, id: string) => {
    return useGetData<null, GetProductCategory>(url, id, ['getAProductCategory'])
}