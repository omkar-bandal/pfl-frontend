import { useGetData } from "@prime-fresh/common_api"
import { GetInwardRegister } from "../../models";

export const useGetAInwardRegister = (url: string, id: string) => {
    return useGetData<null, GetInwardRegister>(url, id, ["get-a-inward-register"]);
}