import { useCreateData } from "@prime-fresh/common_api";
import { PostResponse } from "../../../models";

export const useCreateFarmer = (url: string) => {
    return useCreateData<FormData, PostResponse>(url)
}