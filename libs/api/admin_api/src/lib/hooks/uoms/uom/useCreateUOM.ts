import { useCreateData } from "@prime-fresh/common_api";
import { PostResponse } from "../../../models";

export const useCreateUOM = (url: string) => {
    return useCreateData<FormData, PostResponse>(url)
}