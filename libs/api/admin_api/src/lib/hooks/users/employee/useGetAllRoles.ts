import { useGetAllData } from "@prime-fresh/common_api";
import { GetRole } from "../../../models";

export const useGetAllRoles = (url: string) => {
    return useGetAllData<GetRole, null>(url, ['getAllRoles']);
}