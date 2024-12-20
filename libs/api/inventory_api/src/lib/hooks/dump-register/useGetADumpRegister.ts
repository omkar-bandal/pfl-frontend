import { useGetData } from "@prime-fresh/common_api"
import { GetDumpRegister } from "../../models";

export const useGetADumpRegister = (url: string, id: string) => {
    return useGetData<null, GetDumpRegister>(url, id, ["get-a-dump-register"]);
}