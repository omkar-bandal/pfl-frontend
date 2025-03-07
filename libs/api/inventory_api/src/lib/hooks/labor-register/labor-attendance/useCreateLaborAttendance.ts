import { PostResponse } from "@prime-fresh/admin_api";
import { useCreateData } from "@prime-fresh/common_api"

export const useCreateLaborAttendance = (url: string) => {
    return useCreateData<FormData, PostResponse>(url);
}