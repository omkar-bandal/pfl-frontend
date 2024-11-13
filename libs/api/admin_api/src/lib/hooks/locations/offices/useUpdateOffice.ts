import { useUpdateData } from "@prime-fresh/common_api";
import { PostOffices, PostResponse } from "../../../models";

export const useUpdateOffice = (url: string, id: string) => {
    return useUpdateData<PostOffices, PostResponse>(url, id);
}