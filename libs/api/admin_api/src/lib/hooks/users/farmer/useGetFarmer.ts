import { GetFarmer } from "../../../models";
import {useGetData} from "@prime-fresh/common_api";

export const useGetFarmer = (url: string, id: string) => {
    return useGetData<null, GetFarmer>(url, id, ['getFarmer']);
  };