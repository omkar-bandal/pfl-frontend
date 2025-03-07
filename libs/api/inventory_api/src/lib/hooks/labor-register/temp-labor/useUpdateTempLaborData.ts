import { PostResponse } from "@prime-fresh/admin_api";
import { useUpdateData } from "@prime-fresh/common_api";

export const useUpdateTempLaborData = (url: string, id: string) => {
    return useUpdateData<FormData, PostResponse>(url, id);
}