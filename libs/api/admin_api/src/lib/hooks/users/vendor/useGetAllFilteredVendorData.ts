import { useGetAllData } from "@prime-fresh/common_api"
import {GetAllFilteredVendorData} from "../../../models";

export const useGetAllFilteredVendorData = (url: string) => {
    return useGetAllData<null, GetAllFilteredVendorData[]>(url, ['getAllFilteredVendorData'])
}