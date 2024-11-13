import { useUpdateData } from "@prime-fresh/common_api";
import { PostProductCategory, PostResponse } from "../../../models";

export const useUpdateProductCat = (url: string, id: string) => {
    return useUpdateData<PostProductCategory, PostResponse>(url, id);
}