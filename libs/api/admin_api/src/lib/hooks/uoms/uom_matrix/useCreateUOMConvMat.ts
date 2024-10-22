import { Response, UOMConversionMatrix } from "@prime-fresh/admin_modules";
import { useCreateData } from "@prime-fresh/common_api";

export const useCreateUOMConversionMatrix = (url: string) => {
    return useCreateData<UOMConversionMatrix, Response>(url)
}