import { Employee, Response } from "@prime-fresh/admin_modules";
import { useUpdateData } from "@prime-fresh/common_api";

export const useUpdateEmployee = (url: string, id: string) => {
    return useUpdateData<Employee, Response>(url, id);
}