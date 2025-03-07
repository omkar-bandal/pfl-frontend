import { useGetData } from "@prime-fresh/common_api"
import { GetVehicleDispatchRegister } from "../../models"

export const useGetAVehicleDispatchRegister = (url: string, id: string) => {
    return useGetData<null, GetVehicleDispatchRegister>(url, id, ["get-a-vehicle-dispatch-register"]);
}