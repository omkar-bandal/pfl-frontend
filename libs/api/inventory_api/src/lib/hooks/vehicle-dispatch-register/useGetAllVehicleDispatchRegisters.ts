import { useGetAllData } from "@prime-fresh/common_api"
import { GetVehicleDispatchRegister } from "../../models"

export const useGetAllVehicleDispatchRegisters = (url: string) => {
    return useGetAllData<null, GetVehicleDispatchRegister[]>(url, ["get-all-vehicle-dispatch-registers"]);
}