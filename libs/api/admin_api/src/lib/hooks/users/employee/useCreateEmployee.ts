import { useCreateData } from "@prime-fresh/common_api";
import { PostEmployee } from "../../../models";

export const useCreateEmployee = (url: string) => {
    return useCreateData<PostEmployee, Response>(url)
}