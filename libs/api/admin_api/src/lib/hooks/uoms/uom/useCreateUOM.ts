import { Response, UOMPost } from "@prime-fresh/admin_modules";
import { useCreateData } from "@prime-fresh/common_api";

export const useCreateUOM = (url: string) => {
    return useCreateData<UOMPost, Response>(url)
}