import { Response } from "@prime-fresh/admin/modules";
import { useUpdateData } from "@prime-fresh/common_api";

export const useUpdateLPVoucher = (url: string, id: string) => {
    return useUpdateData<FormData, Response>(url, id);
}