import { useUpdateData } from "@prime-fresh/common_api";
import { PostEmployee } from "../../../models";

export const useUpdateEmployee = (url: string, id: string) => {
    return useUpdateData<PostEmployee, Response>(url, id);
}