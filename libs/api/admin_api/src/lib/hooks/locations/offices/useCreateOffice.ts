import { useCreateData } from "@prime-fresh/common_api"
import { PostOffices, PostResponse } from "../../../models"

export const useCreateOffice = (url: string) => {
    return useCreateData<PostOffices, PostResponse>(url)
}