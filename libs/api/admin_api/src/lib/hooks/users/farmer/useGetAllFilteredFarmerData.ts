import { useGetAllData } from "@prime-fresh/common_api"
import {GetAllFilteredFarmerData} from "../../../models";

export const useGetAllFilteredFarmerData = (url: string) => {
    return useGetAllData<null, GetAllFilteredFarmerData[]>(url, ['getAllFilteredFarmerData'])
}