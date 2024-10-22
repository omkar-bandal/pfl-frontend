import { Employee } from "@prime-fresh/admin_modules";
import {useGetData} from "@prime-fresh/common_api";

export const useGetEmployee = (url: string, id: string) => {
    return useGetData<null, Employee>(url, id, ['getEmployee']);
  };