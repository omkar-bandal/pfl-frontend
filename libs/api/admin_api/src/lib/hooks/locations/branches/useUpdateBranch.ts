import { useUpdateData } from "@prime-fresh/common_api";
import { PostBranches, PostResponse } from "../../../models";

export const useUpdateBranch = (url: string, id: string) => {
    return useUpdateData<PostBranches, PostResponse>(url, id);
}