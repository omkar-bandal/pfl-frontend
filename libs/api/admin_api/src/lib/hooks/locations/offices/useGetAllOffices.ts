import { useGetDataByQuery } from "@prime-fresh/common_api";
import { GetOffices } from "../../../models";

export const useGetAllOffices = (url: string, officeType: string) => {
    return useGetDataByQuery<null, GetOffices[]>(url, officeType, ['get-all-offices']);
  };
// export const useGetAllOffices = (url: string) => {
//     return useGetAllData<null, GetOffices[]>(url, ['get-all-offices']);
//   };