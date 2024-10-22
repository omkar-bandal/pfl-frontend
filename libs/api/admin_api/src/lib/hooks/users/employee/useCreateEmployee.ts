import { Employee, Response } from "@prime-fresh/admin_modules";
import { useCreateData } from "@prime-fresh/common_api";

export const useCreateEmployee = (url: string) => {
    return useCreateData<Employee, Response>(url)
}