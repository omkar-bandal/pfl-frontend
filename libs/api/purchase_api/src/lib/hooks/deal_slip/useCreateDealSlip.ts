import { useCreateData } from "@prime-fresh/common_api";
import {PostResponse} from "@prime-fresh/admin_api";

export const useCreateDealSlip = (url: string) => {
    return useCreateData<FormData, PostResponse>(url);
}