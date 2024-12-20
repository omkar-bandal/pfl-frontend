import { useGetData } from "@prime-fresh/common_api"
import { GetSecondSaleRegister } from "../../models/second-sale-register.type";

export const useGetASecondSaleRegister = (url: string, id: string) => {
    return useGetData<null, GetSecondSaleRegister>(url, id, ["get-a-second-sale-register"]);
}