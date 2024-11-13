import { useGetData } from "@prime-fresh/common_api"
import { GetUOMConversionMatrix } from "../../../models"

export const useGetAUOMConversionMatrixs = (url: string, id: string) => {
    return useGetData<null, GetUOMConversionMatrix>(url, id, ['getAUOMConversionMatrix'])
}