import {useGetAllData} from "@prime-fresh/common_api";
import { GetEmployee } from "../../../models";

export const useGetAllEmployee = (url: string) => {
  return useGetAllData<null, GetEmployee[]>(url, ['getAllEmployees']);
};