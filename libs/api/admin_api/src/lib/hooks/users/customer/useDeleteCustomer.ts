import { useDeleteData } from "@prime-fresh/common_api";
import { PostResponse } from "../../../models";

export const useDeleteCustomer = (url: string) => {
    return useDeleteData<PostResponse>(url);
}