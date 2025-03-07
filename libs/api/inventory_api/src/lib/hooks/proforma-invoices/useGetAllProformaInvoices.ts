import { useGetAllData } from "@prime-fresh/common_api";
import { GetProformaInvoice } from "../../models";

export const useGetAllProformaInvoices = (url: string) => {
    return useGetAllData<null, GetProformaInvoice[]>(url, ["get-all-proforma-invoices"]);
}