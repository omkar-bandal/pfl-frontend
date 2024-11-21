import { useUpdateData } from "@prime-fresh/common_api";

export const useUpdateEmployee = (url: string, id: string) => {
    return useUpdateData<FormData, Response>(url, id);
}