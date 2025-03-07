import { GetAllFilteredFarmerData, GetAllFilteredVendorData } from "@prime-fresh/admin_api";
import { axiosInstance, COM_API_URL, handleError } from "@prime-fresh/common_api"
import { useQuery } from "@tanstack/react-query";
import {AxiosResponse} from "axios";

const getVendorOrFarmerBySource = async(source: string) => {
    try{
        const response: AxiosResponse = await axiosInstance.get(`${COM_API_URL.BASE_URL}/source/${source}`);
        console.log(response.data);
        return response.data;
    }catch(error){
        handleError(error);
    }
}
export const useGetVendorOrFarmerBySource = (source: string) => {
    return useQuery<GetAllFilteredVendorData | GetAllFilteredFarmerData, Error>({queryKey: ["get-vendors-farmers-data-by-source"], queryFn: () => getVendorOrFarmerBySource(source), enabled: !!source})
}