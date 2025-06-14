import { ApiBaseState, ErrorModel } from "@prime-fresh/common_api";
import { GetFinalInvoice, FinalInvoiceServices } from "@prime-fresh/inventory_api";
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "@tanstack/react-query";

export function useCreateFinalInvoice(id: string):
    UseMutationResult<{ invoiceurl: string }, ErrorModel, unknown, unknown> {
    return useMutation<{ invoiceurl: string }, ErrorModel, unknown, unknown>({
        mutationKey: ['create-final-invoice'],
        mutationFn: () => FinalInvoiceServices.getInstance().createFinalInvoice(id),
    });
}

export function useGetAllFinalInvoices():
    UseQueryResult<ApiBaseState<GetFinalInvoice[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetFinalInvoice[]>, ErrorModel>({
        queryKey: ['get-all-final-invoice'],
        queryFn: () => FinalInvoiceServices.getInstance().getAllFinalInvoices(),
    });
}