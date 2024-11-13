import {useGetAllData} from "@prime-fresh/common_api";
import { GetOffices } from "../../../models";

export const useGetAllOffices = (url: string) => {
    return useGetAllData<null, GetOffices[]>(url, ['getAllOffices']);
  };