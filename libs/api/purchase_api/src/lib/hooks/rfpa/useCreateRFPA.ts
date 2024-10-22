import { Response } from "@prime-fresh/admin_modules";
import { useCreateData } from "@prime-fresh/common_api";
import {PostRFPA} from '../../models';

export const useCreateRFPA = (url: string) => {
    return useCreateData<PostRFPA, Response>(url);
}