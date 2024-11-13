import { useCreateData } from "@prime-fresh/common_api"
import { PostBranches, PostResponse } from "../../../models"

export const useCreateBranches = (url: string) => {
    return useCreateData<PostBranches, PostResponse>(url)
}