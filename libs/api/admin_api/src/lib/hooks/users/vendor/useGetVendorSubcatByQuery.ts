import { useGetDataByQuery } from "@prime-fresh/common_api"
import { GetVendorSubcategory } from "../../../models"

export const useGetAllVendorSubcategoriesByQuery = (url: string, id: string) => {
    return useGetDataByQuery<null, GetVendorSubcategory[]>(url, id, ['get-vendor-subcategories-by-query', id]);
}