import { useGetData } from "@prime-fresh/common_api";
import { GetCustomerDataPartial } from "../../../models";

export const useGetCustomerPartialData = (url: string, id: string | null) => {
    return useGetData<null, GetCustomerDataPartial>(url, id, ['getCustomerPartialData']);
  };