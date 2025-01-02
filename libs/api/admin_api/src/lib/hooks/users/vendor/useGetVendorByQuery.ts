import { useGetDataByQuery } from "@prime-fresh/common_api"
import { GetAllFilteredVendorData } from "../../../models";

export const useGetAllVendorByQuery = (url: string, id: string) => {
    return useGetDataByQuery<null, GetAllFilteredVendorData[]>(url, id, ['get-vendors-by-query', id]);
}