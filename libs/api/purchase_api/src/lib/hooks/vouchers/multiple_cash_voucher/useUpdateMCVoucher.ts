import { Response } from "@prime-fresh/admin/modules";
import { useUpdateData } from "@prime-fresh/common_api";

export const useUpdateMCVoucher = (url: string, id: string) => {
    return useUpdateData<FormData, Response>(url, id);
}