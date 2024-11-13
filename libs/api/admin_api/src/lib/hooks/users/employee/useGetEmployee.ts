import {useGetData} from "@prime-fresh/common_api";
import { GetEmployee } from "../../../models";

export const useGetEmployee = (url: string, id: string) => {
    return useGetData<null, GetEmployee>(url, id, ['getEmployee']);
  };