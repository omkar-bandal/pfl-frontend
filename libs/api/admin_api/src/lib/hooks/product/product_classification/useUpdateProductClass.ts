import { useUpdateData } from "@prime-fresh/common_api";
import { PostProductClassification, PostResponse } from "../../../models";

export const useUpdateProductClassification = (url: string, id: string) => {
    return useUpdateData<PostProductClassification, PostResponse>(url, id);
}