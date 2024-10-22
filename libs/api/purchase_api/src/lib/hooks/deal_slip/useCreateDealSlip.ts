import { Response } from "@prime-fresh/admin_modules";
import { useCreateData } from "@prime-fresh/common_api";
import { PostDealSlip } from "../../models";

export const useCreateDealSlip = (url: string) => {
    return useCreateData<PostDealSlip, Response>(url);
}