import {useGetAllData} from "@prime-fresh/common_api";
import { GetUOM } from "../../../models";

export const useGetAllUOMs = (url: string) => {
  return useGetAllData<null, GetUOM[]>(url, ['getUOMs']);
};