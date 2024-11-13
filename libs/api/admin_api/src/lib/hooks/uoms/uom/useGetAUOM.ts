import { useGetData } from "@prime-fresh/common_api"
import { GetUOM } from "../../../models"

export const useGetAUOM = (url: string, id: string) => {
    return useGetData<null, GetUOM>(url, id, ['getAUOM'])
}