import { useGetData } from "@prime-fresh/common_api";
import { GetPaymentRequest } from "../../models";

export const useGetPaymentRequest = (url: string, id: string) => {
    return useGetData<null, GetPaymentRequest>(url, id, ['getPaymentRequest']);
}