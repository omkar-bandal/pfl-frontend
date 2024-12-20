import { useGetAllData } from "@prime-fresh/common_api"
import { GetSecondSaleRegister } from "../../models/second-sale-register.type"

export const useGetAllSecondSaleRegisters = (url: string) => {
    return useGetAllData<null, GetSecondSaleRegister[]>(url, ["get-all-second-sale-registers"]);
}