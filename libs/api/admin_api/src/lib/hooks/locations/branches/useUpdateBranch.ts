import { useUpdateData } from "@prime-fresh/common_api";
import { PostResponse } from "../../../models";

export const useUpdateBranch = (url: string, id: string) => {
    return useUpdateData<FormData, PostResponse>(url, id);
}