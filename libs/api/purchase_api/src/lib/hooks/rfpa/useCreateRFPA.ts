import { PostResponse } from "@prime-fresh/admin_api";
import { useCreateData } from "@prime-fresh/common_api";
import {PostRFPA} from '../../models';

export const useCreateRFPA = (url: string) => {
    return useCreateData<PostRFPA, PostResponse>(url);
}