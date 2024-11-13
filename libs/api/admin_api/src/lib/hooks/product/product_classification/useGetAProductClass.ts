import { useGetData } from "@prime-fresh/common_api"
import { GetProductClassification } from "../../../models"

export const useGetAProductClassification = (url: string, id: string) => {
    return useGetData<null, GetProductClassification>(url, id, ['getAProductClassification'])
}