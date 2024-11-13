import { useGetData } from "@prime-fresh/common_api"
import { GetProduct } from "../../../models"

export const useGetAProduct = (url: string, id: string) => {
    return useGetData<null, GetProduct>(url, id, ['getAProduct'])
}