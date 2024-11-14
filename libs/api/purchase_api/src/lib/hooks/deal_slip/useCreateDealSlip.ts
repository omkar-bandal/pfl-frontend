import { useCreateData } from "@prime-fresh/common_api";
import { PostDealSlip } from "../../models";
import {PostResponse} from "@prime-fresh/admin_api";

export const useCreateDealSlip = (url: string) => {
    return useCreateData<PostDealSlip, PostResponse>(url);
}