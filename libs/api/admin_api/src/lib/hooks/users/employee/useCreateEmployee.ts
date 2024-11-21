import { useCreateData } from "@prime-fresh/common_api";

export const useCreateEmployee = (url: string) => {
    return useCreateData<FormData, Response>(url)
}