import { Employee } from "@prime-fresh/admin_modules";
import {useGetAllData} from "@prime-fresh/common_api";

export const useGetAllEmployee = (url: string) => {
  return useGetAllData<null, Employee[]>(url, ['getAllEmployees']);
};