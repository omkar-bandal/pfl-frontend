import { PostResponse } from "@prime-fresh/admin_api";
import { useCreateData } from "@prime-fresh/common_api";

export const useCreateDumpRegister = (url: string) => {
    return useCreateData<FormData, PostResponse>(url);
}