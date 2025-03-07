import { CompanyNameTypes } from "../../models";
import { useGetAllData } from "../generic";

export const useGetCompanyNames = (url: string) => {
    return useGetAllData<null, CompanyNameTypes[]>(url, ['getCompanyNames']);
}