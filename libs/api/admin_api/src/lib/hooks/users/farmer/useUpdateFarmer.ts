import { PostResponse } from "../../../models";
import { useUpdateData } from "@prime-fresh/common_api";

export const useUpdateFarmer = (url: string, id: string) => {
    return useUpdateData<FormData, PostResponse>(url, id);
}